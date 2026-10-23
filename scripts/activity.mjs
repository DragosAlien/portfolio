// Snapshot of commit activity from local git clones, for the Work section. Run by hand, commit the JSON.
// Usage: node scripts/activity.mjs --author 'Dragos|dralien' [--github user,user] ~/Projects/*/ ~/Personal/*/
// --github also reads the default branch of every repo those logged-in `gh` accounts can see, without cloning.
// Only counts leave this machine: no repo names, paths or emails are written.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const at = args.indexOf('--author');
if (at < 0 || !args[at + 1]) throw new Error('Pass --author <regex> matching your git name or email.');
const author = new RegExp(args[at + 1], 'i');
const gi = args.indexOf('--github');
if (gi >= 0 && !args[gi + 1]) throw new Error('Pass --github <gh user,...>.');
const accounts = gi < 0 ? [] : args[gi + 1].split(',');
const dirs = args.filter((_, i) => ![at, at + 1, ...(gi < 0 ? [] : [gi, gi + 1])].includes(i));

const run = (cmd, argv, env = process.env) =>
  execFileSync(cmd, argv, { encoding: 'utf8', env, stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024 });

// Each source is [repo, read]: read() returns "hash\tname email\tdate" lines. Hashes dedupe commits seen twice,
// the owner/name key dedupes a repo read both from a clone and from GitHub.
// A glob also matches folders that are not repositories: those give no lines. `gh` errors stop the run instead,
// so a network blip never writes a snapshot with a repo silently missing.
const git = (dir, argv) => {
  try {
    return run('git', ['-C', dir, ...argv]);
  } catch {
    return '';
  }
};
const repoKey = (url) => url.trim().match(/[:/]([^/:]+\/[^/]+?)(?:\.git)?$/)?.[1].toLowerCase();
const sources = dirs.map((dir) => [
  repoKey(git(dir, ['remote', 'get-url', 'origin'])) ?? dir,
  () => git(dir, ['log', '--all', '--no-merges', '--format=%H%x09%an %ae%x09%as']),
]);
for (const user of accounts) {
  const env = { ...process.env, GH_TOKEN: run('gh', ['auth', 'token', '--user', user]).trim() };
  const list = run('gh', ['api', '--paginate', '/user/repos?per_page=100&affiliation=owner,collaborator,organization_member',
    '--jq', '.[] | select(.size > 0) | .full_name'], env);
  for (const repo of list.split('\n').filter(Boolean)) {
    sources.push([repo.toLowerCase(), () => run('gh', ['api', '--paginate', `repos/${repo}/commits?per_page=100`, '--jq',
      '.[] | select(.parents | length < 2) | [.sha, .commit.author.name + " " + .commit.author.email, .commit.author.date] | @tsv'], env)]);
  }
}

const seen = new Set();
const repos = new Set();
let first = '';
const dates = [];
for (const [repo, read] of sources) {
  for (const line of read().split('\n')) {
    const [hash, who, date] = line.split('\t');
    if (!hash || !author.test(who) || seen.has(hash)) continue;
    // git gives the author's day (%as); GitHub gives UTC, so convert it to this machine's day like the local clones.
    const day = date.length > 10 ? new Date(date).toLocaleDateString('sv') : date;
    seen.add(hash);
    dates.push(day);
    repos.add(repo);
    if (!first || day < first) first = day;
  }
}

// 53 weeks of days, Monday first, ending with the current week (like GitHub's graph).
const now = new Date();
const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())); // local date, as UTC midnight
const start = new Date(today);
start.setUTCDate(start.getUTCDate() - ((start.getUTCDay() + 6) % 7) - 52 * 7);
const days = Array(53 * 7).fill(0);
for (const d of dates) {
  const i = Math.round((Date.parse(d) - start.getTime()) / 864e5);
  if (i >= 0 && i < days.length) days[i]++;
}

const out = {
  updated: today.toISOString().slice(0, 10),
  commits: seen.size,
  repos: repos.size,
  since: first.slice(0, 4),
  start: start.toISOString().slice(0, 10),
  days,
};
writeFileSync(new URL('../src/data/activity.json', import.meta.url), JSON.stringify(out) + '\n');
console.log(`${out.commits} commits in ${out.repos} repos since ${out.since}; last year: ${days.reduce((a, b) => a + b)}`);
