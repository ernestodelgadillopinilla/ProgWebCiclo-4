"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaServicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const servicio_model_1 = require("./servicio.model");
const adiministrador_sistema_model_1 = require("./adiministrador-sistema.model");
let VentaServicio = class VentaServicio extends repository_1.Entity {
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
], VentaServicio.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], VentaServicio.prototype, "codigo_servicio", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], VentaServicio.prototype, "placa_carro", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], VentaServicio.prototype, "fecha_servicio", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], VentaServicio.prototype, "valor_servicio", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => servicio_model_1.Servicio),
    tslib_1.__metadata("design:type", Array)
], VentaServicio.prototype, "servicios", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => adiministrador_sistema_model_1.AdiministradorSistema),
    tslib_1.__metadata("design:type", String)
], VentaServicio.prototype, "adiministradorSistemaId", void 0);
VentaServicio = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], VentaServicio);
exports.VentaServicio = VentaServicio;
//# sourceMappingURL=venta-servicio.model.js.map