import ansiES from "./color-constants";

export const textCodeHelper = (colorCode: string, text: string, reset: boolean = true) => {
    return `${colorCode}${text}${reset ? ansiES.format.reset : ''}`;
}

export const isNumberInRange = (n: number, flag: string = 'fg') => {
    flag = flag !== 'bg' ? 'fg' : 'bg';
    const regex = flag === 'bg' ? /^(4|(10))[0-7]$/ : /^(3|9)[0-7]$/;
    return regex.test(n.toString());
}

export const isEigjtBit = (n: number) => {
    return (n >= 0 && n <= 255);
}

export const logError = (errTxt: string) => console.log(`\x1b[38;2;${230};${67};${67}mError: ${errTxt}\x1b[0`);

export const parse6hex = (hex: string) => {
    return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
}

export const parse3hex = (hex: string) => {
    const i = hex.slice(0, 1)
    const j = hex.slice(1, 2)
    const k = hex.slice(2, 3)
    return [parseInt(`${i}${i}`, 16), parseInt(`${j}${j}`, 16), parseInt(`${k}${k}`, 16)];
}

export const parseHex = (hex: string) => {
    const hexDigitsRegex = /^[0123456789ABCDEFabcdef]{3,6}$/
    if (hexDigitsRegex.test(hex)) {
        if (hex.length === 3) {
            return parse3hex(hex)
        } else if (hex.length === 6) {
            return parse6hex(hex)
        }
    }
    logError(`(${hex}) is a wrong parameter value. The argument should be a three digits or six digits hexadecimal value. Examples: e24, 435, 234564, facd34`);
    return [];
}