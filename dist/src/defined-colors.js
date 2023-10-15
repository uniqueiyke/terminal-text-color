"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_1 = __importDefault(require("./ansi"));
const basics_1 = __importDefault(require("./basics"));
const color_constants_1 = __importDefault(require("./color-constants"));
const funcs_1 = require("./funcs");
const { reset } = basics_1.default;
const { bgColorRGB, fgColorRGB } = ansi_1.default;
/**
 * print black text to the console
 * @param text
 * @example console.log(black('see my color'));
 * @returns
 */
const black = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.black, text);
/**
 * print red text to the console
 * @param text
 * @example console.log(red('see my color'));
 * @returns
 */
const red = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.red, text);
/**
 * print blue text to the console
 * @param text
 * @example console.log(blue('see my color'));
 * @returns
 */
const blue = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.blue, text);
/**
 * print white text to the console
 * @param text
 * @example console.log(white('see my color'));
 * @returns
 */
const white = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.white, text);
/**
 * print magneta text to the console
 * @param text
 * @example console.log(magneta('see my color'));
 * @returns
 */
const magenta = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.magenta, text);
/**
 * print yellow text to the console
 * @param text
 * @example console.log(yellow('see my color'));
 * @returns
 */
const yellow = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.yellow, text);
/**
 * print cyan text to the console
 * @param text
 * @example console.log(cyan('see my color'));
 * @returns
 */
const cyan = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.cyan, text);
/**
 * print green text to the console
 * @param text
 * @example console.log(green('see my color'));
 * @returns
 */
const green = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.green, text);
/**
 * print gray text to the console
 * @param text
 * @example console.log(gray('see my color'));
 * @returns
 */
const gray = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.gray, text);
/**
 * print teal text to the console
 * @param text
 * @example console.log(teal('see my color'));
 * @returns
 */
const teal = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(0, 128, 128), text);
};
/**
 * print aqua text to the console
 * @param text
 * @example console.log(aqua('see my color'));
 * @returns
 */
const aqua = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(0, 255, 255), text);
};
/**
 * print bisque text to the console
 * @param text
 * @example console.log(bisque('see my color'));
 * @returns
 */
const bisque = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(255, 228, 196), text);
};
/**
 * print blueviolet text to the console
 * @param text
 * @example console.log(blueviolet('see my color'));
 * @returns
 */
const blueviolet = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(138, 43, 226), text);
};
/**
 * print brown text to the console
 * @param text
 * @example console.log(brown('see my color'));
 * @returns
 */
const brown = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(165, 42, 42), text);
};
/**
 * print cadetblue text to the console
 * @param text
 * @example console.log(cadetblue('see my color'));
 * @returns
 */
const cadetblue = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(95, 158, 160), text);
};
/**
 * print chocolate text to the console
 * @param text
 * @example console.log(chocolate('see my color'));
 * @returns
 */
const chocolate = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(210, 105, 30), text);
};
/**
 * print coral text to the console
 * @param text
 * @example console.log(coral('see my color'));
 * @returns
 */
const coral = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(255, 127, 80), text);
};
/**
 * print crimson text to the console
 * @param text
 * @example console.log(crimson('see my color'));
 * @returns
 */
const crimson = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(220, 20, 60), text);
};
/**
 * print gold text to the console
 * @param text
 * @example console.log(gold('see my color'));
 * @returns
 */
const gold = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(243, 209, 19), text);
};
/**
 * print goldenrod text to the console
 * @param text
 * @example console.log(goldenrod('see my color'));
 * @returns
 */
const goldenrod = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(218, 165, 32), text);
};
/**
 * print darkblue text to the console
 * @param text
 * @example console.log(darkblue('see my color'));
 * @returns
 */
const darkblue = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(0, 0, 139), text);
};
/**
 * print darkcyan text to the console
 * @param text
 * @example console.log(darkcyan('see my color'));
 * @returns
 */
const darkcyan = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(0, 139, 139), text);
};
const darkgoldenrod = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(184, 134, 11), text);
};
const darkgray = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(169, 169, 169), text);
};
const darkgreen = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(0, 100, 0), text);
};
const darkolivegreen = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(85, 107, 47), text);
};
const darkslategray = (text) => {
    return `${fgColorRGB(47, 79, 79)}${text}${reset()}`;
};
const darkorange = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(255, 140, 0), text);
};
const darkmagenta = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(139, 0, 139), text);
};
const darkred = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(139, 0, 0), text);
};
const darkturquoise = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(0, 206, 209), text);
};
const turquoise = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(64, 224, 288), text);
};
const darkviolet = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(140, 0, 211), text);
};
const fuchsia = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(255, 0, 255), text);
};
const purple = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(128, 0, 128), text);
};
const pink = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(255, 192, 203), text);
};
const maroon = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(128, 0, 0), text);
};
const tomato = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(255, 99, 71), text);
};
const steelblue = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(70, 130, 180), text);
};
const warning = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(240, 214, 97), text);
};
const success = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(72, 221, 104), text);
};
const error = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(230, 67, 67), text);
};
const info = (text) => {
    return (0, funcs_1.textCodeHelper)(fgColorRGB(67, 184, 230), text);
};
const blackBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.black, text);
const redBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.red, text);
const blueBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.blue, text);
const whiteBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.white, text);
const magentaBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.magenta, text);
const yellowBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.yellow, text);
const cyanBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.cyan, text);
const greenBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.green, text);
const grayBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.gray, text);
/**
 * print teal text background to the console
 * @param text
 * @example console.log(tealBG('see my background color'));
 * @returns
 */
const tealBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(0, 128, 128), text);
};
/**
 * print aqua text background to the console
 * @param text
 * @example console.log(aquaBG('see my background color'));
 * @returns
 */
const aquaBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(0, 255, 255), text);
};
/**
 * print bisque text background to the console
 * @param text
 * @example console.log(bisqueBG('see my background color'));
 * @returns
 */
const bisqueBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(255, 228, 196), text);
};
/**
 * print blueviolet text background to the console
 * @param text
 * @example console.log(bluevioletBG('see my background color'));
 * @returns
 */
const bluevioletBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(138, 43, 226), text);
};
/**
 * print brown text background to the console
 * @param text
 * @example console.log(brownBG('see my background color'));
 * @returns
 */
const brownBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(165, 42, 42), text);
};
/**
 * print cadetblue text background to the console
 * @param text
 * @example console.log(cadetblueBG('see my background color'));
 * @returns
 */
const cadetblueBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(95, 158, 160), text);
};
/**
 * print chocolate text background to the console
 * @param text
 * @example console.log(chocolateBG('see my background color'));
 * @returns
 */
const chocolateBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(210, 105, 30), text);
};
/**
 * print coral text background to the console
 * @param text
 * @example console.log(coralBG('see my background color'));
 * @returns
 */
const coralBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(255, 127, 80), text);
};
/**
 * print crimson text background to the console
 * @param text
 * @example console.log(crimsonBG('see my background color'));
 * @returns
 */
const crimsonBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(220, 20, 60), text);
};
/**
 * print gold text background to the console
 * @param text
 * @example console.log(goldBG('see my background color'));
 * @returns
 */
const goldBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(243, 209, 19), text);
};
/**
 * print goldenrod text background to the console
 * @param text
 * @example console.log(goldenrodBG('see my background color'));
 * @returns
 */
const goldenrodBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(218, 165, 32), text);
};
/**
 * print darkblue text background to the console
 * @param text
 * @example console.log(darkblueBG('see my background color'));
 * @returns
 */
const darkblueBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(0, 0, 139), text);
};
/**
 * print darkcyan text background to the console
 * @param text
 * @example console.log(darkcyanBG('see my background color'));
 * @returns
 */
const darkcyanBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(0, 139, 139), text);
};
const darkgoldenrodBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(184, 134, 11), text);
};
const darkgrayBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(169, 169, 169), text);
};
const darkgreenBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(0, 100, 0), text);
};
const darkolivegreenBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(85, 107, 47), text);
};
const darkslategrayBG = (text) => {
    return `${bgColorRGB(47, 79, 79)}${text}${reset()}`;
};
const darkorangeBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(255, 140, 0), text);
};
const darkmagentaBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(139, 0, 139), text);
};
const darkredBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(139, 0, 0), text);
};
const darkturquoiseBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(0, 206, 209), text);
};
const turquoiseBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(64, 224, 288), text);
};
const darkvioletBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(140, 0, 211), text);
};
const fuchsiaBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(255, 0, 255), text);
};
const purpleBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(128, 0, 128), text);
};
const pinkBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(255, 192, 203), text);
};
const maroonBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(128, 0, 0), text);
};
const tomatoBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(255, 99, 71), text);
};
const steelblueBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(70, 130, 180), text);
};
const warningBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(240, 214, 97), text);
};
const successBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(72, 221, 104), text);
};
const errorBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(230, 67, 67), text);
};
const infoBG = (text) => {
    return (0, funcs_1.textCodeHelper)(bgColorRGB(67, 184, 230), text);
};
const colors = {
    teal, aqua, bisque, blueviolet, brown, cadetblue,
    chocolate, coral, crimson, gold, goldenrod,
    darkblue, darkcyan, darkgoldenrod, darkgray,
    darkgreen, darkolivegreen, darkslategray,
    darkorange, darkmagenta, darkred, tomato,
    darkturquoise, turquoise, darkviolet,
    fuchsia, purple, pink, maroon,
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
    fuchsiaBG, purpleBG, pinkBG, maroonBG,
    steelblueBG, warningBG, successBG, infoBG,
    errorBG,
};
exports.default = colors;
//# sourceMappingURL=defined-colors.js.map