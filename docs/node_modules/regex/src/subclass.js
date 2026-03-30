import {Context, replaceUnescaped} from 'regex-utilities';

// This marker was chosen because it's impossible to match (so its extemely unlikely to be used in
// a user-provided regex); it's not at risk of being optimized away, transformed, or flagged as an
// error by a plugin; and it ends with an unquantifiable token
const emulationGroupMarker = '$E$';

/**
Works the same as JavaScript's native `RegExp` constructor in all contexts, but automatically
adjusts matches and subpattern indices (with flag `d`) to account for injected emulation groups.
*/
class RegExpSubclass extends RegExp {
  /**
  Avoid `#private` to allow for subclassing.
  @private
  @type {Array<boolean> | undefined}
  */
  _captureMap;
  /**
  @param {string | RegExpSubclass} expression
  @param {string} [flags]
  @param {{useEmulationGroups: boolean;}} [options]
  */
  constructor(expression, flags, options) {
    if (expression instanceof RegExp && options) {
      throw new Error('Cannot provide options when copying regexp');
    }
    let captureMap;
    if (options?.useEmulationGroups) {
      ({expression, captureMap} = unmarkEmulationGroups(expression));
    }
    super(expression, flags);
    if (captureMap) {
      this._captureMap = captureMap;
    // The third argument `options` isn't provided when regexes are copied as part of the internal
    // handling of string methods `matchAll` and `split`
    } else if (expression instanceof RegExpSubclass) {
      this._captureMap = expression._captureMap;
    }
  }
  /**
  Called internally by all String/RegExp methods that use regexes.
  @override
  @param {string} str
  @returns {RegExpExecArray | null}
  */
  exec(str) {
    const match = RegExp.prototype.exec.call(this, str);
    if (!match || !this._captureMap) {
      return match;
    }
    const matchCopy = [...match];
    // Empty all but the first value of the array while preserving its other properties
    match.length = 1;
    let indicesCopy;
    if (this.hasIndices) {
      indicesCopy = [...match.indices];
      match.indices.length = 1;
    }
    for (let i = 1; i < matchCopy.length; i++) {
      if (this._captureMap[i]) {
        match.push(matchCopy[i]);
        if (this.hasIndices) {
          match.indices.push(indicesCopy[i]);
        }
      }
    }
    return match;
  }
}

/**
Build the capturing group map (with emulation groups marked as `false` to indicate their submatches
shouldn't appear in results), and remove the markers for anonymous captures which were added to
emulate extended syntax.
@param {string} expression
@returns {{expression: string; captureMap: Array<boolean>;}}
*/
function unmarkEmulationGroups(expression) {
  const marker = emulationGroupMarker.replace(/\$/g, '\\$');
  const captureMap = [true];
  expression = replaceUnescaped(
    expression,
    String.raw`\((?:(?!\?)|\?<(?![=!])[^>]+>)(?<mark>${marker})?`,
    ({0: m, groups: {mark}}) => {
      if (mark) {
        captureMap.push(false);
        return m.slice(0, -emulationGroupMarker.length);
      }
      captureMap.push(true);
      return m;
    },
    Context.DEFAULT
  );
  return {
    captureMap,
    expression,
  };
}

export {
  emulationGroupMarker,
  RegExpSubclass,
};
