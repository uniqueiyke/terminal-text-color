import { bgColorRGB, fgColorRGB } from "./ansi";
import { reset } from "./basics";
import ansiES from "./color-constants";
import { textCodeHelper } from "./funcs";

/**
 * print black text to the console
 * @param text 
 * @example console.log(black('see my color'));
 * @returns 
 */
const black = (text: string) => textCodeHelper(ansiES.fg.black, text);

/**
 * print red text to the console
 * @param text 
 * @example console.log(red('see my color'));
 * @returns 
 */
const red = (text: string) => textCodeHelper(ansiES.fg.red, text);

/**
 * print blue text to the console
 * @param text 
 * @example console.log(blue('see my color'));
 * @returns 
 */
const blue = (text: string) => textCodeHelper(ansiES.fg.blue, text);

/**
 * print white text to the console
 * @param text 
 * @example console.log(white('see my color'));
 * @returns 
 */
const white = (text: string) => textCodeHelper(ansiES.fg.white, text);

/**
 * print magneta text to the console
 * @param text 
 * @example console.log(magneta('see my color'));
 * @returns 
 */
const magenta = (text: string) => textCodeHelper(ansiES.fg.magenta, text);

/**
 * print yellow text to the console
 * @param text 
 * @example console.log(yellow('see my color'));
 * @returns 
 */
const yellow = (text: string) => textCodeHelper(ansiES.fg.yellow, text);

/**
 * print cyan text to the console
 * @param text 
 * @example console.log(cyan('see my color'));
 * @returns 
 */
const cyan = (text: string) => textCodeHelper(ansiES.fg.cyan, text);

/**
 * print green text to the console
 * @param text 
 * @example console.log(green('see my color'));
 * @returns 
 */
const green = (text: string) => textCodeHelper(ansiES.fg.green, text);

/**
 * print gray text to the console
 * @param text 
 * @example console.log(gray('see my color'));
 * @returns 
 */
const gray = (text: string) => textCodeHelper(ansiES.fg.gray, text);

/**
 * print teal text to the console
 * @param text 
 * @example console.log(teal('see my color'));
 * @returns 
 */
const teal = (text: string) => {
    return textCodeHelper(fgColorRGB(0, 128, 128), text);
};

/**
 * print aqua text to the console
 * @param text 
 * @example console.log(aqua('see my color'));
 * @returns 
 */
const aqua = (text: string) => {
    return textCodeHelper(fgColorRGB(0, 255, 255), text);
};

/**
 * print bisque text to the console
 * @param text 
 * @example console.log(bisque('see my color'));
 * @returns 
 */
const bisque = (text: string) => {
    return textCodeHelper(fgColorRGB(255, 228, 196), text);
};

/**
 * print blueviolet text to the console
 * @param text 
 * @example console.log(blueviolet('see my color'));
 * @returns 
 */
const blueviolet = (text: string) => {
    return textCodeHelper(fgColorRGB(138, 43, 226), text);
}

/**
 * print brown text to the console
 * @param text 
 * @example console.log(brown('see my color'));
 * @returns 
 */
const brown = (text: string) => {
    return textCodeHelper(fgColorRGB(165, 42, 42), text);
};

/**
 * print cadetblue text to the console
 * @param text 
 * @example console.log(cadetblue('see my color'));
 * @returns 
 */
const cadetblue = (text: string) => {
    return textCodeHelper(fgColorRGB(95, 158, 160), text);
};

/**
 * print chocolate text to the console
 * @param text 
 * @example console.log(chocolate('see my color'));
 * @returns 
 */
const chocolate = (text: string) => {
    return textCodeHelper(fgColorRGB(210, 105, 30), text);
};

/**
 * print coral text to the console
 * @param text 
 * @example console.log(coral('see my color'));
 * @returns 
 */
const coral = (text: string) => {
    return textCodeHelper(fgColorRGB(255, 127, 80), text);
};

/**
 * print crimson text to the console
 * @param text 
 * @example console.log(crimson('see my color'));
 * @returns 
 */
const crimson = (text: string) => {
    return textCodeHelper(fgColorRGB(220, 20, 60), text);
};

/**
 * print gold text to the console
 * @param text 
 * @example console.log(gold('see my color'));
 * @returns 
 */
const gold = (text: string) => {
    return textCodeHelper(fgColorRGB(243, 209, 19), text);
};

/**
 * print goldenrod text to the console
 * @param text 
 * @example console.log(goldenrod('see my color'));
 * @returns 
 */
const goldenrod = (text: string) => {
    return textCodeHelper(fgColorRGB(218, 165, 32), text);
};

/**
 * print darkblue text to the console
 * @param text 
 * @example console.log(darkblue('see my color'));
 * @returns 
 */
const darkblue = (text: string) => {
    return textCodeHelper(fgColorRGB(0, 0, 139), text);
};

/**
 * print darkcyan text to the console
 * @param text 
 * @example console.log(darkcyan('see my color'));
 * @returns 
 */
