import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { AdiministradorSistema, AdiministradorSistemaRelations, VentaServicio } from '../models';
import { VentaServicioRepository } from './venta-servicio.repository';
export declare class AdiministradorSistemaRepository extends DefaultCrudRepository<AdiministradorSistema, typeof AdiministradorSistema.prototype.id, AdiministradorSistemaRelations> {
    protected ventaServicioRepositoryGetter: Getter<VentaServicioRepository>;
    readonly ventaServicios: HasManyRepositoryFactory<VentaServicio, typeof AdiministradorSistema.prototype.id>;
    constructor(dataSource: MongodbDataSource, ventaServicioRepositoryGetter: Getter<VentaServicioRepository>);
}
