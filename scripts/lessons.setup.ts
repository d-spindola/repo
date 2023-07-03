console.log(
  "This script will create all the lessons in the apps directory. Are you sure you want to continue."
);

const APPS_DIR = "/apps";
const DIR_ENTRY_FILE = "sandbox.ts";

const VANILLA_JS_LESSONS = [
  "variables",
  "strings",
  "numbers",
  "bites",
  "boolean",
  "arrays",
  "objects",
  "functions",
  "classes",
  "interfaces",
  "generics",
  "enums",
];

const TYPESCRIPT_LESSONS = [
  "type-aliases",
  "type-inference",
  "type-assertions",
  "type-guards",
  "union-types",
  "intersection-types",
  "never-type",
  "literal-types",
  "null-undefined",
  "any-unknown",
  "tuple-types",
  "keyof-operator",
];

const [[key, value], ...rest] = process.argv.slice(2).map((arg) => {
  const [key, value] = arg.split("=");
  return [key, value];
});

if (key && value && value.includes("js")) {
  Bun.spawnSync(["mkdir", process.cwd() + "/apps"]);
  Bun.spawnSync(["mkdir", process.cwd() + "/backups"]);

  [
    ...VANILLA_JS_LESSONS,
    ...(rest && rest[0] && rest[0][1] === "true" ? TYPESCRIPT_LESSONS : []),
  ].forEach(async (lesson) => {
    Bun.spawnSync(["mkdir", process.cwd() + `/apps/${lesson}`]);
    await Bun.write(
      process.cwd() + `/apps/${lesson}/${DIR_ENTRY_FILE}`,
      "console.log('oi')"
    );
  });
}

console.log(
  "All lessons created. Please run `yarn install` to install dependencies."
);
