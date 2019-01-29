//Importar express
import express, { Application } from 'express';

import morgan from 'morgan';
import cors from 'cors';

import indexRoute from './routes/indexRoute';
import gamesRoute from './routes/gamesRoute';

class Server {
    //Variable de aplicacion
    public app: Application;
    //Constructor donde se puede inicializar variables
    constructor() {
        this.app = express();
        this.config();
        this.route();
    }
    //Configuracion y  middlewares
    config(): void {
        this.app.set('port', 3000 || process.env.PORT);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    //Declaran las rutas
    route(): void {
        this.app.use('/', indexRoute);
        this.app.use('/api/games', gamesRoute);
    }
    //Metodo para iniciar el servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
//Declaracion de clase
const server = new Server();
//llamada a clase para ejecucion de servidor
server.start();