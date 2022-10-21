"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ClienteRepository = class ClienteRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, vehiculoRepositoryGetter, servicioRepositoryGetter) {
        super(models_1.Cliente, dataSource);
        this.vehiculoRepositoryGetter = vehiculoRepositoryGetter;
        this.servicioRepositoryGetter = servicioRepositoryGetter;
        this.servicios = this.createHasManyRepositoryFactoryFor('servicios', servicioRepositoryGetter);
        this.registerInclusionResolver('servicios', this.servicios.inclusionResolver);
        this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter);
        this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
    }
};
ClienteRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongodb')),
    tslib_1.__param(1, repository_1.repository.getter('VehiculoRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ServicioRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function])
], ClienteRepository);
exports.ClienteRepository = ClienteRepository;
//# sourceMappingURL=cliente.repository.js.map