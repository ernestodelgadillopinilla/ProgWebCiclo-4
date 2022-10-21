"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
const venta_servicio_model_1 = require("./venta-servicio.model");
let Servicio = class Servicio extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "codigo_servicio", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "nombre_servicio", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Servicio.prototype, "costo_servicio", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "clienteId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => venta_servicio_model_1.VentaServicio),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "ventaServicioId", void 0);
Servicio = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Servicio);
exports.Servicio = Servicio;
//# sourceMappingURL=servicio.model.js.map