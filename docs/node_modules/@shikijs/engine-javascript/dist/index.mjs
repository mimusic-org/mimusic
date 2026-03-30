import { toRegExp } from 'oniguruma-to-es';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, key + "" , value);
  return value;
};
const MAX = 4294967295;
function defaultJavaScriptRegexConstructor(pattern, options) {
  return toRegExp(
    pattern,
    {
      global: true,
      hasIndices: true,
      rules: {
        allowOrphanBackrefs: true,
        allowUnhandledGAnchors: true,
        asciiWordBoundaries: true
      },
      ...options
    }
  );
}
class JavaScriptScanner {
  constructor(patterns, options = {}) {
    this.patterns = patterns;
    this.options = options;
    __publicField(this, "regexps");
    const {
      forgiving = false,
      cache,
      target = "auto",
      regexConstructor = (pattern) => defaultJavaScriptRegexConstructor(pattern, { target })
    } = options;
    this.regexps = patterns.map((p) => {
      const cached = cache?.get(p);
      if (cached) {
        if (cached instanceof RegExp) {
          return cached;
        }
        if (forgiving)
          return null;
        throw cached;
      }
      try {
        const regex = regexConstructor(p);
        cache?.set(p, regex);
        return regex;
      } catch (e) {
        cache?.set(p, e);
        if (forgiving)
          return null;
        throw e;
      }
    });
  }
  findNextMatchSync(string, startPosition) {
    const str = typeof string === "string" ? string : string.content;
    const pending = [];
    function toResult(index, match, offset = 0) {
      return {
        index,
        captureIndices: match.indices.map((indice) => {
          if (indice == null) {
            return {
              end: MAX,
              start: MAX,
              length: 0
            };
          }
          return {
            start: indice[0] + offset,
            length: indice[1] - indice[0],
            end: indice[1] + offset
          };
        })
      };
    }
    for (let i = 0; i < this.regexps.length; i++) {
      const regexp = this.regexps[i];
      if (!regexp)
        continue;
      try {
        regexp.lastIndex = startPosition;
        const match = regexp.exec(str);
        if (!match)
          continue;
        if (match.index === startPosition) {
          return toResult(i, match, 0);
        }
        pending.push([i, match, 0]);
      } catch (e) {
        if (this.options.forgiving)
          continue;
        throw e;
      }
    }
    if (pending.length) {
      const minIndex = Math.min(...pending.map((m) => m[1].index));
      for (const [i, match, offset] of pending) {
        if (match.index === minIndex) {
          return toResult(i, match, offset);
        }
      }
    }
    return null;
  }
}
function createJavaScriptRegexEngine(options = {}) {
  const _options = {
    cache: /* @__PURE__ */ new Map(),
    ...options
  };
  return {
    createScanner(patterns) {
      return new JavaScriptScanner(patterns, _options);
    },
    createString(s) {
      return {
        content: s
      };
    }
  };
}

export { JavaScriptScanner, createJavaScriptRegexEngine, defaultJavaScriptRegexConstructor };
