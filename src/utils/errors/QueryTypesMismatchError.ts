import type SchemaDefinition from '../../types/interfaces/SchemaDefinition'

export default class QueryTypesMismatchError extends Error {
    
    /**
     * Ошибка, связанная с несовпадением типов query-параметра
     * @param endpoint Путь к методу API
     * @param param Имя параметра
     * @param expect Объект, из которого будет получен ожидаемый тип
     * @param got Объект, из которого будет получен фактический тип
     */
    public constructor(endpoint: string, param: string, expect: SchemaDefinition, got: SchemaDefinition) {
        super('В запросе к ' + endpoint + ' не совпадает тип query-параметра "' + param
            + '": ожидался тип "' + typeof expect[param] + '", получен "' + typeof got[param] + '"')
    }
}
