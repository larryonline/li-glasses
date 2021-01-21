import {Meta, MetaName, MetaParser, MetaSpec, SchemeSpec} from '../data'
import { error, ERR_NOT_IMPLEMENT_YET } from '../error';

export class AbstractMetaParser implements MetaParser {
    protected name: MetaName;
    protected data: Meta;

    constructor(metaName: MetaName, metaData: Meta) {
        this.name = metaName;
        this.data = metaData;
    }

    // at(spec: SchemeSpec): number {
    //     let match:RegExpMatchArray | null = spec.match(/((?!<)\w+(?=>))/gm);
    //     return match?.indexOf(this.name) || -1;
    // }

    parse(raw: string): any {
        throw error(ERR_NOT_IMPLEMENT_YET, `#parse(raw) not implement yet`);
    }

    resolve(spec: SchemeSpec): SchemeSpec {
        throw error(ERR_NOT_IMPLEMENT_YET, `#resolve(spec) not implement yet.`)
    }
}