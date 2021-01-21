import {describe, it} from 'mocha'
import {expect} from 'chai'
import {Scheme} from '../src/scheme'
import { MOCK_LOG, MOCK_SCHEME_MODEL } from './mock'

describe(`Scheme tests`, () => {
    it(`#test`, () => {


        let scheme: Scheme = new Scheme(MOCK_SCHEME_MODEL);


        for (let index in MOCK_LOG) {
            let log = MOCK_LOG[index];
            let result = scheme.test(log)
            
            expect(result, `scheme should handle log: 
----------------------------------------------------------------
${log}`).is.true;
        }
    })

    it(`#parse`, () => {


        let scheme: Scheme = new Scheme(MOCK_SCHEME_MODEL);

        for (let index in MOCK_LOG) {
            let log = MOCK_LOG[index];
            let result = scheme.parse(log);
            console.dir(result);
            expect(result, `should parse log correctly`).not.equals(log);
        }

    })
})