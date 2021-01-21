import { Meta, MetaName, MetaParser, SchemeSpec } from "../data";
import { AbstractMetaParser } from "./AbstractMetaParser";


export class TextMetaParser extends AbstractMetaParser implements MetaParser {
    constructor(metaName: MetaName, metaData: Meta) {
        super(metaName, metaData);
    }

    resolve(spec: SchemeSpec): SchemeSpec {
        let resolving = spec.replace(new RegExp(`<${this.name}>`), `(.*)`);
        // console.log(`spect: ${spec}, resolved: ${resolving}`);
        return resolving;
    }

    parse(raw: string): any {
        return raw;
    }
}