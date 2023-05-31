
/** Ответ от сервера */
export default interface ApiResponse<T = unknown> {
    
    /** Получен ли корректный ответ от сервера */
    ok: boolean,
    
    /** HTTP-код ответа сервера */
    code: number,
    
    /** Данные с сервера */
    data: T
}
