import { Count, Filter, Where } from '@loopback/repository';
import { VentaServicio, Servicio } from '../models';
import { VentaServicioRepository } from '../repositories';
export declare class VentaServicioServicioController {
    protected ventaServicioRepository: VentaServicioRepository;
    constructor(ventaServicioRepository: VentaServicioRepository);
    find(id: string, filter?: Filter<Servicio>): Promise<Servicio[]>;
    create(id: typeof VentaServicio.prototype.id, servicio: Omit<Servicio, 'id'>): Promise<Servicio>;
    patch(id: string, servicio: Partial<Servicio>, where?: Where<Servicio>): Promise<Count>;
    delete(id: string, where?: Where<Servicio>): Promise<Count>;
}
