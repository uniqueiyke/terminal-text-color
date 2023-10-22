/**
 * clear settings and reset to default
 * @returns
 */
declare const reset: () => string;
/**
 * Make text bold. This may not work
 * @param text
 * @example console.log(bold('A bold text'))
 * @returns
 */
declare const bold: (text?: string) => string;
/**
 * Make text dim ( decreased text intensity). This may not work
 * @param text
 * @example console.log(dim('A dim text'))
 * @returns
 */
declare const dim: (text?: string) => string;
/**
 * Make text italic. This may not work
 * @param text
 * @example console.log(italic('An italic text'))
 * @returns
 */
declare const italic: (text?: string) => string;
/**
 * underline a text
 * @param text
 * @example console.log(underline('An underlined text'))
 * @returns
 */
declare const underline: (text?: string) => string;
/**
 * Make text blink. This may not work
 * @param text
 * @example console.log(blink('A blinking text'))
 * @returns
 */
declare const blink: (text?: string) => string;
/**
 * hide text. This may not work
 * @param text
 * @example console.log(hidden('A hidden text'))
 * @returns
 */
declare const hidden: (text?: string) => string;
/**
 * Swap foreground and background colors
 * @param text
 * @example console.log(reverse('A reverse text'))
 * @returns
 */
declare const reverse: (text?: string) => string;
/**
 * strikethrough a text. This may not work
 * @param text
 * @example console.log(strikethrough('A strikethrough text'))
 * @returns
 */
declare const strikethrough: (text?: string) => string;
export { reset, dim, italic, bold, underline, reverse, hidden, strikethrough, blink, };
//# sourceMappingURL=basics.d.ts.map