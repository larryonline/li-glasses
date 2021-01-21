
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