function transformerCompactLineOptions(lineOptions = []) {
  return {
    name: "@shikijs/transformers:compact-line-options",
    line(node, line) {
      const lineOption = lineOptions.find((o) => o.line === line);
      if (lineOption?.classes)
        this.addClassToHast(node, lineOption.classes);
      return node;
    }
  };
}

function parseMetaHighlightString(meta) {
  if (!meta)
    return null;
  const match = meta.match(/\{([\d,-]+)\}/);
  if (!match)
    return null;
  const lines = match[1].split(",").flatMap((v) => {
    const num = v.split("-").map((v2) => Number.parseInt(v2, 10));
    if (num.length === 1)
      return [num[0]];
    else
      return Array.from({ length: num[1] - num[0] + 1 }, (_, i) => i + num[0]);
  });
  return lines;
}
const symbol = Symbol("highlighted-lines");
function transformerMetaHighlight(options = {}) {
  const {
    className = "highlighted"
  } = options;
  return {
    name: "@shikijs/transformers:meta-highlight",
    line(node, line) {
      var _a;
      if (!this.options.meta?.__raw) {
        return;
      }
      (_a = this.meta)[symbol] || (_a[symbol] = parseMetaHighlightString(this.options.meta.__raw));
      const lines = this.meta[symbol] || [];
      if (lines.includes(line))
        this.addClassToHast(node, className);
      return node;
    }
  };
}

