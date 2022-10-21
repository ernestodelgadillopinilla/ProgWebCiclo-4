import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Servicio, ServicioRelations, Cliente, VentaServicio } from '../models';
import { ClienteRepository } from './cliente.repository';
import { VentaServicioRepository } from './venta-servicio.repository';
export declare class ServicioRepository extends DefaultCrudRepository<Servicio, typeof Servicio.prototype.id, ServicioRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected ventaServicioRepositoryGetter: Getter<VentaServicioRepository>;
    readonly cliente: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;
    readonly ventaServicio: BelongsToAccessor<VentaServicio, typeof Servicio.prototype.id>;
    constructor(dataSource: MongodbDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, ventaServicioRepositoryGetter: Getter<VentaServicioRepository>);
}
