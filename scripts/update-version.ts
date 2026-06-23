import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type PackageJson = {
  name?: string;
  version?: string;
  [key: string]: unknown;
};

const versionPattern = /^(\d+)\.(\d+)\.(\d+)$/;

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJsonPath = resolve(rootDir, "package.json");
const readmePath = resolve(rootDir, "README.md");

async function main() {
  const argument = process.argv[2];

  if (argument === "-h" || argument === "--help") {
    printUsage();
    process.exit(0);
  }

  if (argument) {
    throw new Error(
      "This script increments package.json patch version automatically. Do not pass a version.",
    );
  }

  const packageJson = JSON.parse(
    await readFile(packageJsonPath, "utf8"),
  ) as PackageJson;

  if (!packageJson.name) {
    throw new Error("package.json is missing the package name.");
  }

  const previousVersion = packageJson.version;
  const nextVersion = getNextPatchVersion(previousVersion);
  const readme = await readFile(readmePath, "utf8");
  const badgeVersion = encodeURIComponent(nextVersion);
  const packageName = escapeRegExp(packageJson.name);

  const updatedReadme = replaceOrThrow(
    replaceOrThrow(
      readme,
      /!\[Version\]\(https:\/\/img\.shields\.io\/badge\/version-[^)]+-blue\)/g,
      `![Version](https://img.shields.io/badge/version-${badgeVersion}-blue)`,
      "README version badge",
    ),
    new RegExp(
      `${packageName}-\\d+\\.\\d+\\.\\d+(?:-[0-9A-Za-z.-]+)?(?:\\+[0-9A-Za-z.-]+)?\\.vsix`,
      "g",
    ),
    `${packageJson.name}-${nextVersion}.vsix`,
    "README VSIX install filename",
  );

  packageJson.version = nextVersion;

  await writeFile(
    packageJsonPath,
    `${JSON.stringify(packageJson, null, 2)}\n`,
    "utf8",
  );
  await writeFile(readmePath, updatedReadme, "utf8");

  console.log(
    `Updated version${previousVersion ? ` from ${previousVersion}` : ""} to ${nextVersion}.`,
  );
  console.log("Updated package.json and README.md.");
}

function getNextPatchVersion(version: string | undefined) {
  if (!version) {
    throw new Error("package.json is missing the version.");
  }

  const match = versionPattern.exec(version);

  if (!match) {
    throw new Error(
      `Invalid package.json version "${version}". Expected a plain semver version like 1.0.7.`,
    );
  }

  const [, major, minor, patch] = match;

  return `${major}.${minor}.${Number(patch) + 1}`;
}

function replaceOrThrow(
  source: string,
  pattern: RegExp,
  replacement: string,
  label: string,
) {
  let count = 0;
  const output = source.replace(pattern, () => {
    count += 1;
    return replacement;
  });

  if (count === 0) {
    throw new Error(`Could not find ${label}.`);
  }

  return output;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function printUsage() {
  console.log("Usage: bun scripts/update-version.ts");
  console.log("Increments package.json patch version and syncs README.md.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
