import { Entity } from '@loopback/repository';
import { VentaServicio } from './venta-servicio.model';
export declare class AdiministradorSistema extends Entity {
    id?: string;
    documento: string;
    nombre: string;
    apellido: string;
    email: string;
    num_celular: string;
    ventaServicios: VentaServicio[];
    constructor(data?: Partial<AdiministradorSistema>);
}
export interface AdiministradorSistemaRelations {
}
export declare type AdiministradorSistemaWithRelations = AdiministradorSistema & AdiministradorSistemaRelations;
