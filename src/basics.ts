import ansiES from "./color-constants";
import { textCodeHelper } from "./funcs";

/**
 * clear settings and reset to default
 * @returns 
 */
const reset = () => ansiES.format.reset;

/**
 * Make text bold. This may not work
 * @param text 
 * @example console.log(bold('A bold text'))
 * @returns 
 */
const bold = (text?: string) => {
    if (text) {
        return textCodeHelper(ansiES.format.bold, text);
    }
    return ansiES.format.bold;
};

/**
 * Make text dim ( decreased text intensity). This may not work
 * @param text 
 * @example console.log(dim('A dim text'))
 * @returns 
 */
const dim = (text?: string) => {
    if (text) {
        return textCodeHelper(ansiES.format.dim, text);
    }
    return ansiES.format.dim;
};

/**
 * Make text italic. This may not work
 * @param text 
 * @example console.log(italic('An italic text')) 
 * @returns 
 */
const italic = (text?: string) => {
    if (text) {
        return textCodeHelper(ansiES.format.italic, text);
    }
    return ansiES.format.italic;
};

/**
 * underline a text
 * @param text 
 * @example console.log(underline('An underlined text'))
 * @returns 
 */
const underline = (text?: string) => {
    if (text) {
        return textCodeHelper(ansiES.format.underline, text);
    }
    return ansiES.format.underline;
};

/**
 * Make text blink. This may not work
 * @param text 
 * @example console.log(blink('A blinking text'))
 * @returns 
 */
const blink = (text?: string) => {
    if (text) {
        return textCodeHelper(ansiES.format.blink, text);
    }
    return ansiES.format.blink;
}

/**
 * hide text. This may not work
 * @param text 
 * @example console.log(hidden('A hidden text'))
 * @returns 
 */
const hidden = (text?: string) => {
    if (text) {
        textCodeHelper(ansiES.format.hidden, text);
    }
    return ansiES.format.hidden;
}

/**
 * Swap foreground and background colors
 * @param text 
 * @example console.log(reverse('A reverse text'))
 * @returns 
 */
const reverse = (text?: string) => {
    if (text) {
        return textCodeHelper(ansiES.format.reverse, text);
    }
    return ansiES.format.reverse;
}

/**
 * strikethrough a text. This may not work
 * @param text 
 * @example console.log(strikethrough('A strikethrough text'))
 * @returns 
 */
const strikethrough = (text?: string) => {
    if (text) {
        return textCodeHelper(ansiES.format.strikethrough, text);
    }
    return ansiES.format.strikethrough;
}
const ttcModifiers = {
    reset, dim, italic, bold, underline,
    reverse, hidden, strikethrough, blink,
};
export default ttcModifiers