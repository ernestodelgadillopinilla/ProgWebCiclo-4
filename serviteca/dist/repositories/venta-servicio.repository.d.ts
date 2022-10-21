import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { VentaServicio, VentaServicioRelations, Servicio, AdiministradorSistema } from '../models';
import { ServicioRepository } from './servicio.repository';
import { AdiministradorSistemaRepository } from './adiministrador-sistema.repository';
export declare class VentaServicioRepository extends DefaultCrudRepository<VentaServicio, typeof VentaServicio.prototype.id, VentaServicioRelations> {
    protected servicioRepositoryGetter: Getter<ServicioRepository>;
    protected adiministradorSistemaRepositoryGetter: Getter<AdiministradorSistemaRepository>;
    readonly servicios: HasManyRepositoryFactory<Servicio, typeof VentaServicio.prototype.id>;
    readonly adiministradorSistema: BelongsToAccessor<AdiministradorSistema, typeof VentaServicio.prototype.id>;
    constructor(dataSource: MongodbDataSource, servicioRepositoryGetter: Getter<ServicioRepository>, adiministradorSistemaRepositoryGetter: Getter<AdiministradorSistemaRepository>);
}
