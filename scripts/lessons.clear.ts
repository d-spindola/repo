import { readdirSync } from "fs";

console.log(
  "This script will delete all the lessons in the apps directory. Are you sure you want to continue? (y/n)"
);

Bun.spawnSync(["rm", "-rf", process.cwd() + "/apps"]);

Bun.spawnSync(["rm", "-rf", process.cwd() + "/backups"]);

console.log("All lessons deleted.");
