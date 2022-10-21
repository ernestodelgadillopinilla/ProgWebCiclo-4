"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdiministradorSistema = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const venta_servicio_model_1 = require("./venta-servicio.model");
let AdiministradorSistema = class AdiministradorSistema extends repository_1.Entity {
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
], AdiministradorSistema.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AdiministradorSistema.prototype, "documento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AdiministradorSistema.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AdiministradorSistema.prototype, "apellido", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AdiministradorSistema.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AdiministradorSistema.prototype, "num_celular", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => venta_servicio_model_1.VentaServicio),
    tslib_1.__metadata("design:type", Array)
], AdiministradorSistema.prototype, "ventaServicios", void 0);
AdiministradorSistema = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AdiministradorSistema);
exports.AdiministradorSistema = AdiministradorSistema;
//# sourceMappingURL=adiministrador-sistema.model.js.map