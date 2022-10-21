import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AdiministradorSistema } from '../models';
import { AdiministradorSistemaRepository } from '../repositories';
export declare class AdministradorSistemaController {
    adiministradorSistemaRepository: AdiministradorSistemaRepository;
    constructor(adiministradorSistemaRepository: AdiministradorSistemaRepository);
    create(adiministradorSistema: Omit<AdiministradorSistema, 'id'>): Promise<AdiministradorSistema>;
    count(where?: Where<AdiministradorSistema>): Promise<Count>;
    find(filter?: Filter<AdiministradorSistema>): Promise<AdiministradorSistema[]>;
    updateAll(adiministradorSistema: AdiministradorSistema, where?: Where<AdiministradorSistema>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<AdiministradorSistema>): Promise<AdiministradorSistema>;
    updateById(id: string, adiministradorSistema: AdiministradorSistema): Promise<void>;
    replaceById(id: string, adiministradorSistema: AdiministradorSistema): Promise<void>;
    deleteById(id: string): Promise<void>;
}
