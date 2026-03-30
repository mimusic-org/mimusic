import { bundledThemes } from './themes.mjs';
export { bundledThemesInfo } from './themes.mjs';
export { g as getWasmInlined } from './wasm-dynamic-K7LwWlz7.js';
import { createdBundledHighlighter, createSingletonShorthands, warnDeprecated } from '@shikijs/core';
export * from '@shikijs/core';
import { createOnigurumaEngine } from '@shikijs/engine-oniguruma';

const bundledLanguagesInfo = [
  {
    "id": "angular-html",
    "name": "Angular HTML",
    "import": () => import('./langs/angular-html.mjs')
  },
  {
    "id": "angular-ts",
    "name": "Angular TypeScript",
    "import": () => import('./langs/angular-ts.mjs')
  },
  {
    "id": "astro",
    "name": "Astro",
    "import": () => import('./langs/astro.mjs')
  },
  {
    "id": "blade",
    "name": "Blade",
    "import": () => import('./langs/blade.mjs')
  },
  {
    "id": "c",
    "name": "C",
    "import": () => import('./langs/c.mjs')
  },
  {
    "id": "coffee",
    "name": "CoffeeScript",
    "aliases": [
      "coffeescript"
    ],
    "import": () => import('./langs/coffee.mjs')
  },
  {
    "id": "cpp",
    "name": "C++",
    "aliases": [
      "c++"
    ],
    "import": () => import('./langs/cpp.mjs')
  },
  {
    "id": "css",
    "name": "CSS",
    "import": () => import('./langs/css.mjs')
  },
  {
    "id": "glsl",
    "name": "GLSL",
    "import": () => import('./langs/glsl.mjs')
  },
  {
    "id": "graphql",
    "name": "GraphQL",
    "aliases": [
      "gql"
    ],
    "import": () => import('./langs/graphql.mjs')
  },
  {
    "id": "haml",
    "name": "Ruby Haml",
    "import": () => import('./langs/haml.mjs')
  },
  {
    "id": "handlebars",
    "name": "Handlebars",
    "aliases": [
      "hbs"
    ],
    "import": () => import('./langs/handlebars.mjs')
  },
  {
    "id": "html",
    "name": "HTML",
    "import": () => import('./langs/html.mjs')
  },
  {
    "id": "html-derivative",
    "name": "HTML (Derivative)",
    "import": () => import('./langs/html-derivative.mjs')
  },
  {
    "id": "http",
    "name": "HTTP",
    "import": () => import('./langs/http.mjs')
  },
  {
    "id": "imba",
    "name": "Imba",
    "import": () => import('./langs/imba.mjs')
  },
  {
    "id": "java",
    "name": "Java",
    "import": () => import('./langs/java.mjs')
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "aliases": [
      "js"
    ],
    "import": () => import('./langs/javascript.mjs')
  },
  {
    "id": "jinja",
    "name": "Jinja",
    "import": () => import('./langs/jinja.mjs')
  },
  {
    "id": "jison",
    "name": "Jison",
    "import": () => import('./langs/jison.mjs')
  },
  {
    "id": "json",
    "name": "JSON",
    "import": () => import('./langs/json.mjs')
  },
  {
    "id": "json5",
    "name": "JSON5",
    "import": () => import('./langs/json5.mjs')
  },
  {
    "id": "jsonc",
    "name": "JSON with Comments",
    "import": () => import('./langs/jsonc.mjs')
  },
  {
    "id": "jsonl",
    "name": "JSON Lines",
    "import": () => import('./langs/jsonl.mjs')
  },
  {
    "id": "jsx",
    "name": "JSX",
    "import": () => import('./langs/jsx.mjs')
  },
  {
    "id": "julia",
    "name": "Julia",
    "aliases": [
      "jl"
    ],
    "import": () => import('./langs/julia.mjs')
  },
  {
    "id": "less",
    "name": "Less",
    "import": () => import('./langs/less.mjs')
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "aliases": [
      "md"
    ],
    "import": () => import('./langs/markdown.mjs')
  },
  {
    "id": "marko",
    "name": "Marko",
    "import": () => import('./langs/marko.mjs')
  },
  {
    "id": "mdc",
    "name": "MDC",
    "import": () => import('./langs/mdc.mjs')
  },
  {
    "id": "mdx",
    "name": "MDX",
    "import": () => import('./langs/mdx.mjs')
  },
  {
    "id": "php",
    "name": "PHP",
    "import": () => import('./langs/php.mjs')
  },
  {
    "id": "postcss",
    "name": "PostCSS",
    "import": () => import('./langs/postcss.mjs')
  },
  {
    "id": "pug",
    "name": "Pug",
    "aliases": [
      "jade"
    ],
    "import": () => import('./langs/pug.mjs')
  },
  {
    "id": "python",
    "name": "Python",
    "aliases": [
      "py"
    ],
    "import": () => import('./langs/python.mjs')
  },
  {
    "id": "r",
    "name": "R",
    "import": () => import('./langs/r.mjs')
  },
  {
    "id": "regexp",
    "name": "RegExp",
    "aliases": [
      "regex"
    ],
    "import": () => import('./langs/regexp.mjs')
  },
  {
    "id": "sass",
    "name": "Sass",
    "import": () => import('./langs/sass.mjs')
  },
  {
    "id": "scss",
    "name": "SCSS",
    "import": () => import('./langs/scss.mjs')
  },
  {
    "id": "shellscript",
    "name": "Shell",
    "aliases": [
      "bash",
      "sh",
      "shell",
      "zsh"
    ],
    "import": () => import('./langs/shellscript.mjs')
  },
  {
    "id": "sql",
    "name": "SQL",
    "import": () => import('./langs/sql.mjs')
  },
  {
    "id": "stylus",
    "name": "Stylus",
    "aliases": [
      "styl"
    ],
    "import": () => import('./langs/stylus.mjs')
  },
  {
    "id": "svelte",
    "name": "Svelte",
    "import": () => import('./langs/svelte.mjs')
  },
  {
    "id": "ts-tags",
    "name": "TypeScript with Tags",
    "aliases": [
      "lit"
    ],
    "import": () => import('./langs/ts-tags.mjs')
  },
  {
    "id": "tsx",
    "name": "TSX",
    "import": () => import('./langs/tsx.mjs')
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "aliases": [
      "ts"
    ],
    "import": () => import('./langs/typescript.mjs')
  },
  {
    "id": "vue",
    "name": "Vue",
    "import": () => import('./langs/vue.mjs')
  },
  {
    "id": "vue-html",
    "name": "Vue HTML",
    "import": () => import('./langs/vue-html.mjs')
  },
  {
    "id": "wasm",
    "name": "WebAssembly",
    "import": () => import('./langs/wasm.mjs')
  },
  {
    "id": "wgsl",
    "name": "WGSL",
    "import": () => import('./langs/wgsl.mjs')
  },
  {
    "id": "xml",
    "name": "XML",
    "import": () => import('./langs/xml.mjs')
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": [
      "yml"
    ],
    "import": () => import('./langs/yaml.mjs')
  }
];
const bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i) => [i.id, i.import]));
const bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i) => i.aliases?.map((a) => [a, i.import]) || []));
const bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias
};

const createHighlighter = /* @__PURE__ */ createdBundledHighlighter({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => createOnigurumaEngine(import('shiki/wasm'))
});
const {
  codeToHtml,
  codeToHast,
  codeToTokensBase,
  codeToTokens,
  codeToTokensWithThemes,
  getSingletonHighlighter,
  getLastGrammarState
} = /* @__PURE__ */ createSingletonShorthands(
  createHighlighter
);
const getHighlighter = (options) => {
  warnDeprecated("`getHighlighter` is deprecated. Use `createHighlighter` or `getSingletonHighlighter` instead.");
  return createHighlighter(options);
};

export { bundledLanguages, bundledLanguagesAlias, bundledLanguagesBase, bundledLanguagesInfo, bundledThemes, codeToHast, codeToHtml, codeToTokens, codeToTokensBase, codeToTokensWithThemes, createHighlighter, getHighlighter, getLastGrammarState, getSingletonHighlighter };
