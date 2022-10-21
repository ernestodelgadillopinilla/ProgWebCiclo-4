"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdiministradorSistemaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AdiministradorSistemaRepository = class AdiministradorSistemaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, ventaServicioRepositoryGetter) {
        super(models_1.AdiministradorSistema, dataSource);
        this.ventaServicioRepositoryGetter = ventaServicioRepositoryGetter;
        this.ventaServicios = this.createHasManyRepositoryFactoryFor('ventaServicios', ventaServicioRepositoryGetter);
        this.registerInclusionResolver('ventaServicios', this.ventaServicios.inclusionResolver);
    }
};
AdiministradorSistemaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongodb')),
    tslib_1.__param(1, repository_1.repository.getter('VentaServicioRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongodbDataSource, Function])
], AdiministradorSistemaRepository);
exports.AdiministradorSistemaRepository = AdiministradorSistemaRepository;
//# sourceMappingURL=adiministrador-sistema.repository.js.map