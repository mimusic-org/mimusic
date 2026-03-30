export type EmulatedRegExpOptions = {
    useEmulationGroups?: boolean;
    strategy?: string;
};
export function applySubclassStrategies(ast: any): "line_or_search_start" | "not_search_start";
/**
@typedef {{
  useEmulationGroups?: boolean;
  strategy?: string;
}} EmulatedRegExpOptions
*/
/**
Works the same as JavaScript's native `RegExp` constructor in all contexts, but can be given
results from `toDetails` to produce the same result as `toRegExp`.
@augments RegExp
*/
export class EmulatedRegExp extends RegExp {
    /**
    @param {string | EmulatedRegExp} pattern
    @param {string} [flags]
    @param {EmulatedRegExpOptions} [options]
    */
    constructor(pattern: string | EmulatedRegExp, flags?: string, options?: EmulatedRegExpOptions);
    #private;
}
export function isLoneGLookaround(node: any, options: any): any;
