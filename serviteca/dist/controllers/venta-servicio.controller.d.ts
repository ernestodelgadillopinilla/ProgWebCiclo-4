import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { VentaServicio } from '../models';
import { VentaServicioRepository } from '../repositories';
export declare class VentaServicioController {
    ventaServicioRepository: VentaServicioRepository;
    constructor(ventaServicioRepository: VentaServicioRepository);
    create(ventaServicio: Omit<VentaServicio, 'id'>): Promise<VentaServicio>;
    count(where?: Where<VentaServicio>): Promise<Count>;
    find(filter?: Filter<VentaServicio>): Promise<VentaServicio[]>;
    updateAll(ventaServicio: VentaServicio, where?: Where<VentaServicio>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<VentaServicio>): Promise<VentaServicio>;
    updateById(id: string, ventaServicio: VentaServicio): Promise<void>;
    replaceById(id: string, ventaServicio: VentaServicio): Promise<void>;
    deleteById(id: string): Promise<void>;
}
