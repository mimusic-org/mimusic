const bundledLanguagesInfo = [
  {
    "id": "abap",
    "name": "ABAP",
    "import": () => import('./langs/abap.mjs')
  },
  {
    "id": "actionscript-3",
    "name": "ActionScript",
    "import": () => import('./langs/actionscript-3.mjs')
  },
  {
    "id": "ada",
    "name": "Ada",
    "import": () => import('./langs/ada.mjs')
  },
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
    "id": "apache",
    "name": "Apache Conf",
    "import": () => import('./langs/apache.mjs')
  },
  {
    "id": "apex",
    "name": "Apex",
    "import": () => import('./langs/apex.mjs')
  },
  {
    "id": "apl",
    "name": "APL",
    "import": () => import('./langs/apl.mjs')
  },
  {
    "id": "applescript",
    "name": "AppleScript",
    "import": () => import('./langs/applescript.mjs')
  },
  {
    "id": "ara",
    "name": "Ara",
    "import": () => import('./langs/ara.mjs')
  },
  {
    "id": "asciidoc",
    "name": "AsciiDoc",
    "aliases": [
      "adoc"
    ],
    "import": () => import('./langs/asciidoc.mjs')
  },
  {
    "id": "asm",
    "name": "Assembly",
    "import": () => import('./langs/asm.mjs')
  },
  {
    "id": "astro",
    "name": "Astro",
    "import": () => import('./langs/astro.mjs')
  },
  {
    "id": "awk",
    "name": "AWK",
    "import": () => import('./langs/awk.mjs')
  },
  {
    "id": "ballerina",
    "name": "Ballerina",
    "import": () => import('./langs/ballerina.mjs')
  },
  {
    "id": "bat",
    "name": "Batch File",
    "aliases": [
      "batch"
    ],
    "import": () => import('./langs/bat.mjs')
  },
  {
    "id": "beancount",
    "name": "Beancount",
    "import": () => import('./langs/beancount.mjs')
  },
  {
    "id": "berry",
    "name": "Berry",
    "aliases": [
      "be"
    ],
    "import": () => import('./langs/berry.mjs')
  },
  {
    "id": "bibtex",
    "name": "BibTeX",
    "import": () => import('./langs/bibtex.mjs')
  },
  {
    "id": "bicep",
    "name": "Bicep",
    "import": () => import('./langs/bicep.mjs')
  },
  {
    "id": "blade",
    "name": "Blade",
    "import": () => import('./langs/blade.mjs')
  },
  {
    "id": "bsl",
    "name": "1C (Enterprise)",
    "aliases": [
      "1c"
    ],
    "import": () => import('./langs/bsl.mjs')
  },
  {
    "id": "c",
    "name": "C",
    "import": () => import('./langs/c.mjs')
  },
  {
    "id": "cadence",
    "name": "Cadence",
    "aliases": [
      "cdc"
    ],
    "import": () => import('./langs/cadence.mjs')
  },
  {
    "id": "cairo",
    "name": "Cairo",
    "import": () => import('./langs/cairo.mjs')
  },
  {
    "id": "clarity",
    "name": "Clarity",
    "import": () => import('./langs/clarity.mjs')
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "aliases": [
      "clj"
    ],
    "import": () => import('./langs/clojure.mjs')
  },
  {
    "id": "cmake",
    "name": "CMake",
    "import": () => import('./langs/cmake.mjs')
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "import": () => import('./langs/cobol.mjs')
  },
  {
    "id": "codeowners",
    "name": "CODEOWNERS",
    "import": () => import('./langs/codeowners.mjs')
  },
  {
    "id": "codeql",
    "name": "CodeQL",
    "aliases": [
      "ql"
    ],
    "import": () => import('./langs/codeql.mjs')
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
    "id": "common-lisp",
    "name": "Common Lisp",
    "aliases": [
      "lisp"
    ],
    "import": () => import('./langs/common-lisp.mjs')
  },
  {
    "id": "coq",
    "name": "Coq",
    "import": () => import('./langs/coq.mjs')
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
    "id": "crystal",
    "name": "Crystal",
    "import": () => import('./langs/crystal.mjs')
  },
  {
    "id": "csharp",
    "name": "C#",
    "aliases": [
      "c#",
      "cs"
    ],
    "import": () => import('./langs/csharp.mjs')
  },
  {
    "id": "css",
    "name": "CSS",
    "import": () => import('./langs/css.mjs')
  },
  {
    "id": "csv",
    "name": "CSV",
    "import": () => import('./langs/csv.mjs')
  },
  {
    "id": "cue",
    "name": "CUE",
    "import": () => import('./langs/cue.mjs')
  },
  {
    "id": "cypher",
    "name": "Cypher",
    "aliases": [
      "cql"
    ],
    "import": () => import('./langs/cypher.mjs')
  },
  {
    "id": "d",
    "name": "D",
    "import": () => import('./langs/d.mjs')
  },
  {
    "id": "dart",
    "name": "Dart",
    "import": () => import('./langs/dart.mjs')
  },
  {
    "id": "dax",
    "name": "DAX",
    "import": () => import('./langs/dax.mjs')
  },
  {
    "id": "desktop",
    "name": "Desktop",
    "import": () => import('./langs/desktop.mjs')
  },
  {
    "id": "diff",
    "name": "Diff",
    "import": () => import('./langs/diff.mjs')
  },
  {
    "id": "docker",
    "name": "Dockerfile",
    "aliases": [
      "dockerfile"
    ],
    "import": () => import('./langs/docker.mjs')
  },
  {
    "id": "dotenv",
    "name": "dotEnv",
    "import": () => import('./langs/dotenv.mjs')
  },
  {
    "id": "dream-maker",
    "name": "Dream Maker",
    "import": () => import('./langs/dream-maker.mjs')
  },
  {
    "id": "edge",
    "name": "Edge",
    "import": () => import('./langs/edge.mjs')
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "import": () => import('./langs/elixir.mjs')
  },
  {
    "id": "elm",
    "name": "Elm",
    "import": () => import('./langs/elm.mjs')
  },
  {
    "id": "emacs-lisp",
    "name": "Emacs Lisp",
    "aliases": [
      "elisp"
    ],
    "import": () => import('./langs/emacs-lisp.mjs')
  },
  {
    "id": "erb",
    "name": "ERB",
    "import": () => import('./langs/erb.mjs')
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "aliases": [
      "erl"
    ],
    "import": () => import('./langs/erlang.mjs')
  },
  {
    "id": "fennel",
    "name": "Fennel",
    "import": () => import('./langs/fennel.mjs')
  },
  {
    "id": "fish",
    "name": "Fish",
    "import": () => import('./langs/fish.mjs')
  },
  {
    "id": "fluent",
    "name": "Fluent",
    "aliases": [
      "ftl"
    ],
    "import": () => import('./langs/fluent.mjs')
  },
  {
    "id": "fortran-fixed-form",
    "name": "Fortran (Fixed Form)",
    "aliases": [
      "f",
      "for",
      "f77"
    ],
    "import": () => import('./langs/fortran-fixed-form.mjs')
  },
  {
    "id": "fortran-free-form",
    "name": "Fortran (Free Form)",
    "aliases": [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ],
    "import": () => import('./langs/fortran-free-form.mjs')
  },
  {
    "id": "fsharp",
    "name": "F#",
    "aliases": [
      "f#",
      "fs"
    ],
    "import": () => import('./langs/fsharp.mjs')
  },
  {
    "id": "gdresource",
    "name": "GDResource",
    "import": () => import('./langs/gdresource.mjs')
  },
  {
    "id": "gdscript",
    "name": "GDScript",
    "import": () => import('./langs/gdscript.mjs')
  },
  {
    "id": "gdshader",
    "name": "GDShader",
    "import": () => import('./langs/gdshader.mjs')
  },
  {
    "id": "genie",
    "name": "Genie",
    "import": () => import('./langs/genie.mjs')
  },
  {
    "id": "gherkin",
    "name": "Gherkin",
    "import": () => import('./langs/gherkin.mjs')
  },
  {
    "id": "git-commit",
    "name": "Git Commit Message",
    "import": () => import('./langs/git-commit.mjs')
  },
  {
    "id": "git-rebase",
    "name": "Git Rebase Message",
    "import": () => import('./langs/git-rebase.mjs')
  },
  {
    "id": "gleam",
    "name": "Gleam",
    "import": () => import('./langs/gleam.mjs')
  },
  {
    "id": "glimmer-js",
    "name": "Glimmer JS",
    "aliases": [
      "gjs"
    ],
    "import": () => import('./langs/glimmer-js.mjs')
  },
  {
    "id": "glimmer-ts",
    "name": "Glimmer TS",
    "aliases": [
      "gts"
    ],
    "import": () => import('./langs/glimmer-ts.mjs')
  },
  {
    "id": "glsl",
    "name": "GLSL",
    "import": () => import('./langs/glsl.mjs')
  },
  {
    "id": "gnuplot",
    "name": "Gnuplot",
    "import": () => import('./langs/gnuplot.mjs')
  },
  {
    "id": "go",
    "name": "Go",
    "import": () => import('./langs/go.mjs')
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
    "id": "groovy",
    "name": "Groovy",
    "import": () => import('./langs/groovy.mjs')
  },
  {
    "id": "hack",
    "name": "Hack",
    "import": () => import('./langs/hack.mjs')
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
    "id": "haskell",
    "name": "Haskell",
    "aliases": [
      "hs"
    ],
    "import": () => import('./langs/haskell.mjs')
  },
  {
    "id": "haxe",
    "name": "Haxe",
    "import": () => import('./langs/haxe.mjs')
  },
  {
    "id": "hcl",
    "name": "HashiCorp HCL",
    "import": () => import('./langs/hcl.mjs')
  },
  {
    "id": "hjson",
    "name": "Hjson",
    "import": () => import('./langs/hjson.mjs')
  },
  {
    "id": "hlsl",
    "name": "HLSL",
    "import": () => import('./langs/hlsl.mjs')
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
    "id": "hxml",
    "name": "HXML",
    "import": () => import('./langs/hxml.mjs')
  },
  {
    "id": "hy",
    "name": "Hy",
    "import": () => import('./langs/hy.mjs')
  },
  {
    "id": "imba",
    "name": "Imba",
    "import": () => import('./langs/imba.mjs')
  },
  {
    "id": "ini",
    "name": "INI",
    "aliases": [
      "properties"
    ],
    "import": () => import('./langs/ini.mjs')
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
    "id": "jsonnet",
    "name": "Jsonnet",
    "import": () => import('./langs/jsonnet.mjs')
  },
  {
    "id": "jssm",
    "name": "JSSM",
    "aliases": [
      "fsl"
    ],
    "import": () => import('./langs/jssm.mjs')
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
    "id": "kotlin",
    "name": "Kotlin",
    "aliases": [
      "kt",
      "kts"
    ],
    "import": () => import('./langs/kotlin.mjs')
  },
  {
    "id": "kusto",
    "name": "Kusto",
    "aliases": [
      "kql"
    ],
    "import": () => import('./langs/kusto.mjs')
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "import": () => import('./langs/latex.mjs')
  },
  {
    "id": "lean",
    "name": "Lean 4",
    "aliases": [
      "lean4"
    ],
    "import": () => import('./langs/lean.mjs')
  },
  {
    "id": "less",
    "name": "Less",
    "import": () => import('./langs/less.mjs')
  },
  {
    "id": "liquid",
    "name": "Liquid",
    "import": () => import('./langs/liquid.mjs')
  },
  {
    "id": "log",
    "name": "Log file",
    "import": () => import('./langs/log.mjs')
  },
  {
    "id": "logo",
    "name": "Logo",
    "import": () => import('./langs/logo.mjs')
  },
  {
    "id": "lua",
    "name": "Lua",
    "import": () => import('./langs/lua.mjs')
  },
  {
    "id": "luau",
    "name": "Luau",
    "import": () => import('./langs/luau.mjs')
  },
  {
    "id": "make",
    "name": "Makefile",
    "aliases": [
      "makefile"
    ],
    "import": () => import('./langs/make.mjs')
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
    "id": "matlab",
    "name": "MATLAB",
    "import": () => import('./langs/matlab.mjs')
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
    "id": "mermaid",
    "name": "Mermaid",
    "aliases": [
      "mmd"
    ],
    "import": () => import('./langs/mermaid.mjs')
  },
  {
    "id": "mipsasm",
    "name": "MIPS Assembly",
    "aliases": [
      "mips"
    ],
    "import": () => import('./langs/mipsasm.mjs')
  },
  {
    "id": "mojo",
    "name": "Mojo",
    "import": () => import('./langs/mojo.mjs')
  },
  {
    "id": "move",
    "name": "Move",
    "import": () => import('./langs/move.mjs')
  },
  {
    "id": "narrat",
    "name": "Narrat Language",
    "aliases": [
      "nar"
    ],
    "import": () => import('./langs/narrat.mjs')
  },
  {
    "id": "nextflow",
    "name": "Nextflow",
    "aliases": [
      "nf"
    ],
    "import": () => import('./langs/nextflow.mjs')
  },
  {
    "id": "nginx",
    "name": "Nginx",
    "import": () => import('./langs/nginx.mjs')
  },
  {
    "id": "nim",
    "name": "Nim",
    "import": () => import('./langs/nim.mjs')
  },
  {
    "id": "nix",
    "name": "Nix",
    "import": () => import('./langs/nix.mjs')
  },
  {
    "id": "nushell",
    "name": "nushell",
    "aliases": [
      "nu"
    ],
    "import": () => import('./langs/nushell.mjs')
  },
  {
    "id": "objective-c",
    "name": "Objective-C",
    "aliases": [
      "objc"
    ],
    "import": () => import('./langs/objective-c.mjs')
  },
  {
    "id": "objective-cpp",
    "name": "Objective-C++",
    "import": () => import('./langs/objective-cpp.mjs')
  },
  {
    "id": "ocaml",
    "name": "OCaml",
    "import": () => import('./langs/ocaml.mjs')
  },
  {
    "id": "pascal",
    "name": "Pascal",
    "import": () => import('./langs/pascal.mjs')
  },
  {
    "id": "perl",
    "name": "Perl",
    "import": () => import('./langs/perl.mjs')
  },
  {
    "id": "php",
    "name": "PHP",
    "import": () => import('./langs/php.mjs')
  },
  {
    "id": "plsql",
    "name": "PL/SQL",
    "import": () => import('./langs/plsql.mjs')
  },
  {
    "id": "po",
    "name": "Gettext PO",
    "aliases": [
      "pot",
      "potx"
    ],
    "import": () => import('./langs/po.mjs')
  },
  {
    "id": "postcss",
    "name": "PostCSS",
    "import": () => import('./langs/postcss.mjs')
  },
  {
    "id": "powerquery",
    "name": "PowerQuery",
    "import": () => import('./langs/powerquery.mjs')
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "aliases": [
      "ps",
      "ps1"
    ],
    "import": () => import('./langs/powershell.mjs')
  },
  {
    "id": "prisma",
    "name": "Prisma",
    "import": () => import('./langs/prisma.mjs')
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "import": () => import('./langs/prolog.mjs')
  },
  {
    "id": "proto",
    "name": "Protocol Buffer 3",
    "aliases": [
      "protobuf"
    ],
    "import": () => import('./langs/proto.mjs')
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
    "id": "puppet",
    "name": "Puppet",
    "import": () => import('./langs/puppet.mjs')
  },
  {
    "id": "purescript",
    "name": "PureScript",
    "import": () => import('./langs/purescript.mjs')
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
    "id": "qml",
    "name": "QML",
    "import": () => import('./langs/qml.mjs')
  },
  {
    "id": "qmldir",
    "name": "QML Directory",
    "import": () => import('./langs/qmldir.mjs')
  },
  {
    "id": "qss",
    "name": "Qt Style Sheets",
    "import": () => import('./langs/qss.mjs')
  },
  {
    "id": "r",
    "name": "R",
    "import": () => import('./langs/r.mjs')
  },
  {
    "id": "racket",
    "name": "Racket",
    "import": () => import('./langs/racket.mjs')
  },
  {
    "id": "raku",
    "name": "Raku",
    "aliases": [
      "perl6"
    ],
    "import": () => import('./langs/raku.mjs')
  },
  {
    "id": "razor",
    "name": "ASP.NET Razor",
    "import": () => import('./langs/razor.mjs')
  },
  {
    "id": "reg",
    "name": "Windows Registry Script",
    "import": () => import('./langs/reg.mjs')
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
    "id": "rel",
    "name": "Rel",
    "import": () => import('./langs/rel.mjs')
  },
  {
    "id": "riscv",
    "name": "RISC-V",
    "import": () => import('./langs/riscv.mjs')
  },
  {
    "id": "rst",
    "name": "reStructuredText",
    "import": () => import('./langs/rst.mjs')
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "aliases": [
      "rb"
    ],
    "import": () => import('./langs/ruby.mjs')
  },
  {
    "id": "rust",
    "name": "Rust",
    "aliases": [
      "rs"
    ],
    "import": () => import('./langs/rust.mjs')
  },
  {
    "id": "sas",
    "name": "SAS",
    "import": () => import('./langs/sas.mjs')
  },
  {
    "id": "sass",
    "name": "Sass",
    "import": () => import('./langs/sass.mjs')
  },
  {
    "id": "scala",
    "name": "Scala",
    "import": () => import('./langs/scala.mjs')
  },
  {
    "id": "scheme",
    "name": "Scheme",
    "import": () => import('./langs/scheme.mjs')
  },
  {
    "id": "scss",
    "name": "SCSS",
    "import": () => import('./langs/scss.mjs')
  },
  {
    "id": "sdbl",
    "name": "1C (Query)",
    "aliases": [
      "1c-query"
    ],
    "import": () => import('./langs/sdbl.mjs')
  },
  {
    "id": "shaderlab",
    "name": "ShaderLab",
    "aliases": [
      "shader"
    ],
    "import": () => import('./langs/shaderlab.mjs')
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
    "id": "shellsession",
    "name": "Shell Session",
    "aliases": [
      "console"
    ],
    "import": () => import('./langs/shellsession.mjs')
  },
  {
    "id": "smalltalk",
    "name": "Smalltalk",
    "import": () => import('./langs/smalltalk.mjs')
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "import": () => import('./langs/solidity.mjs')
  },
  {
    "id": "soy",
    "name": "Closure Templates",
    "aliases": [
      "closure-templates"
    ],
    "import": () => import('./langs/soy.mjs')
  },
  {
    "id": "sparql",
    "name": "SPARQL",
    "import": () => import('./langs/sparql.mjs')
  },
  {
    "id": "splunk",
    "name": "Splunk Query Language",
    "aliases": [
      "spl"
    ],
    "import": () => import('./langs/splunk.mjs')
  },
  {
    "id": "sql",
    "name": "SQL",
    "import": () => import('./langs/sql.mjs')
  },
  {
    "id": "ssh-config",
    "name": "SSH Config",
    "import": () => import('./langs/ssh-config.mjs')
  },
  {
    "id": "stata",
    "name": "Stata",
    "import": () => import('./langs/stata.mjs')
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
    "id": "swift",
    "name": "Swift",
    "import": () => import('./langs/swift.mjs')
  },
  {
    "id": "system-verilog",
    "name": "SystemVerilog",
    "import": () => import('./langs/system-verilog.mjs')
  },
  {
    "id": "systemd",
    "name": "Systemd Units",
    "import": () => import('./langs/systemd.mjs')
  },
  {
    "id": "talonscript",
    "name": "TalonScript",
    "aliases": [
      "talon"
    ],
    "import": () => import('./langs/talonscript.mjs')
  },
  {
    "id": "tasl",
    "name": "Tasl",
    "import": () => import('./langs/tasl.mjs')
  },
  {
    "id": "tcl",
    "name": "Tcl",
    "import": () => import('./langs/tcl.mjs')
  },
  {
    "id": "templ",
    "name": "Templ",
    "import": () => import('./langs/templ.mjs')
  },
  {
    "id": "terraform",
    "name": "Terraform",
    "aliases": [
      "tf",
      "tfvars"
    ],
    "import": () => import('./langs/terraform.mjs')
  },
  {
    "id": "tex",
    "name": "TeX",
    "import": () => import('./langs/tex.mjs')
  },
  {
    "id": "toml",
    "name": "TOML",
    "import": () => import('./langs/toml.mjs')
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
    "id": "tsv",
    "name": "TSV",
    "import": () => import('./langs/tsv.mjs')
  },
  {
    "id": "tsx",
    "name": "TSX",
    "import": () => import('./langs/tsx.mjs')
  },
  {
    "id": "turtle",
    "name": "Turtle",
    "import": () => import('./langs/turtle.mjs')
  },
  {
    "id": "twig",
    "name": "Twig",
    "import": () => import('./langs/twig.mjs')
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
    "id": "typespec",
    "name": "TypeSpec",
    "aliases": [
      "tsp"
    ],
    "import": () => import('./langs/typespec.mjs')
  },
  {
    "id": "typst",
    "name": "Typst",
    "aliases": [
      "typ"
    ],
    "import": () => import('./langs/typst.mjs')
  },
  {
    "id": "v",
    "name": "V",
    "import": () => import('./langs/v.mjs')
  },
  {
    "id": "vala",
    "name": "Vala",
    "import": () => import('./langs/vala.mjs')
  },
  {
    "id": "vb",
    "name": "Visual Basic",
    "aliases": [
      "cmd"
    ],
    "import": () => import('./langs/vb.mjs')
  },
  {
    "id": "verilog",
    "name": "Verilog",
    "import": () => import('./langs/verilog.mjs')
  },
  {
    "id": "vhdl",
    "name": "VHDL",
    "import": () => import('./langs/vhdl.mjs')
  },
  {
    "id": "viml",
    "name": "Vim Script",
    "aliases": [
      "vim",
      "vimscript"
    ],
    "import": () => import('./langs/viml.mjs')
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
    "id": "vyper",
    "name": "Vyper",
    "aliases": [
      "vy"
    ],
    "import": () => import('./langs/vyper.mjs')
  },
  {
    "id": "wasm",
    "name": "WebAssembly",
    "import": () => import('./langs/wasm.mjs')
  },
  {
    "id": "wenyan",
    "name": "Wenyan",
    "aliases": [
      "\u6587\u8A00"
    ],
    "import": () => import('./langs/wenyan.mjs')
  },
  {
    "id": "wgsl",
    "name": "WGSL",
    "import": () => import('./langs/wgsl.mjs')
  },
  {
    "id": "wikitext",
    "name": "Wikitext",
    "aliases": [
      "mediawiki",
      "wiki"
    ],
    "import": () => import('./langs/wikitext.mjs')
  },
  {
    "id": "wolfram",
    "name": "Wolfram",
    "aliases": [
      "wl"
    ],
    "import": () => import('./langs/wolfram.mjs')
  },
  {
    "id": "xml",
    "name": "XML",
    "import": () => import('./langs/xml.mjs')
  },
  {
    "id": "xsl",
    "name": "XSL",
    "import": () => import('./langs/xsl.mjs')
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": [
      "yml"
    ],
    "import": () => import('./langs/yaml.mjs')
  },
  {
    "id": "zenscript",
    "name": "ZenScript",
    "import": () => import('./langs/zenscript.mjs')
  },
  {
    "id": "zig",
    "name": "Zig",
    "import": () => import('./langs/zig.mjs')
  }
];
const bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i) => [i.id, i.import]));
const bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i) => i.aliases?.map((a) => [a, i.import]) || []));
const bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias
};

export { bundledLanguages, bundledLanguagesAlias, bundledLanguagesBase, bundledLanguagesInfo };
