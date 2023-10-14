import { describe, expect, test } from '@jest/globals';
import ansiES from '../src/color-constants';
import { textCodeHelper, isEigjtBit, isNumberInRange, parse3hex, parse6hex, parseHex } from '../src/funcs';

describe('colored text func', () => {
    test("textCodeHelper(ansiES.fg.red, 'Red Text') equals \\x1b[31mRed Text\x1b[0m", () => {
        expect(textCodeHelper(ansiES.fg.red, 'Red Text')).toBe('\x1b[31mRed Text\x1b[0m')
    })
})

describe('Number Range', () => {
    test('92 in the range', () => {
        expect(isNumberInRange(92)).toBeTruthy()
    });

    test('40 not in the range', () => {
        expect(isNumberInRange(40)).toBeFalsy()
    });

    test('102 is in the range', () => {
        expect(isNumberInRange(102, 'bg')).toBeTruthy()
    });

    test('402 not is in the range', () => {
        expect(isNumberInRange(402, 'bg')).not.toBeTruthy()
    });

    test('108 not is in the range', () => {
        expect(isNumberInRange(108, 'bg')).toBeFalsy()
    });
})

describe('RGB Color code', () => {
    test('is eight bit number', () => {
        expect(isEigjtBit(0)).toBeTruthy();
    });

    test('is eight bit number', () => {
        expect(isEigjtBit(255)).toBeTruthy();
    });

    test('is eight bit number', () => {
        expect(isEigjtBit(56)).toBeTruthy();
    });

    test('is eight bit number', () => {
        expect(isEigjtBit(256)).toBeFalsy();
    });

    test('is eight bit number', () => {
        expect(isEigjtBit(-25)).toBeFalsy();
    });
})

describe ('parse3hex', () => {
    test('parse3hex(fff) returns array of length equals 3', ()=> {
        expect(parse3hex('fff')).toHaveLength(3)
    });

    test('parse3hex(fff) returns the right values', ()=> {
        expect(parse3hex('fff')).toStrictEqual([255, 255, 255])
    });

    test('parse3hex(010) returns array of length equals 3', ()=> {
        expect(parse3hex('010')).toHaveLength(3)
    });

    test('parse3hex(010) returns the right values', ()=> {
        expect(parse3hex('010')).toStrictEqual([0, 17, 0])
    });
})

describe ('parse6hex', () => {
    test('parse6hex(ffffff) returns array of length equals 3', ()=> {
        expect(parse6hex('ffffff')).toHaveLength(3)
    });

    test('parse6hex(ffffff) returns the right values', ()=> {
        expect(parse6hex('ffffff')).toStrictEqual([255, 255, 255])
    });

    test('parse6hex(001000) returns array of length equals 3', ()=> {
        expect(parse6hex('001000')).toHaveLength(3)
    });

    test('parse6hex(001000) returns the right values', ()=> {
        expect(parse6hex('001000')).toStrictEqual([0, 16, 0])
    });
})

describe ('parseHex', () => {
    // test('parseHex(3333) returns array of length equals 0', ()=> {
    //     expect(parseHex('3333')).toHaveLength(0)
    // });

    test('parseHex(333) returns array of length equals 3', ()=> {
        expect(parseHex('333')).toHaveLength(3)
    });

    test('parseHex(333) returns the right values', ()=> {
        expect(parseHex('333')).toStrictEqual([51, 51, 51])
    });
    

    test('parseHex(0173af) returns array of length equals 3', ()=> {
        expect(parseHex('0173af')).toHaveLength(3)
    });

    test('parseHex(0173af) returns the right values', ()=> {
        expect(parseHex('0173af')).toStrictEqual([1, 115, 175])
    });
    
})