import { MetaParser, SchemeSpec, SchemeInput, SchemeModel, SchemeOutput, MetaParserPack, MetaName } from "./data";
import { newMetaParser } from "./parser";


interface SchemeParser {
    readonly spec: SchemeSpec;
    readonly regx: RegExp;
    readonly parserList: Array<MetaName>;
    readonly parserMap: MetaParserPack
}


export class Scheme {
    private model: SchemeModel;
    private parser!: SchemeParser
    constructor(model: SchemeModel) {
        this.model = model;
    }

    private getSchemeParser():SchemeParser {
        if (null == this.parser) {
            const spec = this.model.spec;

            const map:{[name: string]: MetaParser} = {};
            for (let name in this.model.meta) {
                map[name] = newMetaParser(name, this.model.meta[name]);
            }

            const regx_array:RegExpMatchArray | null = spec.match(/((?!<)\w+(?=>))/gm);
            let list:MetaName[] = regx_array?.map(name => name) || [];

            // compile spec
            let resolved = spec;
            resolved = resolved.replace(/</gm, "\\s*<").replace(/>/gm, ">\\s*").split("\\s*\\s*").join('\\s*');
            list?.map(meta => resolved = map[meta].resolve(resolved));

            this.parser = {
                spec: spec,
                regx: new RegExp(`${resolved}`),
                parserList: list,
                parserMap: map
            }
        }
        return this.parser;
    }



    test(line: SchemeInput): boolean {
        const parser = this.getSchemeParser();
        const result = parser.regx.test(line);
        if (!result) {
            console.log(`
------------------------------------------------
spec: ${parser.regx}, 
------------------------------------------------
test: ${line}
------------------------------------------------
got[${result}]`)
        }
        return result;
    }


    parse(line: SchemeInput): SchemeOutput | SchemeInput {
        const parser = this.getSchemeParser();
        const matched = line.match(parser.regx);
        if (matched) {

            try {
                let result: {[name: string]: any} = {};
                for (let i = 0; i < parser.parserList.length; i ++) {
                    let meta: string = parser.parserList[i];
                    let mp = parser.parserMap[meta];
                    let str = matched[i + 1];
                    result[meta] = mp.parse(str);
                }
                return result as SchemeOutput;
            } catch(e) {
                console.error(`scheme error${e.code}: ${e.message}`)
                return line;
            }
            
            
        } else {
            return line;
        }
    }
}