const darkcyan = (text: string) => {
    return textCodeHelper(fgColorRGB(0, 139, 139), text);
};
const darkgoldenrod = (text: string) => {
    return textCodeHelper(fgColorRGB(184, 134, 11), text);
};
const darkgray = (text: string) => {
    return textCodeHelper(fgColorRGB(169, 169, 169), text);
};
const darkgreen = (text: string) => {
    return textCodeHelper(fgColorRGB(0, 100, 0), text);
};
const darkolivegreen = (text: string) => {
    return textCodeHelper(fgColorRGB(85, 107, 47), text);
};
const darkslategray = (text: string) => {
    return `${fgColorRGB(47, 79, 79)}${text}${reset()}`
};
const darkorange = (text: string) => {
    return textCodeHelper(fgColorRGB(255, 140, 0), text);
};
const darkmagenta = (text: string) => {
    return textCodeHelper(fgColorRGB(139, 0, 139), text);
};
const darkred = (text: string) => {
    return textCodeHelper(fgColorRGB(139, 0, 0), text);
};
const darkturquoise = (text: string) => {
    return textCodeHelper(fgColorRGB(0, 206, 209), text);
};
const turquoise = (text: string) => {
    return textCodeHelper(fgColorRGB(64, 224, 288), text);
};
const darkviolet = (text: string) => {
    return textCodeHelper(fgColorRGB(140, 0, 211), text);
};
const fuchsia = (text: string) => {
    return textCodeHelper(fgColorRGB(255, 0, 255), text);
};
const purple = (text: string) => {
    return textCodeHelper(fgColorRGB(128, 0, 128), text);
};
const pink = (text: string) => {
    return textCodeHelper(fgColorRGB(255, 192, 203), text);
};
const maroon = (text: string) => {
    return textCodeHelper(fgColorRGB(128, 0, 0), text);
};

const tomato = (text: string) => {
    return textCodeHelper(fgColorRGB(255, 99, 71), text);
};
const steelblue = (text: string) => {
    return textCodeHelper(fgColorRGB(70, 130, 180), text);
};

const warning = (text: string) => {
    return textCodeHelper(fgColorRGB(240, 214, 97), text);
};
const success = (text: string) => {
    return textCodeHelper(fgColorRGB(72, 221, 104), text);
};
const error = (text: string) => {
    return textCodeHelper(fgColorRGB(230, 67, 67), text);
};
const info = (text: string) => {
    return textCodeHelper(fgColorRGB(67, 184, 230), text);
};


const blackBG = (text: string) => textCodeHelper(ansiES.bg.black, text);
const redBG = (text: string) => textCodeHelper(ansiES.bg.red, text);
const blueBG = (text: string) => textCodeHelper(ansiES.bg.blue, text);
const whiteBG = (text: string) => textCodeHelper(ansiES.bg.white, text);
const magentaBG = (text: string) => textCodeHelper(ansiES.bg.magenta, text);
const yellowBG = (text: string) => textCodeHelper(ansiES.bg.yellow, text);
const cyanBG = (text: string) => textCodeHelper(ansiES.bg.cyan, text);
const greenBG = (text: string) => textCodeHelper(ansiES.bg.green, text);
const grayBG = (text: string) => textCodeHelper(ansiES.bg.gray, text);

/**
 * print teal text background to the console
 * @param text 
 * @example console.log(tealBG('see my background color'));
 * @returns 
 */
const tealBG = (text: string) => {
    return textCodeHelper(bgColorRGB(0, 128, 128), text);
};

/**
 * print aqua text background to the console
 * @param text 
 * @example console.log(aquaBG('see my background color'));
 * @returns 
 */
const aquaBG = (text: string) => {
    return textCodeHelper(bgColorRGB(0, 255, 255), text);
};

/**
 * print bisque text background to the console
 * @param text 
 * @example console.log(bisqueBG('see my background color'));
 * @returns 
 */
const bisqueBG = (text: string) => {
    return textCodeHelper(bgColorRGB(255, 228, 196), text);
};

/**
 * print blueviolet text background to the console
 * @param text 
 * @example console.log(bluevioletBG('see my background color'));
 * @returns 
 */
const bluevioletBG = (text: string) => {
    return textCodeHelper(bgColorRGB(138, 43, 226), text);
}

/**
 * print brown text background to the console
 * @param text 
 * @example console.log(brownBG('see my background color'));
 * @returns 
 */
const brownBG = (text: string) => {
    return textCodeHelper(bgColorRGB(165, 42, 42), text);
};

/**
 * print cadetblue text background to the console
 * @param text 
 * @example console.log(cadetblueBG('see my background color'));
 * @returns 
 */
const cadetblueBG = (text: string) => {
    return textCodeHelper(bgColorRGB(95, 158, 160), text);
};

/**
 * print chocolate text background to the console
 * @param text 
 * @example console.log(chocolateBG('see my background color'));
 * @returns 
 */
const chocolateBG = (text: string) => {
    return textCodeHelper(bgColorRGB(210, 105, 30), text);
};

/**
 * print coral text background to the console
 * @param text 
 * @example console.log(coralBG('see my background color'));
 * @returns 
 */
const coralBG = (text: string) => {
    return textCodeHelper(bgColorRGB(255, 127, 80), text);
};

