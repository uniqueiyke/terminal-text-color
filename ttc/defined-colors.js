"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redBG = exports.magentaBG = exports.greenBG = exports.grayBG = exports.cyanBG = exports.blueBG = exports.blackBG = exports.gray = exports.green = exports.cyan = exports.yellow = exports.magenta = exports.white = exports.blue = exports.red = exports.black = exports.info = exports.error = exports.success = exports.warning = exports.steelblue = exports.maroon = exports.pink = exports.purple = exports.fuchsia = exports.darkviolet = exports.turquoise = exports.darkturquoise = exports.tomato = exports.darkred = exports.darkmagenta = exports.darkorange = exports.darkslategray = exports.darkolivegreen = exports.darkgreen = exports.darkgray = exports.darkgoldenrod = exports.darkcyan = exports.darkblue = exports.goldenrod = exports.gold = exports.crimson = exports.coral = exports.chocolate = exports.cadetblue = exports.brown = exports.blueviolet = exports.bisque = exports.aqua = exports.teal = void 0;
exports.errorBG = exports.infoBG = exports.successBG = exports.warningBG = exports.steelblueBG = exports.maroonBG = exports.pinkBG = exports.purpleBG = exports.fuchsiaBG = exports.darkvioletBG = exports.turquoiseBG = exports.darkturquoiseBG = exports.tomatoBG = exports.darkredBG = exports.darkmagentaBG = exports.darkorangeBG = exports.darkslategrayBG = exports.darkolivegreenBG = exports.darkgreenBG = exports.darkgrayBG = exports.darkgoldenrodBG = exports.darkcyanBG = exports.darkblueBG = exports.goldenrodBG = exports.goldBG = exports.crimsonBG = exports.coralBG = exports.chocolateBG = exports.cadetblueBG = exports.brownBG = exports.bluevioletBG = exports.bisqueBG = exports.aquaBG = exports.tealBG = exports.yellowBG = exports.whiteBG = void 0;
const ansi_1 = require("./ansi");
const basics_1 = require("./basics");
const color_constants_1 = __importDefault(require("./color-constants"));
const funcs_1 = require("./funcs");
/**
 * print black text to the console
 * @param text
 * @example console.log(black('see my color'));
 * @returns
 */
const black = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.black, text);
exports.black = black;
/**
 * print red text to the console
 * @param text
 * @example console.log(red('see my color'));
 * @returns
 */
const red = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.red, text);
exports.red = red;
/**
 * print blue text to the console
 * @param text
 * @example console.log(blue('see my color'));
 * @returns
 */
const blue = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.blue, text);
exports.blue = blue;
/**
 * print white text to the console
 * @param text
 * @example console.log(white('see my color'));
 * @returns
 */
const white = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.white, text);
exports.white = white;
/**
 * print magneta text to the console
 * @param text
 * @example console.log(magneta('see my color'));
 * @returns
 */
const magenta = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.magenta, text);
exports.magenta = magenta;
/**
 * print yellow text to the console
 * @param text
 * @example console.log(yellow('see my color'));
 * @returns
 */
const yellow = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.yellow, text);
exports.yellow = yellow;
/**
 * print cyan text to the console
 * @param text
 * @example console.log(cyan('see my color'));
 * @returns
 */
const cyan = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.cyan, text);
exports.cyan = cyan;
/**
 * print green text to the console
 * @param text
 * @example console.log(green('see my color'));
 * @returns
 */
const green = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.green, text);
exports.green = green;
/**
 * print gray text to the console
 * @param text
 * @example console.log(gray('see my color'));
 * @returns
 */
const gray = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.fg.gray, text);
exports.gray = gray;
/**
 * print teal text to the console
 * @param text
 * @example console.log(teal('see my color'));
 * @returns
 */
const teal = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(0, 128, 128), text);
};
exports.teal = teal;
/**
 * print aqua text to the console
 * @param text
 * @example console.log(aqua('see my color'));
 * @returns
 */
const aqua = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(0, 255, 255), text);
};
exports.aqua = aqua;
/**
 * print bisque text to the console
 * @param text
 * @example console.log(bisque('see my color'));
 * @returns
 */
const bisque = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(255, 228, 196), text);
};
exports.bisque = bisque;
/**
 * print blueviolet text to the console
 * @param text
 * @example console.log(blueviolet('see my color'));
 * @returns
 */
const blueviolet = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(138, 43, 226), text);
};
exports.blueviolet = blueviolet;
/**
 * print brown text to the console
 * @param text
 * @example console.log(brown('see my color'));
 * @returns
 */
const brown = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(165, 42, 42), text);
};
exports.brown = brown;
/**
 * print cadetblue text to the console
 * @param text
 * @example console.log(cadetblue('see my color'));
 * @returns
 */
