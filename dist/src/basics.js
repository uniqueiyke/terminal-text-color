"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blink = exports.strikethrough = exports.hidden = exports.reverse = exports.underline = exports.bold = exports.italic = exports.dim = exports.reset = void 0;
const color_constants_1 = __importDefault(require("./color-constants"));
const funcs_1 = require("./funcs");
/**
 * clear settings and reset to default
 * @returns
 */
const reset = () => color_constants_1.default.format.reset;
exports.reset = reset;
/**
 * Make text bold. This may not work
 * @param text
 * @example console.log(bold('A bold text'))
 * @returns
 */
const bold = (text) => {
    if (text) {
        return (0, funcs_1.textCodeHelper)(color_constants_1.default.format.bold, text);
    }
    return color_constants_1.default.format.bold;
};
exports.bold = bold;
/**
 * Make text dim ( decreased text intensity). This may not work
 * @param text
 * @example console.log(dim('A dim text'))
 * @returns
 */
const dim = (text) => {
    if (text) {
        return (0, funcs_1.textCodeHelper)(color_constants_1.default.format.dim, text);
    }
    return color_constants_1.default.format.dim;
};
exports.dim = dim;
/**
 * Make text italic. This may not work
 * @param text
 * @example console.log(italic('An italic text'))
 * @returns
 */
const italic = (text) => {
    if (text) {
        return (0, funcs_1.textCodeHelper)(color_constants_1.default.format.italic, text);
    }
    return color_constants_1.default.format.italic;
};
exports.italic = italic;
/**
 * underline a text
 * @param text
 * @example console.log(underline('An underlined text'))
 * @returns
 */
const underline = (text) => {
    if (text) {
        return (0, funcs_1.textCodeHelper)(color_constants_1.default.format.underline, text);
    }
    return color_constants_1.default.format.underline;
};
exports.underline = underline;
/**
 * Make text blink. This may not work
 * @param text
 * @example console.log(blink('A blinking text'))
 * @returns
 */
const blink = (text) => {
    if (text) {
        return (0, funcs_1.textCodeHelper)(color_constants_1.default.format.blink, text);
    }
    return color_constants_1.default.format.blink;
};
exports.blink = blink;
/**
 * hide text. This may not work
 * @param text
 * @example console.log(hidden('A hidden text'))
 * @returns
 */
const hidden = (text) => {
    if (text) {
        (0, funcs_1.textCodeHelper)(color_constants_1.default.format.hidden, text);
    }
    return color_constants_1.default.format.hidden;
};
exports.hidden = hidden;
/**
 * Swap foreground and background colors
 * @param text
 * @example console.log(reverse('A reverse text'))
 * @returns
 */
const reverse = (text) => {
    if (text) {
        return (0, funcs_1.textCodeHelper)(color_constants_1.default.format.reverse, text);
    }
    return color_constants_1.default.format.reverse;
};
exports.reverse = reverse;
/**
 * strikethrough a text. This may not work
 * @param text
 * @example console.log(strikethrough('A strikethrough text'))
 * @returns
 */
const strikethrough = (text) => {
    if (text) {
        return (0, funcs_1.textCodeHelper)(color_constants_1.default.format.strikethrough, text);
    }
    return color_constants_1.default.format.strikethrough;
};
exports.strikethrough = strikethrough;
//# sourceMappingURL=basics.js.map