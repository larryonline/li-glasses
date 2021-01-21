/**
 * 
 * #### 备注
 * * MetaSpec 在 SchemeSpec 内的多次匹配 `NOT SUPPORTED`
 */

import { Meta, MetaName, MetaParser, MetaType } from '../data'
import { DateMetaParser } from './DateMetaParser'
import { IntegerMetaParser } from './IntegerMetaParser'
import { RegExpMetaParser } from './RegExpMetaParser'
import { TextMetaParser } from './TextMetaParser'

export * from './RegExpMetaParser'
export * from './IntegerMetaParser'
export * from './TextMetaParser'
export * from './DateMetaParser'

/**
 * 根据传入的 Meta 创建对应的 解析器
 * @param name Meta 名称
 * @param data Meta 数据
 */
export function newMetaParser(name: MetaName, data: Meta): MetaParser {
    let result: MetaParser | null = null;
    switch(data.type) {
        case MetaType.DATETIME:
            result = new DateMetaParser(name, data);
            break;
        case MetaType.INT:
            result = new IntegerMetaParser(name, data);
            break;
        case MetaType.STRING:
            result = new RegExpMetaParser(name, data);
            break;
        case MetaType.TEXT:
            result = new TextMetaParser(name, data);
            break;
    }
    return result;
}