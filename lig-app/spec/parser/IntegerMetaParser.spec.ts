import {describe, it} from 'mocha'
import {expect} from 'chai'
import { Meta, MetaName, MetaType } from "../../src/data"
import { IntegerMetaParser } from "../../src/parser"


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

})