"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorSistemaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdministradorSistemaController = class AdministradorSistemaController {
    constructor(adiministradorSistemaRepository) {
        this.adiministradorSistemaRepository = adiministradorSistemaRepository;
    }
    async create(adiministradorSistema) {
        return this.adiministradorSistemaRepository.create(adiministradorSistema);
    }
    async count(where) {
        return this.adiministradorSistemaRepository.count(where);
    }
    async find(filter) {
        return this.adiministradorSistemaRepository.find(filter);
    }
    async updateAll(adiministradorSistema, where) {
        return this.adiministradorSistemaRepository.updateAll(adiministradorSistema, where);
    }
    async findById(id, filter) {
        return this.adiministradorSistemaRepository.findById(id, filter);
    }
    async updateById(id, adiministradorSistema) {
        await this.adiministradorSistemaRepository.updateById(id, adiministradorSistema);
    }
    async replaceById(id, adiministradorSistema) {
        await this.adiministradorSistemaRepository.replaceById(id, adiministradorSistema);
    }
    async deleteById(id) {
        await this.adiministradorSistemaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/adiministrador-sistemas'),
    (0, rest_1.response)(200, {
        description: 'AdiministradorSistema model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.AdiministradorSistema) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AdiministradorSistema, {
                    title: 'NewAdiministradorSistema',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorSistemaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/adiministrador-sistemas/count'),
    (0, rest_1.response)(200, {
        description: 'AdiministradorSistema model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AdiministradorSistema)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorSistemaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/adiministrador-sistemas'),
    (0, rest_1.response)(200, {
        description: 'Array of AdiministradorSistema model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.AdiministradorSistema, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AdiministradorSistema)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorSistemaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/adiministrador-sistemas'),
    (0, rest_1.response)(200, {
        description: 'AdiministradorSistema PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AdiministradorSistema, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AdiministradorSistema)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AdiministradorSistema, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorSistemaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/adiministrador-sistemas/{id}'),
    (0, rest_1.response)(200, {
        description: 'AdiministradorSistema model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AdiministradorSistema, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AdiministradorSistema, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorSistemaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/adiministrador-sistemas/{id}'),
    (0, rest_1.response)(204, {
        description: 'AdiministradorSistema PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AdiministradorSistema, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AdiministradorSistema]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorSistemaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/adiministrador-sistemas/{id}'),
    (0, rest_1.response)(204, {
        description: 'AdiministradorSistema PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AdiministradorSistema]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorSistemaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/adiministrador-sistemas/{id}'),
    (0, rest_1.response)(204, {
        description: 'AdiministradorSistema DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorSistemaController.prototype, "deleteById", null);
AdministradorSistemaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AdiministradorSistemaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AdiministradorSistemaRepository])
], AdministradorSistemaController);
exports.AdministradorSistemaController = AdministradorSistemaController;
//# sourceMappingURL=administrador-sistema.controller.js.map