"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaServicioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaServicioController = class VentaServicioController {
    constructor(ventaServicioRepository) {
        this.ventaServicioRepository = ventaServicioRepository;
    }
    async create(ventaServicio) {
        return this.ventaServicioRepository.create(ventaServicio);
    }
    async count(where) {
        return this.ventaServicioRepository.count(where);
    }
    async find(filter) {
        return this.ventaServicioRepository.find(filter);
    }
    async updateAll(ventaServicio, where) {
        return this.ventaServicioRepository.updateAll(ventaServicio, where);
    }
    async findById(id, filter) {
        return this.ventaServicioRepository.findById(id, filter);
    }
    async updateById(id, ventaServicio) {
        await this.ventaServicioRepository.updateById(id, ventaServicio);
    }
    async replaceById(id, ventaServicio) {
        await this.ventaServicioRepository.replaceById(id, ventaServicio);
    }
    async deleteById(id) {
        await this.ventaServicioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/venta-servicios'),
    (0, rest_1.response)(200, {
        description: 'VentaServicio model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio, {
                    title: 'NewVentaServicio',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/venta-servicios/count'),
    (0, rest_1.response)(200, {
        description: 'VentaServicio model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.VentaServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/venta-servicios'),
    (0, rest_1.response)(200, {
        description: 'Array of VentaServicio model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.VentaServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/venta-servicios'),
    (0, rest_1.response)(200, {
        description: 'VentaServicio PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.VentaServicio)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.VentaServicio, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/venta-servicios/{id}'),
    (0, rest_1.response)(200, {
        description: 'VentaServicio model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.VentaServicio, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/venta-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'VentaServicio PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.VentaServicio]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/venta-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'VentaServicio PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.VentaServicio]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/venta-servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'VentaServicio DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioController.prototype, "deleteById", null);
VentaServicioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VentaServicioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VentaServicioRepository])
], VentaServicioController);
exports.VentaServicioController = VentaServicioController;
//# sourceMappingURL=venta-servicio.controller.js.map