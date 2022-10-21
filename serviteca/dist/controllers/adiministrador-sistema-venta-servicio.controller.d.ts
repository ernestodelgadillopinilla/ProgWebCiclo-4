import { Count, Filter, Where } from '@loopback/repository';
import { AdiministradorSistema, VentaServicio } from '../models';
import { AdiministradorSistemaRepository } from '../repositories';
export declare class AdiministradorSistemaVentaServicioController {
    protected adiministradorSistemaRepository: AdiministradorSistemaRepository;
    constructor(adiministradorSistemaRepository: AdiministradorSistemaRepository);
    find(id: string, filter?: Filter<VentaServicio>): Promise<VentaServicio[]>;
    create(id: typeof AdiministradorSistema.prototype.id, ventaServicio: Omit<VentaServicio, 'id'>): Promise<VentaServicio>;
    patch(id: string, ventaServicio: Partial<VentaServicio>, where?: Where<VentaServicio>): Promise<Count>;
    delete(id: string, where?: Where<VentaServicio>): Promise<Count>;
}
