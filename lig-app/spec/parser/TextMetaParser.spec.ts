import {describe, it} from 'mocha'
import {expect} from 'chai'
import { Meta, MetaName, MetaType } from "../../src/data"
import { TextMetaParser } from "../../src/parser"


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

})