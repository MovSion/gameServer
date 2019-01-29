import { Router } from 'express';
//Se usa controlador para las rutas
import gamesController from '../controller/gamesController';

class GamesRoute {
    public router: Router = Router();

    constructor() {
        //construcion de rutas
        this.config();
    }
    //Configuracion de rutas
    config(): void{
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.delete('/:id', gamesController.delete);
        this.router.put('/:id', gamesController.update);
    }
}

const gamesRoute = new GamesRoute();
export default gamesRoute.router;