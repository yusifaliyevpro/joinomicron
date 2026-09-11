import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 120,
  singleQuote: false,
  svelte: true,
  insertFinalNewline: true,
  sortTailwindcss: {
    stylesheet: "./src/styles/global.css",
    functions: ["clsx", "cn"],
  },
  sortImports: {
    newlinesBetween: false,
  },
  ignorePatterns: ["netlify.toml"],
});
