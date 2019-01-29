//Lo mismo que en la ruta de juegos
import { Router } from 'express';
import {indexController} from '../controller/indexController';
class IndexRoute {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index);
    }
}

const indexRoute = new IndexRoute();
export default indexRoute.router;