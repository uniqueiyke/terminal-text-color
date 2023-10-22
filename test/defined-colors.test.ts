import { describe, expect, test } from '@jest/globals';
import { aqua, aquaBG } from '../src/defined-colors';

describe('', () => {
    test("aqua('aqua color text') returns \\x1b[38;2;0;255;255maqua color text\x1b[0m", () => {
        expect(aqua('aqua color text')).toBe('\x1b[38;2;0;255;255maqua color text\x1b[0m')
    });

    test("aqua('aqua color text') returns \\x1b[38;2;0;255;255maqua color text\x1b[0m", () => {
        expect(aquaBG('aqua color text')).toBe('\x1b[48;2;0;255;255maqua color text\x1b[0m')
    })
})