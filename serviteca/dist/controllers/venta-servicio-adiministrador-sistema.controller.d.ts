import { VentaServicio, AdiministradorSistema } from '../models';
import { VentaServicioRepository } from '../repositories';
export declare class VentaServicioAdiministradorSistemaController {
    ventaServicioRepository: VentaServicioRepository;
    constructor(ventaServicioRepository: VentaServicioRepository);
    getAdiministradorSistema(id: typeof VentaServicio.prototype.id): Promise<AdiministradorSistema>;
}
