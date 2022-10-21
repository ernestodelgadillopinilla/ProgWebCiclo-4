import { Entity } from '@loopback/repository';
export declare class Vehiculo extends Entity {
    id?: string;
    placa: string;
    color: string;
    marca: string;
    modelo: string;
    anio: number;
    clienteId: string;
    constructor(data?: Partial<Vehiculo>);
}
export interface VehiculoRelations {
}
export declare type VehiculoWithRelations = Vehiculo & VehiculoRelations;