const cadetblue = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(95, 158, 160), text);
};
exports.cadetblue = cadetblue;
/**
 * print chocolate text to the console
 * @param text
 * @example console.log(chocolate('see my color'));
 * @returns
 */
const chocolate = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(210, 105, 30), text);
};
exports.chocolate = chocolate;
/**
 * print coral text to the console
 * @param text
 * @example console.log(coral('see my color'));
 * @returns
 */
const coral = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(255, 127, 80), text);
};
exports.coral = coral;
/**
 * print crimson text to the console
 * @param text
 * @example console.log(crimson('see my color'));
 * @returns
 */
const crimson = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(220, 20, 60), text);
};
exports.crimson = crimson;
/**
 * print gold text to the console
 * @param text
 * @example console.log(gold('see my color'));
 * @returns
 */
const gold = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(243, 209, 19), text);
};
exports.gold = gold;
/**
 * print goldenrod text to the console
 * @param text
 * @example console.log(goldenrod('see my color'));
 * @returns
 */
const goldenrod = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(218, 165, 32), text);
};
exports.goldenrod = goldenrod;
/**
 * print darkblue text to the console
 * @param text
 * @example console.log(darkblue('see my color'));
 * @returns
 */
const darkblue = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(0, 0, 139), text);
};
exports.darkblue = darkblue;
/**
 * print darkcyan text to the console
 * @param text
 * @example console.log(darkcyan('see my color'));
 * @returns
 */
const darkcyan = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(0, 139, 139), text);
};
exports.darkcyan = darkcyan;
const darkgoldenrod = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(184, 134, 11), text);
};
exports.darkgoldenrod = darkgoldenrod;
const darkgray = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(169, 169, 169), text);
};
exports.darkgray = darkgray;
const darkgreen = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(0, 100, 0), text);
};
exports.darkgreen = darkgreen;
const darkolivegreen = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(85, 107, 47), text);
};
exports.darkolivegreen = darkolivegreen;
const darkslategray = (text) => {
    return `${(0, ansi_1.fgColorRGB)(47, 79, 79)}${text}${(0, basics_1.reset)()}`;
};
exports.darkslategray = darkslategray;
const darkorange = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(255, 140, 0), text);
};
exports.darkorange = darkorange;
const darkmagenta = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(139, 0, 139), text);
};
exports.darkmagenta = darkmagenta;
const darkred = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(139, 0, 0), text);
};
exports.darkred = darkred;
const darkturquoise = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(0, 206, 209), text);
};
exports.darkturquoise = darkturquoise;
const turquoise = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(64, 224, 288), text);
};
exports.turquoise = turquoise;
const darkviolet = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(140, 0, 211), text);
};
exports.darkviolet = darkviolet;
const fuchsia = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(255, 0, 255), text);
};
exports.fuchsia = fuchsia;
const purple = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(128, 0, 128), text);
};
exports.purple = purple;
const pink = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(255, 192, 203), text);
};
exports.pink = pink;
const maroon = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(128, 0, 0), text);
};
exports.maroon = maroon;
const tomato = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(255, 99, 71), text);
};
exports.tomato = tomato;
const steelblue = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(70, 130, 180), text);
};
exports.steelblue = steelblue;
const warning = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(240, 214, 97), text);
};
exports.warning = warning;
const success = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(72, 221, 104), text);
};
exports.success = success;
const error = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(230, 67, 67), text);
};
exports.error = error;
const info = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.fgColorRGB)(67, 184, 230), text);
};
exports.info = info;
const blackBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.black, text);
exports.blackBG = blackBG;
const redBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.red, text);
exports.redBG = redBG;
const blueBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.blue, text);
exports.blueBG = blueBG;
const whiteBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.white, text);
exports.whiteBG = whiteBG;
const magentaBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.magenta, text);
exports.magentaBG = magentaBG;
const yellowBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.yellow, text);
exports.yellowBG = yellowBG;
const cyanBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.cyan, text);
exports.cyanBG = cyanBG;
const greenBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.green, text);
exports.greenBG = greenBG;
const grayBG = (text) => (0, funcs_1.textCodeHelper)(color_constants_1.default.bg.gray, text);
exports.grayBG = grayBG;
/**
 * print teal text background to the console
 * @param text
 * @example console.log(tealBG('see my background color'));
 * @returns
 */
const tealBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(0, 128, 128), text);
};
exports.tealBG = tealBG;
/**
 * print aqua text background to the console
 * @param text
 * @example console.log(aquaBG('see my background color'));
 * @returns
 */
const aquaBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(0, 255, 255), text);
};
exports.aquaBG = aquaBG;
/**
 * print bisque text background to the console
 * @param text
 * @example console.log(bisqueBG('see my background color'));
 * @returns
 */
const bisqueBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(255, 228, 196), text);
};
exports.bisqueBG = bisqueBG;
/**
 * print blueviolet text background to the console
 * @param text
 * @example console.log(bluevioletBG('see my background color'));
 * @returns
 */
const bluevioletBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(138, 43, 226), text);
};
exports.bluevioletBG = bluevioletBG;
/**
 * print brown text background to the console
 * @param text
 * @example console.log(brownBG('see my background color'));
 * @returns
 */
const brownBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(165, 42, 42), text);
};
exports.brownBG = brownBG;
/**
 * print cadetblue text background to the console
 * @param text
 * @example console.log(cadetblueBG('see my background color'));
 * @returns
 */
const cadetblueBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(95, 158, 160), text);
};
exports.cadetblueBG = cadetblueBG;
/**
 * print chocolate text background to the console
 * @param text
 * @example console.log(chocolateBG('see my background color'));
 * @returns
 */
const chocolateBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(210, 105, 30), text);
};
exports.chocolateBG = chocolateBG;
/**
 * print coral text background to the console
 * @param text
 * @example console.log(coralBG('see my background color'));
 * @returns
 */
const coralBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(255, 127, 80), text);
};
exports.coralBG = coralBG;
/**
 * print crimson text background to the console
 * @param text
 * @example console.log(crimsonBG('see my background color'));
 * @returns
 */
const crimsonBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(220, 20, 60), text);
};
exports.crimsonBG = crimsonBG;
/**
 * print gold text background to the console
 * @param text
 * @example console.log(goldBG('see my background color'));
 * @returns
 */
const goldBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(243, 209, 19), text);
};
exports.goldBG = goldBG;
/**
 * print goldenrod text background to the console
 * @param text
 * @example console.log(goldenrodBG('see my background color'));
 * @returns
 */
const goldenrodBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(218, 165, 32), text);
};
exports.goldenrodBG = goldenrodBG;
/**
 * print darkblue text background to the console
 * @param text
 * @example console.log(darkblueBG('see my background color'));
 * @returns
 */
const darkblueBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(0, 0, 139), text);
};
exports.darkblueBG = darkblueBG;
/**
 * print darkcyan text background to the console
 * @param text
 * @example console.log(darkcyanBG('see my background color'));
 * @returns
 */
const darkcyanBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(0, 139, 139), text);
};
exports.darkcyanBG = darkcyanBG;
const darkgoldenrodBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(184, 134, 11), text);
};
exports.darkgoldenrodBG = darkgoldenrodBG;
const darkgrayBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(169, 169, 169), text);
};
exports.darkgrayBG = darkgrayBG;
const darkgreenBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(0, 100, 0), text);
};
exports.darkgreenBG = darkgreenBG;
const darkolivegreenBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(85, 107, 47), text);
};
exports.darkolivegreenBG = darkolivegreenBG;
const darkslategrayBG = (text) => {
    return `${(0, ansi_1.bgColorRGB)(47, 79, 79)}${text}${(0, basics_1.reset)()}`;
};
exports.darkslategrayBG = darkslategrayBG;
const darkorangeBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(255, 140, 0), text);
};
exports.darkorangeBG = darkorangeBG;
const darkmagentaBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(139, 0, 139), text);
};
exports.darkmagentaBG = darkmagentaBG;
const darkredBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(139, 0, 0), text);
};
exports.darkredBG = darkredBG;
const darkturquoiseBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(0, 206, 209), text);
};
exports.darkturquoiseBG = darkturquoiseBG;
const turquoiseBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(64, 224, 288), text);
};
exports.turquoiseBG = turquoiseBG;
const darkvioletBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(140, 0, 211), text);
};
exports.darkvioletBG = darkvioletBG;
const fuchsiaBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(255, 0, 255), text);
};
exports.fuchsiaBG = fuchsiaBG;
const purpleBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(128, 0, 128), text);
};
exports.purpleBG = purpleBG;
const pinkBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(255, 192, 203), text);
};
exports.pinkBG = pinkBG;
const maroonBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(128, 0, 0), text);
};
exports.maroonBG = maroonBG;
const tomatoBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(255, 99, 71), text);
};
exports.tomatoBG = tomatoBG;
const steelblueBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(70, 130, 180), text);
};
exports.steelblueBG = steelblueBG;
const warningBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(240, 214, 97), text);
};
exports.warningBG = warningBG;
const successBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(72, 221, 104), text);
};
exports.successBG = successBG;
const errorBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(230, 67, 67), text);
};
exports.errorBG = errorBG;
const infoBG = (text) => {
    return (0, funcs_1.textCodeHelper)((0, ansi_1.bgColorRGB)(67, 184, 230), text);
};
exports.infoBG = infoBG;
//# sourceMappingURL=defined-colors.js.map