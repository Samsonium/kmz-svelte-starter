import RequestType from '../types/enums/RequestType'
import type ApiRepositoryRecord from '../types/interfaces/ApiRepositoryRecord'

/**
 * Список доступных API-методов.
 * Все перечисленные ниже методы взяты
 * с [Swagger](http://10.100.0.243/)
 */
const apiRepository = {
    
    /** MDF-Adapter */
    mdf: {
        
        /** /mdf/raw_trucks/mdf_convector */
        getMdfConvector: {
            method: RequestType.GET,
            endpoint: '/mdf/raw_trucks/mdf_convector',
            query: {
                vehicle_id: '',
                from_ts: '',
                to_ts: ''
            }
        },
        
        /** /mdf/raw_trucks/get_mdf */
        getMdf: {
            method: RequestType.GET,
            endpoint: '/mdf/raw_trucks/get_mdf',
            query: {
                filename: ''
            }
        }
    },
    
    /** FMS-Cache/Internal */
    fmsCache: {
        
        /** /cache/vehicles */
        getByVehicles: {
            method: RequestType.POST,
            endpoint: '/cache/vehicles',
            query: {
                page: 0,
                per_page: 0,
                vehicles_limit: 0
            }
        },
        
        /** /internal/cache/vehicles */
        getInternalByVehicles: {
            method: RequestType.POST,
            endpoint: '/internal/cache/vehicles',
            query: {
                page: 0,
                per_page: 0,
                vehicles_limit: 0
            }
        }
    },
    
    /** Dealers */
    dealers: {
        
        /** /dealers/nearest */
        getNearestDealers: {
            method: RequestType.GET,
            endpoint: '/dealers/nearest',
            query: {
                longitude: 0,
                latitude: 0,
                quantity: 0
            }
        }
    },
    
    /** Geozone */
    geozone: {
        
        /** /geozone/organization */
        organization: {
            method: RequestType.GET,
            endpoint: '/geozone/organization',
            query: {
                page: 0,
                per_page: 0
            }
        },
        
        /** /geozone/organization/{org_id} */
        organizationById: {
            method: RequestType.GET,
            endpoint: '/geozone/organization/:id',
            params: <const>['id'],
            query: {
                page: 0,
                per_page: 0
            }
        },
        
        /** /geozone/organization/{org_id}/cars */
        carsInOrganizationById: {
            method: RequestType.GET,
            endpoint: '/geozone/organization/:id/cars',
            params: <const>['id'],
            query: {
                page: 0,
                per_page: 0
            }
        },
        
        /** /geozone/users */
        users: {
            method: RequestType.GET,
            endpoint: '/geozone/users'
        },
        
        /** /geozone/export-excel */
        exportExcel: {
            method: RequestType.GET,
            endpoint: '/geozone/export-excel',
            query: {
                page: 0,
                per_page: 0,
                organization_id: '',
                area_id: '',
                car_id: '',
                date_from: 0,
                date_to: 0,
                group_by: '',
                objects: '',
                report_type: '',
                pattern: '',
                username: '',
                from_generator: ''
            }
        },
        
        /** /geozone/report */
        report: {
            method: RequestType.GET,
            endpoint: '/geozone/report',
            query: {
                page: 0,
                per_page: 0,
                organization_id: '',
                area_id: '',
                car_id: ''
            }
        }
    }
} satisfies {
    [category: string]: {
        [name: string]: ApiRepositoryRecord
    }
}
export default apiRepository
