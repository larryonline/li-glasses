export type SchemeSpec = string;
export type MetaSpec = string;

export type SchemeName = string;
export type MetaName = string;

export type SchemeInput = string;
export type SchemeOutput = {
    readonly content: string;
    [property: string]: any;
} | null;

/**
 * 元数据包
 */
export interface MetaPack {
    readonly [name: string]: Meta;
}

/**
 * 元数据类型枚举
 */
export enum MetaType {
    TEXT, INT, STRING, DATETIME
}

/**
 * 元数据模型
 */
export interface Meta {
    readonly type: MetaType;
    readonly spec?: MetaSpec;
}

/**
 * 元数据解析器
 */
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

/**
 * 元数据解析包
 */
export interface MetaParserPack {
    [name: string]: MetaParser;
}

/**
 * 数据规格模型
 */
export interface SchemeModel {
    readonly name: SchemeName;
    readonly spec: SchemeSpec;
    readonly meta: MetaPack;
}

