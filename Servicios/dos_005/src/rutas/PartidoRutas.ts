import {Router} from 'express';
import partidoController from '../controladores/PartidoController';
import candidatoController from '../controladores/CandidatoController';

class PartidoRutas{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaAPI.get('/candidatos', candidatoController.dameCandidatos);
        this.rutaAPI.get('/partidos', partidoController.damePartidos);
    }
}
const partidoRutas = new PartidoRutas();
export default partidoRutas.rutaAPI;