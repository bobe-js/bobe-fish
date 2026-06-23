import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  basePalette,
  blackHighContrastOverrides,
  blackOverrides,
  lagoonOverrides,
  matchaOverrides,
  sakuraOverrides,
  type ThemePalette,
} from "./theme-palettes.ts";

type JsonObject = Record<string, unknown>;

type ThemeVariant = {
  label: string;
  outputFile: string;
  palette: ThemePalette;
  semanticClass: string;
};

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = resolve(rootDir, "scripts/bobe-fish-theme.template.json");

const variants: ThemeVariant[] = [
  {
    label: "Bobe Fish",
    outputFile: "bobe-fish-color-theme.json",
    palette: basePalette,
    semanticClass: "bobe-fish",
  },
  {
    label: "Bobe Fish Lagoon",
    outputFile: "bobe-fish-lagoon-color-theme.json",
    palette: createPalette(lagoonOverrides),
    semanticClass: "bobe-fish-lagoon",
  },
  {
    label: "Bobe Fish Sakura",
    outputFile: "bobe-fish-sakura-color-theme.json",
    palette: createPalette(sakuraOverrides),
    semanticClass: "bobe-fish-sakura",
  },
  {
    label: "Bobe Fish Matcha",
    outputFile: "bobe-fish-matcha-color-theme.json",
    palette: createPalette(matchaOverrides),
    semanticClass: "bobe-fish-matcha",
  },
  {
    label: "Bobe Fish Black",
    outputFile: "bobe-fish-black-color-theme.json",
    palette: createPalette(blackOverrides),
    semanticClass: "bobe-fish-black",
  },
  {
    label: "Bobe Fish Black High Contrast",
    outputFile: "bobe-fish-black-high-contrast-color-theme.json",
    palette: createPalette(blackHighContrastOverrides),
    semanticClass: "bobe-fish-black-high-contrast",
  },
];

async function main() {
  const template = parseJsonc(
    await readFile(templatePath, "utf8"),
  ) as JsonObject;

  for (const variant of variants) {
    const theme = applyPalette(template, variant.palette) as JsonObject;

    theme.name = variant.label;
    theme.semanticClass = variant.semanticClass;

    const outputPath = resolve(rootDir, "themes", variant.outputFile);

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(theme, null, 4)}\n`, "utf8");

    console.log(`Generated ${outputPath}`);
  }
}

function createPalette(overrides: Partial<ThemePalette>): ThemePalette {
  return {
    ...basePalette,
    ...overrides,
  };
}

function applyPalette(
  value: unknown,
  palette: ThemePalette,
  path: Array<string | number> = [],
): unknown {
  if (typeof value === "string") {
    const color = palette[value];

    if (color) {
      return color;
    }

    if (isColorSlot(path)) {
      throw new Error(
        `Missing palette color "${value}" at ${formatPath(path)}`,
      );
    }

    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item, index) =>
      applyPalette(item, palette, [...path, index]),
    );
  }

  if (isJsonObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        applyPalette(item, palette, [...path, key]),
      ]),
    );
  }

  return value;
}

function isColorSlot(path: Array<string | number>) {
  if (path[0] === "colors" && path.length === 2) {
    return true;
  }

  if (path[0] === "semanticTokenColors") {
    return isColorSetting(path.at(-1));
  }

  if (path[0] === "tokenColors" && path[2] === "settings") {
    return isColorSetting(path.at(-1));
  }

  return false;
}

function isColorSetting(value: string | number | undefined) {
  return value === "foreground" || value === "background" || value === "border";
}

function formatPath(path: Array<string | number>) {
  return path.reduce((result, segment) => {
    if (typeof segment === "number") {
      return `${result}[${segment}]`;
    }

    return result ? `${result}.${segment}` : segment;
  }, "");
}

function parseJsonc(source: string) {
  return JSON.parse(removeTrailingCommas(stripJsonComments(source)));
}

function stripJsonComments(source: string) {
  let output = "";
  let inString = false;
  let escaped = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (inString) {
      output += char;

      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }

      continue;
    }

    if (char === '"') {
      inString = true;
      output += char;
      continue;
    }

    if (char === "/" && next === "/") {
      while (index < source.length && source[index] !== "\n") {
        index += 1;
      }
      output += "\n";
      continue;
    }

    if (char === "/" && next === "*") {
      index += 2;

      while (
        index < source.length &&
        !(source[index] === "*" && source[index + 1] === "/")
      ) {
        if (source[index] === "\n") {
          output += "\n";
        }
        index += 1;
      }

      index += 1;
      continue;
    }

    output += char;
  }

  return output;
}

function removeTrailingCommas(source: string) {
  let output = "";
  let inString = false;
  let escaped = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      output += char;

      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }

      continue;
    }

    if (char === '"') {
      inString = true;
      output += char;
      continue;
    }

    if (char === ",") {
      let lookahead = index + 1;

      while (/\s/.test(source[lookahead])) {
        lookahead += 1;
      }

      if (source[lookahead] === "}" || source[lookahead] === "]") {
        continue;
      }
    }

    output += char;
  }

  return output;
}

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
