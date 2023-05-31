import type {dataType} from '../dataType'

/** Данные схемы */
export default interface SchemaDefinition {
    [field: string]: dataType | SchemaDefinition
}
