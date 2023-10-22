/**
 * Accept number between 30 - 37 and 90 - 97
 * black: 30, red: 31,  green: 32,  yellow: 33, blue: 34,
 * magenta: 35, cyan: 36, white: 37, gray: 90 for a foreground color.
 * 90 to 97 give a lighter versions of the colore specified.
 * @param n
 *
 * @example console.log(fgColor(33), 'This is yellow text'); //will print yellow text
 * @returns string
 */
declare const fgColor: (n: number) => string;
/**
 * Accept number between 40 - 47 and 100 - 107
 * black: 40, red: 41,  green: 42,  yellow: 43, blue: 44,
 * magenta: 45, cyan: 46, white: 47 for a background color.\n
 * 100 to 107 give a lighter versions of the colore specified.
 * @param n
 *
 * @example console.log(bgColor(3), 'This is yellow text background'); //will print yellow text background
 * @returns string
 */
declare const bgColor: (n: number) => string;
/**
 * Define color by using RGB color model. Specify the
 * three color values of Reg, Green and Blue to get the desired text color
 * @param r  from 0 to 255
 * @param g  from 0 to 255
 * @param b  from 0 to 255
 * @example console.log(fgColorRGB(255, 255, 0), 'This is yellow text'); //will print yellow text to the console
 * @returns string
 */
declare const fgColorRGB: (r: number, g: number, b: number) => string;
/**
 * Define color by using RGB color model. Specify the
 * three color values of Reg, Green and Blue to get the desired text color
 * @param r  from 0 to 255
 * @param g  from 0 to 255
 * @param b  from 0 to 255
 * @example console.log(bgColorRGB(255, 255, 0), 'This is yellow text background'); //will print yellow text background to the console
 * @returns string
 */
declare const bgColorRGB: (r: number, g: number, b: number) => string;
/**
 * Define a color by specifying a three hexadecimal
 * digits or six hexadecimal digits
 * @param hex string
 * @example console.log(fgColorHex('ff0'), 'This is yellow text');
 * console.log(fgColorHex('ffff00'), 'This is still a yellow text');
 * console.log(fgColorHex('ffff0'), 'Wrong hex color value. Default to white text');
 * @returns string
 */
declare const fgColorHex: (hex: string) => string;
/**
 * Define a color by specifying a three hexadecimal
 * digits or six hexadecimal digits
 * @param hex string
 * @example console.log(bgColorHex('ff0'), 'This is yellow text background');
 * console.log(bgColorHex('ffff00'), 'This is still a yellow text background');
 * console.log(bgColorHex('ffff0'), 'Wrong hex color value. Default to black background');
 * @returns string
 */
declare const bgColorHex: (hex: string) => string;
export { fgColor, bgColor, fgColorRGB, bgColorRGB, fgColorHex, bgColorHex };
//# sourceMappingURL=ansi.d.ts.map