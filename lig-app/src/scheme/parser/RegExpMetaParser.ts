import { MetaParser, MetaName, Meta, SchemeSpec } from "../define";
import { error, ERR_INVALID_SPEC } from "../../error";
import { AbstractMetaParser } from "./AbstractMetaParser";

export class RegExpMetaParser extends AbstractMetaParser implements MetaParser {
    constructor(metaName: MetaName, metaData: Meta) {
        super(metaName, metaData);
    }

    resolve(spec: SchemeSpec): SchemeSpec {
        if (this.data.spec) {
            let resolving = spec.replace(new RegExp(`<${this.name}>`), `(${this.data.spec})`);
            // console.log(`spec: ${spec}, resolving: ${resolving}`)
            return `${resolving}`;
        } else {
            throw error(ERR_INVALID_SPEC, `${this.name}[${this.data}] can not resolve ${spec}`)
        }
    }

    parse(raw: string): any {
        if (this.data.spec) {
            return raw.trim();
        } else {
            throw error(ERR_INVALID_SPEC, `${this.name}[${this.data}] can not parse "${raw}"`)
        }
    }
}