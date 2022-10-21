import { Entity } from '@loopback/repository';
import { Servicio } from './servicio.model';
export declare class VentaServicio extends Entity {
    id?: string;
    codigo_servicio: string;
    placa_carro: string;
    fecha_servicio: string;
    valor_servicio: number;
    servicios: Servicio[];
    adiministradorSistemaId: string;
    constructor(data?: Partial<VentaServicio>);
}
export interface VentaServicioRelations {
}
export declare type VentaServicioWithRelations = VentaServicio & VentaServicioRelations;
