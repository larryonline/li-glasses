import {describe, it} from 'mocha'
import {expect} from 'chai'
import { Meta, MetaName, MetaType, SchemeSpec } from "../../src/data"
import { DateMetaParser } from "../../src/parser"
import { ERR_INVALID_SPEC } from '../../src/error'


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

})