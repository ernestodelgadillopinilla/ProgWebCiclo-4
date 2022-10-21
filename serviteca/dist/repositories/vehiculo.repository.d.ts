import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Vehiculo, VehiculoRelations, Cliente } from '../models';
import { ClienteRepository } from './cliente.repository';
export declare class VehiculoRepository extends DefaultCrudRepository<Vehiculo, typeof Vehiculo.prototype.id, VehiculoRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    readonly cliente: BelongsToAccessor<Cliente, typeof Vehiculo.prototype.id>;
    constructor(dataSource: MongodbDataSource, clienteRepositoryGetter: Getter<ClienteRepository>);
}
