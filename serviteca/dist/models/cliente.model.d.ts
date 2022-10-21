import { Entity } from '@loopback/repository';
import { Vehiculo } from './vehiculo.model';
import { Servicio } from './servicio.model';
export declare class Cliente extends Entity {
    id?: string;
    identificacion: string;
    nombre_completo: string;
    telefono: string;
    correo_electronico: string;
    vehiculos: Vehiculo[];
    servicios: Servicio[];
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
