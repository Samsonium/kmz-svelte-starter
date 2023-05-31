import type ApiResponse from '../types/interfaces/ApiResponse'
import type ApiParams from '../types/interfaces/ApiParams'
import type ApiRepositoryRecord from '../types/interfaces/ApiRepositoryRecord'
import type SchemaDefinition from '../types/interfaces/SchemaDefinition'
import QueryTypesMismatchError from './errors/QueryTypesMismatchError'
import NotEnoughParamsError from './errors/NotEnoughParamsError'

/**
 * Функция безопасного запроса на сервер.
 * В генерике (параметре типа) можно указать возвращаемый с
 * сервера объект. В результате работы функции возрвщается
 * объект с тремя полями: `ok`, `code` и `body`.
 * - `ok`: состояние успешности запроса в формате булевы
 * - `code`: HTTP-код состояния ответа
 * - `data`: Ответ с сервера
 *
 * @example
 *  // Базовый пример вызова
 *  fetchApi('/path/to/method')
 *
 *  // Расширенный пример
 *  fetchApi(apiRepository.geozone.organizationById, {
 *      params: {
 *          id: '12345'
 *      },
 *      query: {
 *          page: 1,
 *          per_page: 10
 *      }
 *  })
 *
 * @param apiMethod путь к API методу
 * @param options настройки запроса (метод, query-параметры, тело)
 */
export default async function fetchApi<T extends ApiRepositoryRecord = undefined,
    U extends SchemaDefinition = undefined>
(apiMethod: T, options?: ApiParams<T>): Promise<ApiResponse<U>> {
    const url = new URL(apiMethod.endpoint, import.meta.env.VITE_URL_API)
    
    // Проверяем, есть ли параметры в методе и заменяем указанными параметрами
    if (apiMethod.params) {
        if (!options?.params)
            throw new NotEnoughParamsError(apiMethod.endpoint, apiMethod.params)
        
        for (const param in options.params) {
            url.pathname = url.pathname.replace(
                `:${param}`,
                options.params[param as T['params'][number]]
            )
        }
    }
    
    // Добавляем query параметры в запрос. Если типы значений в параметрах не
    // сопадают, то выводим ошибку, чтобы потом не было проблем с
    // запросами в ручки.
    if (options?.query) {
        for (const param in options.query) {
            if (typeof options.query[param] !== typeof apiMethod.query[param]) {
                throw new QueryTypesMismatchError(
                    apiMethod.endpoint,
                    param,
                    apiMethod.query,
                    options.query)
            }
            url.searchParams.set(param, options.query[param as keyof T['query']].toString())
        }
    }
    
    // Делаем запрос
    let result: Response
    try {
        result = await fetch(url, {
            credentials: options?.withAuth
                ? 'include'
                : undefined,
            method: apiMethod.method,
            body: options?.body as BodyInit
        })
    } catch (e) {
        
        // В DEV-режиме пытаемся вывести полные данные
        // о произошедшей ошибке. В режиме PRODUCTION
        // выводмм исключительно краткую информацию.
        if (import.meta.env.DEV) {
            console.error('Ошибка запроса к', apiMethod.endpoint)
            console.error(e.message)
            console.error(e.stack)
        } else console.error('Не удалось обработать запрос API:', apiMethod.endpoint)
    }
    
    return {
        ok: result.ok,
        code: result.status,
        data: await result.json()
    }
}
