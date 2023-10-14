"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHex = exports.parse3hex = exports.parse6hex = exports.logError = exports.isEigjtBit = exports.isNumberInRange = exports.textCodeHelper = void 0;
const color_constants_1 = __importDefault(require("./color-constants"));
const textCodeHelper = (colorCode, text, reset = true) => {
    return `${colorCode}${text}${reset ? color_constants_1.default.format.reset : ''}`;
};
exports.textCodeHelper = textCodeHelper;
const isNumberInRange = (n, flag = 'fg') => {
    flag = flag !== 'bg' ? 'fg' : 'bg';
    const regex = flag === 'bg' ? /^(4|(10))[0-7]$/ : /^(3|9)[0-7]$/;
    return regex.test(n.toString());
};
exports.isNumberInRange = isNumberInRange;
const isEigjtBit = (n) => {
    return (n >= 0 && n <= 255);
};
exports.isEigjtBit = isEigjtBit;
const logError = (errTxt) => console.log(`\x1b[38;2;${230};${67};${67}mError: ${errTxt}\x1b[0`);
exports.logError = logError;
const parse6hex = (hex) => {
    return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
};
exports.parse6hex = parse6hex;
const parse3hex = (hex) => {
    const i = hex.slice(0, 1);
    const j = hex.slice(1, 2);
    const k = hex.slice(2, 3);
    return [parseInt(`${i}${i}`, 16), parseInt(`${j}${j}`, 16), parseInt(`${k}${k}`, 16)];
};
exports.parse3hex = parse3hex;
const parseHex = (hex) => {
    const hexDigitsRegex = /^[0123456789ABCDEFabcdef]{3,6}$/;
    if (hexDigitsRegex.test(hex)) {
        if (hex.length === 3) {
            return (0, exports.parse3hex)(hex);
        }
        else if (hex.length === 6) {
            return (0, exports.parse6hex)(hex);
        }
    }
    (0, exports.logError)(`(${hex}) is a wrong parameter value. The argument should be a three digits or six digits hexadecimal value. Examples: e24, 435, 234564, facd34`);
    return [];
};
exports.parseHex = parseHex;
//# sourceMappingURL=funcs.js.map