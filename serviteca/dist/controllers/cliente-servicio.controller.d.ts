import { Count, Filter, Where } from '@loopback/repository';
import { Cliente, Servicio } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteServicioController {
    protected clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    find(id: string, filter?: Filter<Servicio>): Promise<Servicio[]>;
    create(id: typeof Cliente.prototype.id, servicio: Omit<Servicio, 'id'>): Promise<Servicio>;
    patch(id: string, servicio: Partial<Servicio>, where?: Where<Servicio>): Promise<Count>;
    delete(id: string, where?: Where<Servicio>): Promise<Count>;
}
