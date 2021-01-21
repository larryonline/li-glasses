

export interface LigError {
    readonly code: number;
    readonly message?: string;
}

/**
 * 创造一个错误事项
 * @param code 错误码
 * @param message 错误消息
 */
export function error(code: number, message: string): LigError {
    return {code: code, message: message};
}

export const ERR_INVALID_PATTERN: number = 0xFFF000;    // 无效的 pattern
export const ERR_INVALID_SCHEME: number = 0xFFF001;     // 无效的 scheme
export const ERR_INVALID_SPEC: number = 0xFF002;        // 无效的 SPEC

export const ERR_NOT_IMPLEMENT_YET: number = 0xFFFF00;  // 未实现功能
export const ERR_NOT_SUPPORT_YET: number = 0xFFFF01;    // 不支持功能