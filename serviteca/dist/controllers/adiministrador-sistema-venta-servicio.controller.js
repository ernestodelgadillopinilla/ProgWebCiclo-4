"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdiministradorSistemaVentaServicioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdiministradorSistemaVentaServicioController = class AdiministradorSistemaVentaServicioController {
    constructor(adiministradorSistemaRepository) {
        this.adiministradorSistemaRepository = adiministradorSistemaRepository;
    }
    async find(id, filter) {
        return this.adiministradorSistemaRepository.ventaServicios(id).find(filter);
    }
    async create(id, ventaServicio) {
        return this.adiministradorSistemaRepository.ventaServicios(id).create(ventaServicio);
    }
    async patch(id, ventaServicio, where) {
        return this.adiministradorSistemaRepository.ventaServicios(id).patch(ventaServicio, where);
    }
    async delete(id, where) {
        return this.adiministradorSistemaRepository.ventaServicios(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/adiministrador-sistemas/{id}/venta-servicios', {
        responses: {
            '200': {
                description: 'Array of AdiministradorSistema has many VentaServicio',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdiministradorSistemaVentaServicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/adiministrador-sistemas/{id}/venta-servicios', {
        responses: {
            '200': {
                description: 'AdiministradorSistema model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio, {
                    title: 'NewVentaServicioInAdiministradorSistema',
                    exclude: ['id'],
                    optional: ['adiministradorSistemaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdiministradorSistemaVentaServicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/adiministrador-sistemas/{id}/venta-servicios', {
        responses: {
            '200': {
                description: 'AdiministradorSistema.VentaServicio PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.VentaServicio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.VentaServicio))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdiministradorSistemaVentaServicioController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/adiministrador-sistemas/{id}/venta-servicios', {
        responses: {
            '200': {
                description: 'AdiministradorSistema.VentaServicio DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.VentaServicio))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdiministradorSistemaVentaServicioController.prototype, "delete", null);
AdiministradorSistemaVentaServicioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AdiministradorSistemaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AdiministradorSistemaRepository])
], AdiministradorSistemaVentaServicioController);
exports.AdiministradorSistemaVentaServicioController = AdiministradorSistemaVentaServicioController;
//# sourceMappingURL=adiministrador-sistema-venta-servicio.controller.js.map