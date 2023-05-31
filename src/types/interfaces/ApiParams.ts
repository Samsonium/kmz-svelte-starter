import type ApiRepositoryRecord from './ApiRepositoryRecord'
import type {dataType} from '../dataType'

/** Данные для запроса */
export default interface ApiParams<T extends ApiRepositoryRecord> {
    
    /** Query-параметры */
    query?: Partial<Record<keyof T['query'], T['query'][keyof T['query']]>>,
    
    /** Тело запроса */
    body?: BodyInit,
    
    /** Параметры, вставляемые в путь к методу API */
    params?: Record<T['params'][number], string>
    
    /** Требуется ли включить в запрос `credentials` заголовки */
    withAuth?: boolean
}
