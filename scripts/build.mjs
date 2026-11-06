import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rmSync } from 'node:fs';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const cloudConfigured = Boolean(process.env.PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN);
const tinaCli = resolve(root, 'node_modules/@tinacms/cli/bin/tinacms');
const astroCli = resolve(root, 'node_modules/astro/astro.js');

function run(label, command, args) {
  console.log(`\n> ${label}`);
  const result = spawnSync(process.execPath, [command, ...args], { cwd: root, stdio: 'inherit', env: process.env });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

if (cloudConfigured) {
  run('Build TinaCMS admin for Tina Cloud', tinaCli, ['build']);
} else {
  rmSync(resolve(root, 'public/admin'), { recursive: true, force: true });
  console.log('\nTina Cloud secrets are not set; skipping the cloud admin build for a local preview.');
}
run('Build Astro static site', astroCli, ['build']);
