
import {describe, it} from 'mocha'
import {expect} from 'chai'
import {byteLength, toByteArray as encode, fromByteArray as decode} from 'base64-js'

describe(`RegExp tests`, () => {

    it(`.toString()`, () => {
        let GOOD_CASE: {[name: string]: RegExp} = {
            '\/.\/': /./,
            '/\\w/': /\w/,
            '/ /':/ /,
            '/\\s/': /\s/
        }

        for (let name in GOOD_CASE) {
            let regx = GOOD_CASE[name];

            let rawRegx = regx.toString();
            let rawText = name;

            // console.log(`regx: ${rawRegx}, text: ${rawText}`);
            expect(rawRegx).is.equal(rawText);
        }
    })
})

describe(`hex from int`, () => {
    it(`hex from int`, () => {
        let value = -1725954231
        let hex = (value > 0? value : (~value) + 1).toString(16);
        let bin = (value > 0? value : (~value) + 1).toString(2);
        console.log(`value: ${value},  hex: 0x${hex}, binary: ${bin}`);

    })
})