function parseMetaHighlightWords(meta) {
  if (!meta)
    return [];
  const match = Array.from(meta.matchAll(/\/((?:\\.|[^/])+)\//g));
  return match.map((v) => v[1].replace(/\\(.)/g, "$1"));
}
function transformerMetaWordHighlight(options = {}) {
  const {
    className = "highlighted-word"
  } = options;
  return {
    name: "@shikijs/transformers:meta-word-highlight",
    preprocess(code, options2) {
      if (!this.options.meta?.__raw)
        return;
      const words = parseMetaHighlightWords(this.options.meta.__raw);
      options2.decorations || (options2.decorations = []);
      for (const word of words) {
        const indexes = findAllSubstringIndexes(code, word);
        for (const index of indexes) {
          options2.decorations.push({
            start: index,
            end: index + word.length,
            properties: {
              class: className
            }
          });
        }
      }
    }
  };
}
function findAllSubstringIndexes(str, substr) {
  const indexes = [];
  let i = -1;
  while ((i = str.indexOf(substr, i + 1)) !== -1)
    indexes.push(i);
  return indexes;
}

function createCommentNotationTransformer(name, regex, onMatch, removeEmptyLines = false) {
  return {
    name,
    code(code) {
      const lines = code.children.filter((i) => i.type === "element");
      const linesToRemove = [];
      lines.forEach((line, idx) => {
        let nodeToRemove;
        for (const child of line.children) {
          if (child.type !== "element")
            continue;
          const text = child.children[0];
          if (text.type !== "text")
            continue;
          let replaced = false;
          text.value = text.value.replace(regex, (...match) => {
            if (onMatch.call(this, match, line, child, lines, idx)) {
              replaced = true;
              return "";
            }
            return match[0];
          });
          if (replaced && !text.value.trim())
            nodeToRemove = child;
        }
        if (nodeToRemove) {
          line.children.splice(line.children.indexOf(nodeToRemove), 1);
          if (line.children.length === 0) {
            linesToRemove.push(line);
            if (removeEmptyLines) {
              const next = code.children[code.children.indexOf(line) + 1];
              if (next && next.type === "text" && next.value === "\n")
                linesToRemove.push(next);
            }
          }
        }
      });
      for (const line of linesToRemove)
        code.children.splice(code.children.indexOf(line), 1);
    }
  };
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function transformerNotationMap(options = {}, name = "@shikijs/transformers:notation-map") {
  const {
    classMap = {},
    classActivePre = void 0
  } = options;
  return createCommentNotationTransformer(
    name,
    new RegExp(`\\s*(?://|/\\*|<!--|#|--|%{1,2}|;{1,2}|"|')\\s+\\[!code (${Object.keys(classMap).map(escapeRegExp).join("|")})(:\\d+)?\\]\\s*(?:\\*/|-->)?\\s*$`),
    function([_, match, range = ":1"], _line, _comment, lines, index) {
      const lineNum = Number.parseInt(range.slice(1), 10);
      lines.slice(index, index + lineNum).forEach((line) => {
        this.addClassToHast(line, classMap[match]);
      });
      if (classActivePre)
        this.addClassToHast(this.pre, classActivePre);
      return true;
    }
  );
}

function transformerNotationDiff(options = {}) {
  const {
    classLineAdd = "diff add",
    classLineRemove = "diff remove",
    classActivePre = "has-diff"
  } = options;
  return transformerNotationMap(
    {
      classMap: {
        "++": classLineAdd,
        "--": classLineRemove
      },
      classActivePre
    },
    "@shikijs/transformers:notation-diff"
  );
}

function transformerNotationErrorLevel(options = {}) {
  const {
    classMap = {
      error: ["highlighted", "error"],
      warning: ["highlighted", "warning"]
    },
    classActivePre = "has-highlighted"
  } = options;
  return transformerNotationMap(
    {
      classMap,
      classActivePre
    },
    "@shikijs/transformers:notation-error-level"
  );
}

function transformerNotationFocus(options = {}) {
  const {
    classActiveLine = "focused",
    classActivePre = "has-focused"
  } = options;
  return transformerNotationMap(
    {
      classMap: {
        focus: classActiveLine
      },
      classActivePre
    },
    "@shikijs/transformers:notation-focus"
  );
}

function transformerNotationHighlight(options = {}) {
  const {
    classActiveLine = "highlighted",
    classActivePre = "has-highlighted"
  } = options;
  return transformerNotationMap(
    {
      classMap: {
        highlight: classActiveLine,
        hl: classActiveLine
      },
      classActivePre
    },
    "@shikijs/transformers:notation-highlight"
  );
}

function highlightWordInLine(line, ignoredElement, word, className) {
  const content = getTextContent(line);
  let index = content.indexOf(word);
  while (index !== -1) {
    highlightRange.call(this, line.children, ignoredElement, index, word.length, className);
    index = content.indexOf(word, index + 1);
  }
}
function getTextContent(element) {
  if (element.type === "text")
    return element.value;
  if (element.type === "element" && element.tagName === "span")
    return element.children.map(getTextContent).join("");
  return "";
}
function highlightRange(elements, ignoredElement, index, len, className) {
  let currentIdx = 0;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.type !== "element" || element.tagName !== "span" || element === ignoredElement)
      continue;
    const textNode = element.children[0];
    if (textNode.type !== "text")
      continue;
    if (hasOverlap([currentIdx, currentIdx + textNode.value.length - 1], [index, index + len])) {
      const start = Math.max(0, index - currentIdx);
      const length = len - Math.max(0, currentIdx - index);
      if (length === 0)
        continue;
      const separated = separateToken(element, textNode, start, length);
      this.addClassToHast(separated[1], className);
      const output = separated.filter(Boolean);
      elements.splice(i, 1, ...output);
      i += output.length - 1;
    }
    currentIdx += textNode.value.length;
  }
}
function hasOverlap(range1, range2) {
  return range1[0] <= range2[1] && range1[1] >= range2[0];
}
function separateToken(span, textNode, index, len) {
  const text = textNode.value;
  const createNode = (value) => inheritElement(span, {
    children: [
      {
        type: "text",
        value
      }
    ]
  });
  return [
    index > 0 ? createNode(text.slice(0, index)) : void 0,
    createNode(text.slice(index, index + len)),
    index + len < text.length ? createNode(text.slice(index + len)) : void 0
  ];
}
function inheritElement(original, overrides) {
  return {
    ...original,
    properties: {
      ...original.properties
    },
    ...overrides
  };
}

function transformerNotationWordHighlight(options = {}) {
  const {
    classActiveWord = "highlighted-word",
    classActivePre = void 0
  } = options;
  return createCommentNotationTransformer(
    "@shikijs/transformers:notation-highlight-word",
    // comment-start             | marker    | word           | range | comment-end
    /^\s*(?:\/\/|\/\*|<!--|#)\s+\[!code word:((?:\\.|[^:\]])+)(:\d+)?\]\s*(?:\*\/|-->)?/,
    function([_, word, range], _line, comment, lines, index) {
      const lineNum = range ? Number.parseInt(range.slice(1), 10) : lines.length;
      word = word.replace(/\\(.)/g, "$1");
      lines.slice(index + 1, index + 1 + lineNum).forEach((line) => highlightWordInLine.call(this, line, comment, word, classActiveWord));
      if (classActivePre)
        this.addClassToHast(this.pre, classActivePre);
      return true;
    },
    true
    // remove empty lines
  );
}

function transformerRemoveLineBreak() {
  return {
    name: "@shikijs/transformers:remove-line-break",
    code(code) {
      code.children = code.children.filter((line) => !(line.type === "text" && line.value === "\n"));
    }
  };
}

function transformerRemoveNotationEscape() {
  return {
    name: "@shikijs/transformers:remove-notation-escape",
    postprocess(code) {
      return code.replace(/\[\\!code/g, "[!code");
    }
  };
}

function separateContinuousSpaces(inputs) {
  const result = [];
  let current = "";
  function bump() {
    if (current.length)
      result.push(current);
    current = "";
  }
  inputs.forEach((part, idx) => {
    if (isTab(part)) {
      bump();
      result.push(part);
    } else if (isSpace(part) && (isSpace(inputs[idx - 1]) || isSpace(inputs[idx + 1]))) {
      bump();
      result.push(part);
    } else {
      current += part;
    }
  });
  bump();
  return result;
}
function isTab(part) {
  return part === "	";
}
function isSpace(part) {
  return part === " " || part === "	";
}
function splitSpaces(parts, type, renderContinuousSpaces = true) {
  if (type === "all")
    return parts;
  let leftCount = 0;
  let rightCount = 0;
  if (type === "boundary") {
    for (let i = 0; i < parts.length; i++) {
      if (isSpace(parts[i]))
        leftCount++;
      else
        break;
    }
  }
  if (type === "boundary" || type === "trailing") {
    for (let i = parts.length - 1; i >= 0; i--) {
      if (isSpace(parts[i]))
        rightCount++;
      else
        break;
    }
  }
  const middle = parts.slice(leftCount, parts.length - rightCount);
  return [
    ...parts.slice(0, leftCount),
    ...renderContinuousSpaces ? separateContinuousSpaces(middle) : [middle.join("")],
    ...parts.slice(parts.length - rightCount)
  ];
}

function transformerRenderWhitespace(options = {}) {
  const classMap = {
    " ": options.classSpace ?? "space",
    "	": options.classTab ?? "tab"
  };
  const position = options.position ?? "all";
  const keys = Object.keys(classMap);
  return {
    name: "@shikijs/transformers:render-whitespace",
    // We use `root` hook here to ensure it runs after all other transformers
    root(root) {
      const pre = root.children[0];
      const code = pre.children[0];
      code.children.forEach(
        (line) => {
          if (line.type !== "element")
            return;
          const elements = line.children.filter((token) => token.type === "element");
          const last = elements.length - 1;
          line.children = line.children.flatMap((token) => {
            if (token.type !== "element")
              return token;
            const index = elements.indexOf(token);
            if (position === "boundary" && index !== 0 && index !== last)
              return token;
            if (position === "trailing" && index !== last)
              return token;
            const node = token.children[0];
            if (node.type !== "text" || !node.value)
              return token;
            const parts = splitSpaces(
              node.value.split(/([ \t])/).filter((i) => i.length),
              position === "boundary" && index === last && last !== 0 ? "trailing" : position,
              position !== "trailing"
            );
            if (parts.length <= 1)
              return token;
            return parts.map((part) => {
              const clone = {
                ...token,
                properties: { ...token.properties }
              };
              clone.children = [{ type: "text", value: part }];
              if (keys.includes(part)) {
                this.addClassToHast(clone, classMap[part]);
                delete clone.properties.style;
              }
              return clone;
            });
          });
        }
      );
    }
  };
}

function transformerStyleToClass(options = {}) {
  const {
    classPrefix = "__shiki_",
    classSuffix = "",
    classReplacer = (className) => className
  } = options;
  const classToStyle = /* @__PURE__ */ new Map();
  function stringifyStyle(style) {
    return Object.entries(style).map(([key, value]) => `${key}:${value}`).join(";");
  }
  function registerStyle(style) {
    const str = typeof style === "string" ? style : stringifyStyle(style);
    let className = classPrefix + cyrb53(str) + classSuffix;
    className = classReplacer(className);
    if (!classToStyle.has(className)) {
      classToStyle.set(
        className,
        typeof style === "string" ? style : { ...style }
      );
    }
    return className;
  }
  return {
    name: "@shikijs/transformers:style-to-class",
    pre(t) {
      if (!t.properties.style)
        return;
      const className = registerStyle(t.properties.style);
      delete t.properties.style;
      this.addClassToHast(t, className);
    },
    tokens(lines) {
      for (const line of lines) {
        for (const token of line) {
          if (!token.htmlStyle)
            continue;
          const className = registerStyle(token.htmlStyle);
          token.htmlStyle = {};
          token.htmlAttrs || (token.htmlAttrs = {});
          if (!token.htmlAttrs.class)
            token.htmlAttrs.class = className;
          else
            token.htmlAttrs.class += ` ${className}`;
        }
      }
    },
    getClassRegistry() {
      return classToStyle;
    },
    getCSS() {
      let css = "";
      for (const [className, style] of classToStyle.entries()) {
        css += `.${className}{${typeof style === "string" ? style : stringifyStyle(style)}}`;
      }
      return css;
    },
    clearRegistry() {
      classToStyle.clear();
    }
  };
}
function cyrb53(str, seed = 0) {
  let h1 = 3735928559 ^ seed;
  let h2 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
  h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
  h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36).slice(0, 6);
}

export { createCommentNotationTransformer, parseMetaHighlightString, parseMetaHighlightWords, transformerCompactLineOptions, transformerMetaHighlight, transformerMetaWordHighlight, transformerNotationDiff, transformerNotationErrorLevel, transformerNotationFocus, transformerNotationHighlight, transformerNotationMap, transformerNotationWordHighlight, transformerRemoveLineBreak, transformerRemoveNotationEscape, transformerRenderWhitespace, transformerStyleToClass };
