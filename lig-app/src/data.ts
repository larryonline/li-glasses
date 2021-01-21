export type SchemeSpec = string;
export type MetaSpec = string;

export type SchemeName = string;
export type MetaName = string;

export type SchemeInput = string;
export type SchemeOutput = {
    readonly content: string;
    [property: string]: any;
} | null;

export interface MetaPack {
    readonly [name: string]: Meta;
}

export enum MetaType {
    TEXT, INT, STRING, DATETIME
}

export interface Meta {
    readonly type: MetaType;
    readonly spec?: MetaSpec;
}

export interface MetaParser {

    /**
     * 数据处理
     * @param raw 原始数据
     */
    parse(raw: string): any;
    
    /**
     * 解决 SchemeSpec 中和 Meta 相关的片段
     * @param spec 一条SchemeSpec
     */
    resolve(spec: SchemeSpec): SchemeSpec;
}

export interface MetaParserPack {
    [name: string]: MetaParser;
}

export interface SchemeModel {
    readonly name: SchemeName;
    readonly spec: SchemeSpec;
    readonly meta: MetaPack;
}

