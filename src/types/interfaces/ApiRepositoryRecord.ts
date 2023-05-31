import type RequestType from '../enums/RequestType'
import type QueryParameters from './QueryParameters'
import type SchemaDefinition from './SchemaDefinition'

/** Запись в репозитории API методов */
export default interface ApiRepositoryRecord {
    
    /** HTTP-метод */
    method: RequestType
    
    /** Путь к API методу на сервере */
    endpoint: string,
    
    /** Параметры, вставляемые в путь к методу API */
    params?: readonly string[],
    
    /** Доступные query параметры */
    query?: QueryParameters,
    
    /** Тело запроса */
    body?: SchemaDefinition
    
    /** Поля, приходящие с сервера */
    response?: unknown
}
