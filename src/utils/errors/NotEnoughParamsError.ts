
export default class NotEnoughParamsError extends Error {
    
    /**
     * Ошибка связанная с отстутствием параметров запроса или их недостатком
     * @param endpoint Путь к методу API
     * @param params Список недостающих параметров
     */
    public constructor(endpoint: string, params: string[] | readonly string[]) {
        super('В запросе ' + endpoint + ' не указаны параметры: ' + params.join(', '))
    }
}
