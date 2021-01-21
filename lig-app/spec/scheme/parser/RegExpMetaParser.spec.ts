import {describe, it} from 'mocha';
import {expect} from 'chai'

import { RegExpMetaParser } from '../../../src/scheme/parser';
import { Meta, MetaName, MetaType, SchemeSpec } from '../../../src/scheme/define';
import { ERR_INVALID_SPEC } from '../../../src/error';



describe(`RegExpMetaParser tests`, () => {
    it(`#resolve(spec)`, () => {
        const MOCK_META: MetaName = "tag";
        const MOCK_DATA: Meta = {
            type: MetaType.STRING,
            spec: `[^:\\n]+(?=\\s*:\\s?)`
        }
        const SCHEME_SPEC: SchemeSpec = `<datetime><pid><tid><level><tag>:<content>`;

        let parser = new RegExpMetaParser(MOCK_META, MOCK_DATA);
        let result = parser.resolve(SCHEME_SPEC);
        expect(result, `${result} should not equals ${SCHEME_SPEC}`).not.equals(SCHEME_SPEC);

        const MOCK_META_NOT_EXIST = "taaaag";
        parser = new RegExpMetaParser(MOCK_META_NOT_EXIST, MOCK_DATA);
        result = parser.resolve(SCHEME_SPEC);
        expect(result, `${result} should equals ${SCHEME_SPEC}`).equals(SCHEME_SPEC);
        
    })

    it(`#resolve(spec) with no spec will raise Error`, () => {
        const MOCK_META: MetaName = "tag";
        const MOCK_DATA: Meta = {
            type: MetaType.STRING
        }
        const SCHEME_SPEC: SchemeSpec = `<datetime><pid><tid><level><tag>:<content>`;
        let parser: RegExpMetaParser = new RegExpMetaParser(MOCK_META, MOCK_DATA);
        
        try {
            let result = parser.resolve(SCHEME_SPEC);
            expect(false, 'should not goes here').is.true;
        }catch(err) {
            expect(err.code).equals(ERR_INVALID_SPEC);
        }
    })
})