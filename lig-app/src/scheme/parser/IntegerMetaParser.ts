import { Meta, MetaName, MetaParser, SchemeSpec } from "../define";
import { AbstractMetaParser } from "./AbstractMetaParser";


const SPEC_FOR_INTEGER = "[+-]?[0-9]+";
const SPEC_FOR_HEX = "0[xX][a-fA-F0-9]+";
const SPEC_FOR_OCTAL = "0[oO][0-7]+";       // NOT SUPPORT
const SPEC_FOR_BINARY = "0[bB][01]+";       // NOT SUPPORT


const DEFAULT_SPEC = [
    SPEC_FOR_HEX, 
    // SPEC_FOR_OCTAL,  // NOT SUPPORT
    // SPEC_FOR_BINARY, // NOT SUPPORT
    SPEC_FOR_INTEGER
]
.map(item => `(?:${item})`)
.join("|");

export class IntegerMetaParser extends AbstractMetaParser implements MetaParser {

    constructor(metaName: MetaName, metaData: Meta) {
        super(metaName, metaData);
    }



    resolve(spec: SchemeSpec): SchemeSpec {

        // DEFAULT_SPEC = `(${DEFAULT_SPEC})`;
        // const meta_spec = this.data.spec || DEFAULT_SPEC;
        const meta_spec = DEFAULT_SPEC; // int meta parser will ignore this.data.spec
        let resolving = spec.replace(new RegExp(`<${this.name}>`), `(${meta_spec})`);
        // console.log(`spec: ${spec}, resolving: ${resolving}`)
        return `${resolving}`;
    }

    parse(raw: string): any {

        const meta_spec = DEFAULT_SPEC;
        const regx = new RegExp(`^(${meta_spec}$)`);
        // console.log(`IntegerMetaParser#parse("${raw}" use: ${regx}.test("${raw}") got: ${regx.test(raw)}`)
        let resolving =  regx.test(raw) ? parseInt(raw) : NaN;
        return isNaN(resolving) ? null : resolving;

    }
}