import { Entity } from '@loopback/repository';
export declare class Servicio extends Entity {
    id?: string;
    codigo_servicio: string;
    nombre_servicio: string;
    costo_servicio: number;
    clienteId: string;
    ventaServicioId: string;
    constructor(data?: Partial<Servicio>);
}
export interface ServicioRelations {
}
export declare type ServicioWithRelations = Servicio & ServicioRelations;
