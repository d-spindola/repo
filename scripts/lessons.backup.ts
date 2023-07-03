import { spawnSync } from "bun";
import { randomUUID } from "crypto";
// backup lessons in process.cwd() + "/apps" to .backup

// TODO: fix this script

console.log(
  "This script will backup all the lessons in the apps directory. Are you sure you want to continue? (y/n)"
);

const id = randomUUID();
const bakcupFolder = "./backups/backup-apps" + id;

const dir = spawnSync(["mkdir", bakcupFolder], {
  env: {
    ...Bun.env,
  },
  stdout: "pipe",
});

const copies = spawnSync(["cp", "-R", "apps/*", bakcupFolder]);

console.log("All lessons backed up.");
