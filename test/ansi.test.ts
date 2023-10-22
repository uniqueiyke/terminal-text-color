import { describe, expect, test } from '@jest/globals';
import { bgColor, bgColorHex, bgColorRGB, fgColor, fgColorHex, fgColorRGB }  from '../src/ansi';

describe('Foreground Color', () => {
    test('fgColor(30)) returns \\x1b[38;5;30m', () => {
        expect(fgColor(30)).toBe(`\x1b[38;5;30m`)
    });

    test('fgColorRGB(27, 216, 184) returns \\x1b[38;2;27;216;184m', () => {
        expect(fgColorRGB(27, 216, 184)).toBe('\x1b[38;2;27;216;184m')
    });

    test('fgColorRGB(27, 232, 184) returns \\x1b[38;2;27;232;184m', () => {
        expect(fgColorRGB(27, 232, 184)).toBe('\x1b[38;2;27;232;184m')
    });

    test('fgColorRGB(27, 242, 184) does not return \\x1b[38;2;27;232;184m', () => {
        expect(fgColorRGB(27, 242, 184)).not.toBe('\x1b[38;2;27;232;184m')
    });

    test('(fgColorHex("1bf2b8") equals \\x1b[38;2;27;242;184m', () => {
        expect(fgColorHex('1bf2b8')).toBe('\x1b[38;2;27;242;184m')
    });

    test('fgColorHex("1bf") equals \\x1b[38;2;17;187;255m', () => {
        expect(fgColorHex('1bf')).toBe('\x1b[38;2;17;187;255m')
    });
})

describe("Background Color", () => {
    test('bgColor(46) equals \\x1b[48;5;46m', () => {
        expect(bgColor(46)).toBe(`\x1b[48;5;46m`)
    });

    test('bgColorRGB(27, 216, 184) equals \\x1b[48;2;27;216;184m', () => {
        expect(bgColorRGB(27, 216, 184)).toBe('\x1b[48;2;27;216;184m')
    });

    test('bgColorRGB(28, 216, 184) not equal \\x1b[48;2;27;216;184m', () => {
        expect(bgColorRGB(28, 216, 184)).not.toBe('\x1b[48;2;27;216;184m')
    });

    test('bgColorHex("1CD8B8") equals \\x1b[48;2;28;216;184m', () => {
        expect(bgColorHex('1CD8B8')).toBe('\x1b[48;2;28;216;184m')
    });

    test('bgColorHex("4CD") equqls \\x1b[48;2;68;204;221m', () => {
        expect(bgColorHex('4CD')).toBe('\x1b[48;2;68;204;221m')
    });
})