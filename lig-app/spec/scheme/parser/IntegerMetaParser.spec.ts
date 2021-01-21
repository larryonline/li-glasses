import {describe, it} from 'mocha'
import {expect} from 'chai'
import { Meta, MetaName, MetaType } from "../../../src/scheme/define"
import { IntegerMetaParser } from "../../../src/scheme/parser"


describe(`IntegerMetaParser tests`, () => {
    it(`#resolve(spec)`, () => {

        const META_NAME: MetaName = "pid"
        const META_DATA: Meta = {
            type: MetaType.INT
        }
        const MOCK_SCHEME_SPEC = `<datetime><pid><tid><level><tag>:<content>`;

        let parser:IntegerMetaParser = new IntegerMetaParser(META_NAME, META_DATA);
        let result = parser.resolve(MOCK_SCHEME_SPEC);

        expect(result, `${result} should not equals ${MOCK_SCHEME_SPEC}`).not.equals(MOCK_SCHEME_SPEC);

    })

    it(`#parse(raw)`, () => {
        const META_NAME = "pid";
        const META_DATA: Meta = {type: MetaType.INT};
        const parser: IntegerMetaParser = new IntegerMetaParser(META_NAME, META_DATA);

        const GOOD_CASE:Array<string> = [
            "1","01","1234", "0xff00", 
        ]

        for (let index in GOOD_CASE) {
            let test_case = GOOD_CASE[index];
            let result = parser.parse(test_case);
            expect(result, `parse("${test_case}") should be a integer`).to.be.a('number');
        }

        const BAD_CASE:Array<string> = [
            "a", "a14", "1444a", "-", ".3-+", "<22>", "123.4", "0o888", "0b3332", "0o33", "0b10001"
        ]

        for (let index in BAD_CASE) {
            let test_case = BAD_CASE[index];
            let result = parser.parse(test_case);
            expect(result, `parse("${test_case}") should not be a integer[${result}]`).not.to.be.a('number');
        }
    })

})