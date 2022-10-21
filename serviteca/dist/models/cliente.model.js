"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const vehiculo_model_1 = require("./vehiculo.model");
const servicio_model_1 = require("./servicio.model");
let Cliente = class Cliente extends repository_1.Entity {
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
], Cliente.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "identificacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "nombre_completo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "telefono", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "correo_electronico", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => vehiculo_model_1.Vehiculo),
    tslib_1.__metadata("design:type", Array)
], Cliente.prototype, "vehiculos", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => servicio_model_1.Servicio),
    tslib_1.__metadata("design:type", Array)
], Cliente.prototype, "servicios", void 0);
Cliente = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.model.js.map