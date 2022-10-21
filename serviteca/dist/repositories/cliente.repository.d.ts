import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Cliente, ClienteRelations, Vehiculo, Servicio } from '../models';
import { VehiculoRepository } from './vehiculo.repository';
import { ServicioRepository } from './servicio.repository';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    protected vehiculoRepositoryGetter: Getter<VehiculoRepository>;
    protected servicioRepositoryGetter: Getter<ServicioRepository>;
    readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof Cliente.prototype.id>;
    readonly servicios: HasManyRepositoryFactory<Servicio, typeof Cliente.prototype.id>;
    constructor(dataSource: MongodbDataSource, vehiculoRepositoryGetter: Getter<VehiculoRepository>, servicioRepositoryGetter: Getter<ServicioRepository>);
}
