import { Request, Response } from 'express';
//Llama a la base de datos
import db from '../database';

class GamesController {
    //Metodos que controlan los resultados de las rutas
    //Para hacer llamadas asincronas se utiliza async y el await
    //se declara que eltipo de funcion sera async (asincrona)
    public async list(req: Request, res: Response): Promise<void> {
        //Para evitar el uso de las promesas se utiliza el await para indicar al
        //programa que tome una pausa en esa linea de codigo hasta que le retornen
        //algun valor.
        const games = await db.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const game = await db.query('SELECT * FROM games WHERE id = ?', [id]);
        console.log(game);
        if(game.length > 0){
            return res.json(game[0]);
        }
        res.status(404).json({msg: "Game doesn't exists"});
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await db.query('INSERT INTO games set ?', [req.body])
        res.json({text: 'Funciona'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('Delete From games Where id = ?', [id]);
        res.json({text: 'Eliminado un juego' + id});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        db.query('Update games set ? Where id = ?', [req.body, id]);
        res.json({ msg: "Game was updated"});
    }
}
const gamesController = new GamesController();
export default gamesController; 