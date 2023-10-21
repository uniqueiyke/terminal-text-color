"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_constants_1 = __importDefault(require("./color-constants"));
const funcs_1 = require("./funcs");
/**
 * clear settings and reset to default
 * @returns
 */
const reset = () => color_constants_1.default.format.reset;
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
const ttcModifiers = {
    reset, dim, italic, bold, underline,
    reverse, hidden, strikethrough, blink,
};
exports.default = ttcModifiers;
//# sourceMappingURL=basics.js.map