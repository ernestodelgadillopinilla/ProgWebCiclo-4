import { Servicio, VentaServicio } from '../models';
import { ServicioRepository } from '../repositories';
export declare class ServicioVentaServicioController {
    servicioRepository: ServicioRepository;
    constructor(servicioRepository: ServicioRepository);
    getVentaServicio(id: typeof Servicio.prototype.id): Promise<VentaServicio>;
}
