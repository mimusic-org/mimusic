import { PatternScanner, RegexEngineString, RegexEngine } from '@shikijs/types';
import { IOnigMatch } from '@shikijs/vscode-textmate';
import { OnigurumaToEsOptions } from 'oniguruma-to-es';

interface JavaScriptRegexEngineOptions {
    /**
     * Whether to allow invalid regex patterns.
     *
     * @default false
     */
    forgiving?: boolean;
    /**
     * The target ECMAScript version.
     *
     * Oniguruma-To-ES uses RegExp features from later versions of ECMAScript to provide improved
     * accuracy and add support for more grammars. If using target `ES2024` or later, the RegExp `v`
     * flag is used which requires Node.js 20+ or Chrome 112+.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
     *
     * For maximum compatibility, you can set it to `ES2018` which uses the RegExp `u` flag but
     * supports a few less grammars.
     *
     * Set to `auto` to automatically detect the latest version supported by the environment.
     *
     * @default 'auto'
     */
    target?: 'auto' | 'ES2025' | 'ES2024' | 'ES2018';
    /**
     * Cache for regex patterns.
     */
    cache?: Map<string, RegExp | Error> | null;
    /**
     * Custom pattern to RegExp constructor.
     *
     * By default `oniguruma-to-es` is used.
     */
    regexConstructor?: (pattern: string) => RegExp;
}
/**
 * The default RegExp constructor for JavaScript regex engine.
 */
declare function defaultJavaScriptRegexConstructor(pattern: string, options?: OnigurumaToEsOptions): RegExp;
declare class JavaScriptScanner implements PatternScanner {
    patterns: string[];
    options: JavaScriptRegexEngineOptions;
    regexps: (RegExp | null)[];
    constructor(patterns: string[], options?: JavaScriptRegexEngineOptions);
    findNextMatchSync(string: string | RegexEngineString, startPosition: number): IOnigMatch | null;
}
/**
 * Use the modern JavaScript RegExp engine to implement the OnigScanner.
 *
 * As Oniguruma supports some features that can't be emulated using native JavaScript regexes, some
 * patterns are not supported. Errors will be thrown when parsing TextMate grammars with
 * unsupported patterns, and when the grammar includes patterns that use invalid Oniguruma syntax.
 * Set `forgiving` to `true` to ignore these errors and skip any unsupported or invalid patterns.
 *
 * @experimental
 */
declare function createJavaScriptRegexEngine(options?: JavaScriptRegexEngineOptions): RegexEngine;

export { type JavaScriptRegexEngineOptions, JavaScriptScanner, createJavaScriptRegexEngine, defaultJavaScriptRegexConstructor };
