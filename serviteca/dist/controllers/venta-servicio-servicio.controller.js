"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaServicioServicioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaServicioServicioController = class VentaServicioServicioController {
    constructor(ventaServicioRepository) {
        this.ventaServicioRepository = ventaServicioRepository;
    }
    async find(id, filter) {
        return this.ventaServicioRepository.servicios(id).find(filter);
    }
    async create(id, servicio) {
        return this.ventaServicioRepository.servicios(id).create(servicio);
    }
    async patch(id, servicio, where) {
        return this.ventaServicioRepository.servicios(id).patch(servicio, where);
    }
    async delete(id, where) {
        return this.ventaServicioRepository.servicios(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/venta-servicios/{id}/servicios', {
        responses: {
            '200': {
                description: 'Array of VentaServicio has many Servicio',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Servicio) },
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
], VentaServicioServicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/venta-servicios/{id}/servicios', {
        responses: {
            '200': {
                description: 'VentaServicio model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, {
                    title: 'NewServicioInVentaServicio',
                    exclude: ['id'],
                    optional: ['ventaServicioId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioServicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/venta-servicios/{id}/servicios', {
        responses: {
            '200': {
                description: 'VentaServicio.Servicio PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Servicio))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioServicioController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/venta-servicios/{id}/servicios', {
        responses: {
            '200': {
                description: 'VentaServicio.Servicio DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Servicio))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaServicioServicioController.prototype, "delete", null);
VentaServicioServicioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VentaServicioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VentaServicioRepository])
], VentaServicioServicioController);
exports.VentaServicioServicioController = VentaServicioServicioController;
//# sourceMappingURL=venta-servicio-servicio.controller.js.map