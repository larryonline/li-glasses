import {describe, it} from 'mocha'
import {expect} from 'chai'
import { Meta, MetaName, MetaType, SchemeSpec } from "../../../src/scheme/define"
import { DateMetaParser } from "../../../src/scheme/parser"
import { ERR_INVALID_SPEC } from '../../../src/error'


describe(`DateMetaParser tests`, () => {
    it(`#resolve(spec)`, () => {

        const META_NAME: MetaName = "datetime"
        const META_DATA: Meta = {type: MetaType.DATETIME, spec: "MM-dd HH:mm:ss.SSS"};
        const MOCK_SCHEME_SPEC: SchemeSpec = `<datetime><pid><tid><level><tag>:<content>`;

        let parser:DateMetaParser = new DateMetaParser(META_NAME, META_DATA);
        let result = parser.resolve(MOCK_SCHEME_SPEC);

        expect(result, `${result} should not equals ${MOCK_SCHEME_SPEC}`).not.equals(MOCK_SCHEME_SPEC);
    })

    it(`#resolve(spec) with no spec will raise Error`, () => {
        const MOCK_META: MetaName = "datetime";
        const MOCK_DATA: Meta = {
            type: MetaType.DATETIME
        }
        const SCHEME_SPEC: SchemeSpec = `<datetime><pid><tid><level><tag>:<content>`;
        let parser: DateMetaParser = new DateMetaParser(MOCK_META, MOCK_DATA);
        
        try {
            let result = parser.resolve(SCHEME_SPEC);
            expect(false, 'should not goes here').is.true;
        }catch(err) {
            expect(err.code).equals(ERR_INVALID_SPEC);
        }
    })

    it(`#parse(raw)`, () => {
        const META_NAME = "datetime";
        const META_DATA: Meta = {type: MetaType.DATETIME, spec: "MM-dd HH:mm:ss.SSS"};

        const parser: DateMetaParser = new DateMetaParser(META_NAME, META_DATA);

        const GOOD_CASE = [
            "12-01 13:22:50.993",
            "08-09 19:59:36.004"
        ]

        for (let index in GOOD_CASE) {
            let test_case = GOOD_CASE[index];
            expect(parser.parse(test_case), `raw: ${test_case} should be a Date`).to.be.a('Date');
        }

        const BAD_CASE = [
            "34-32 12:2:4.444"
        ]
        for (let index in BAD_CASE) {
            let test_case = BAD_CASE[index];
            let result = parser.parse(test_case);
            expect(result, `raw: ${test_case} should not be a Date`).not.be.a('Date')
        }


    })

})