import { Meta, MetaName, MetaParser, SchemeSpec } from "../data";
import { error, ERR_INVALID_SPEC } from "../error";
import { AbstractMetaParser } from "./AbstractMetaParser";
import { parse as parseDate } from 'date-fns'

export class DateMetaParser extends AbstractMetaParser implements MetaParser {

    constructor(metaName: MetaName, metaData: Meta) {
        super(metaName, metaData);
    }

    private meta_spec!: string;

    resolve(spec: SchemeSpec): SchemeSpec {
        
        if (this.data.spec) {
            if (!this.meta_spec) {
                // 简化版本
                this.meta_spec = this.data.spec.replace(/([^YyMmDdHhSs])/gm, "\\$1");
                this.meta_spec = this.meta_spec.replace(/[YyMmDdHhSs]/gm, "\\d");
            }
            
            let resolving = spec.replace(new RegExp(`<${this.name}>`), `(${this.meta_spec})`)
            // console.log(`spec: ${spec}, resolving: ${resolving}`);
            return resolving;
        } else {
            throw error(ERR_INVALID_SPEC, `${this.name}[${this.data}] can not resolve ${spec}`)
        }
    }


    parse(raw: string): any {
        if (this.data.spec) {
            let resolving = parseDate(raw, this.data.spec, new Date());
            // console.log(`DateMetaParser#parse("${raw}") with spec:"${this.data.spec}". got: ${resolving}`)
            return isNaN(resolving.getTime()) ? null : resolving;

        } else {
            throw error(ERR_INVALID_SPEC, `${this.name}[${this.data}] can not parse("${raw}")`);
        }


    }
}