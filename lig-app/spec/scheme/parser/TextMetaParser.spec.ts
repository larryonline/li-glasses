import {describe, it} from 'mocha'
import {expect} from 'chai'
import { Meta, MetaName, MetaType } from "../../../src/scheme/define"
import { TextMetaParser } from "../../../src/scheme/parser"


describe(`TextMetaParser tests`, () => {
    it(`#resolve(spec)`, () => {

        const META_NAME: MetaName = "content"
        const META_DATA: Meta = {
            type: MetaType.TEXT
        }
        const MOCK_SCHEME_SPEC = `<datetime><pid><tid><level><tag>:<content>`;

        let parser:TextMetaParser = new TextMetaParser(META_NAME, META_DATA);
        let result = parser.resolve(MOCK_SCHEME_SPEC);

        expect(result, `${result} should not equals ${MOCK_SCHEME_SPEC}`).not.equals(MOCK_SCHEME_SPEC);

    })

    it(`#parse(raw)`, () => {
        const META_NAME = "content";
        const META_DATA: Meta = {type: MetaType.TEXT}
        const parser: TextMetaParser = new TextMetaParser(META_NAME, META_DATA);


        const GOOD_CASE = [
            'this is a line without line break',
            'asdf-08234ZCV.@!#(&*($_()%+^+)*(&^|~`><?/.,m'
        ]

        for (let index in GOOD_CASE) {
            let test_case: string = GOOD_CASE[index];
            let result: string = parser.parse(test_case);
            expect(result, `parse("${test_case}") should not be null`).not.null;
            expect(result, `parse("${test_case}") should equals: "${result}"`).equals(test_case);
        }

        const BAD_CASE = [
            `this is a line 
            this is another line`,
            `asdf
            -08234ZCV
            .@!#(&*($_()%+^+)*
            (&^|~\`><?/.,m`
        ]

        for (let index in BAD_CASE) {
            let test_case: string = BAD_CASE[index];
            let result: string = parser.parse(test_case);
            expect(result, `parse("${test_case}") should be null`).is.null;
        }
    })

})