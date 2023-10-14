import { isEigjtBit, isNumberInRange, logError, parseHex } from "./funcs";


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
const fgColor = (n: number) => {
    if(!isNumberInRange(n)){
        logError(`${n} is not correct foreground terminal color code`) 
        return "\x1b[0m";
    }
    return `\x1b[38;5;${n}m`;
}

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
const bgColor = (n: number) => {
    if(!isNumberInRange(n, 'bg')){
        logError(`${n} is not correct background terminal color code`);
        return "\x1b[0m";
    }
    return `\x1b[48;5;${n}m`;
} 

/**
 * Define color by using RGB color model. Specify the 
 * three color values of Reg, Green and Blue to get the desired text color
 * @param r  from 0 to 255
 * @param g  from 0 to 255
 * @param b  from 0 to 255
 * @example console.log(fgColorRGB(255, 255, 0), 'This is yellow text'); //will print yellow text to the console
 * @returns string
 */
const fgColorRGB = (r: number, g: number, b: number) => {
    if(isEigjtBit(r) && isEigjtBit(g) && isEigjtBit(b)){
        return `\x1b[38;2;${r};${g};${b}m`
    }
    logError(`(${r}, ${g}, ${b}) are wrong parameter value. Each of the arguments should be between 0 and 255 both inclusive`);
    return `\x1b[0m`;
}

/**
 * Define color by using RGB color model. Specify the 
 * three color values of Reg, Green and Blue to get the desired text color
 * @param r  from 0 to 255
 * @param g  from 0 to 255
 * @param b  from 0 to 255
 * @example console.log(bgColorRGB(255, 255, 0), 'This is yellow text background'); //will print yellow text background to the console
 * @returns string
 */
const bgColorRGB = (r: number, g: number, b: number) => {
    if(isEigjtBit(r) && isEigjtBit(g) && isEigjtBit(b)){
        return `\x1b[48;2;${r};${g};${b}m`;
    }
    logError(`(${r}, ${g}, ${b}) are wrong parameter value. Each of the arguments should be between 0 and 255 both inclusive`);
    return `\x1b[0m`;
}



/**
 * Define a color by specifying a three hexadecimal 
 * digits or six hexadecimal digits
 * @param hex string
 * @example console.log(fgColorHex('ff0'), 'This is yellow text');
 * console.log(fgColorHex('ffff00'), 'This is still a yellow text');
 * console.log(fgColorHex('ffff0'), 'Wrong hex color value. Default to white text');
 * @returns string
 */
const fgColorHex = (hex: string) => {
    const hexArr = parseHex(hex);
    if(hexArr.length === 0){
        return `\x1b[0m`;
    }

    return fgColorRGB(hexArr[0], hexArr[1], hexArr[2])
}

/**
 * Define a color by specifying a three hexadecimal 
 * digits or six hexadecimal digits
 * @param hex string
 * @example console.log(bgColorHex('ff0'), 'This is yellow text background');
 * console.log(bgColorHex('ffff00'), 'This is still a yellow text background');
 * console.log(bgColorHex('ffff0'), 'Wrong hex color value. Default to black background');
 * @returns string
 */
const bgColorHex = (hex: string) => {
    const hexArr = parseHex(hex);
    if(hexArr.length === 0){
        return `\x1b[0m`;
    }
    
    return bgColorRGB(hexArr[0], hexArr[1], hexArr[2])
}

export {
    fgColor, bgColor, fgColorRGB, bgColorRGB, 
    fgColorHex, bgColorHex
};