/**
 * print crimson text background to the console
 * @param text 
 * @example console.log(crimsonBG('see my background color'));
 * @returns 
 */
const crimsonBG = (text: string) => {
    return textCodeHelper(bgColorRGB(220, 20, 60), text);
};

/**
 * print gold text background to the console
 * @param text 
 * @example console.log(goldBG('see my background color'));
 * @returns 
 */
const goldBG = (text: string) => {
    return textCodeHelper(bgColorRGB(243, 209, 19), text);
};

/**
 * print goldenrod text background to the console
 * @param text 
 * @example console.log(goldenrodBG('see my background color'));
 * @returns 
 */
const goldenrodBG = (text: string) => {
    return textCodeHelper(bgColorRGB(218, 165, 32), text);
};

/**
 * print darkblue text background to the console
 * @param text 
 * @example console.log(darkblueBG('see my background color'));
 * @returns 
 */
const darkblueBG = (text: string) => {
    return textCodeHelper(bgColorRGB(0, 0, 139), text);
};

/**
 * print darkcyan text background to the console
 * @param text 
 * @example console.log(darkcyanBG('see my background color'));
 * @returns 
 */
const darkcyanBG = (text: string) => {
    return textCodeHelper(bgColorRGB(0, 139, 139), text);
};
const darkgoldenrodBG = (text: string) => {
    return textCodeHelper(bgColorRGB(184, 134, 11), text);
};
const darkgrayBG = (text: string) => {
    return textCodeHelper(bgColorRGB(169, 169, 169), text);
};
const darkgreenBG = (text: string) => {
    return textCodeHelper(bgColorRGB(0, 100, 0), text);
};
const darkolivegreenBG = (text: string) => {
    return textCodeHelper(bgColorRGB(85, 107, 47), text);
};
const darkslategrayBG = (text: string) => {
    return `${bgColorRGB(47, 79, 79)}${text}${reset()}`
};
const darkorangeBG = (text: string) => {
    return textCodeHelper(bgColorRGB(255, 140, 0), text);
};
const darkmagentaBG = (text: string) => {
    return textCodeHelper(bgColorRGB(139, 0, 139), text);
};
const darkredBG = (text: string) => {
    return textCodeHelper(bgColorRGB(139, 0, 0), text);
};
const darkturquoiseBG = (text: string) => {
    return textCodeHelper(bgColorRGB(0, 206, 209), text);
};
const turquoiseBG = (text: string) => {
    return textCodeHelper(bgColorRGB(64, 224, 288), text);
};
const darkvioletBG = (text: string) => {
    return textCodeHelper(bgColorRGB(140, 0, 211), text);
};
const fuchsiaBG = (text: string) => {
    return textCodeHelper(bgColorRGB(255, 0, 255), text);
};
const purpleBG = (text: string) => {
    return textCodeHelper(bgColorRGB(128, 0, 128), text);
};
const pinkBG = (text: string) => {
    return textCodeHelper(bgColorRGB(255, 192, 203), text);
};
const maroonBG = (text: string) => {
    return textCodeHelper(bgColorRGB(128, 0, 0), text);
};

const tomatoBG = (text: string) => {
    return textCodeHelper(bgColorRGB(255, 99, 71), text);
};
const steelblueBG = (text: string) => {
    return textCodeHelper(bgColorRGB(70, 130, 180), text);
};

const warningBG = (text: string) => {
    return textCodeHelper(bgColorRGB(240, 214, 97), text);
};
const successBG = (text: string) => {
    return textCodeHelper(bgColorRGB(72, 221, 104), text);
};
const errorBG = (text: string) => {
    return textCodeHelper(bgColorRGB(230, 67, 67), text);
};
const infoBG = (text: string) => {
    return textCodeHelper(bgColorRGB(67, 184, 230), text);
};



export {
    teal, aqua, bisque, blueviolet, brown, cadetblue,
    chocolate, coral, crimson, gold, goldenrod,
    darkblue, darkcyan, darkgoldenrod, darkgray,
    darkgreen, darkolivegreen, darkslategray,
    darkorange, darkmagenta, darkred, tomato,
    darkturquoise, turquoise, darkviolet, 
    fuchsia, purple,  pink, maroon, 
    steelblue, warning, success, error, info,
    black, red, blue, white, magenta, yellow,
    cyan, green, gray, blackBG, blueBG, cyanBG, 
    grayBG, greenBG, magentaBG, redBG, whiteBG,
    yellowBG, tealBG, aquaBG, 
    bisqueBG, bluevioletBG, brownBG, cadetblueBG,
    chocolateBG, coralBG, crimsonBG, goldBG, goldenrodBG,
    darkblueBG, darkcyanBG, darkgoldenrodBG, darkgrayBG,
    darkgreenBG, darkolivegreenBG, darkslategrayBG,
    darkorangeBG, darkmagentaBG, darkredBG, tomatoBG,
    darkturquoiseBG, turquoiseBG, darkvioletBG, 
    fuchsiaBG, purpleBG,  pinkBG, maroonBG, 
    steelblueBG, warningBG, successBG, infoBG,
    errorBG,
}

