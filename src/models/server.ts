import express, { Application, Request, Response} from 'express';
import routesUser from '../routes/user.route';
import routesProduct from '../routes/product.route';
import db from '../db/connectiondb'
import cors from 'cors'

class Server{

    private app: Application;
    private port: string;
    constructor(){
       // console.log(process.env.PORT);
        this.app= express();
        this.port = process.env.PORT ||'3001';
        this.listen();
        this.midlewares(); //Siempre antes de los routes
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        });

    }

    routes(){
        this.app.get('/', (req : Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })

        this.app.use('/api/users', routesUser);
        this.app.use('/api/products', routesProduct);
    }


    midlewares(){
        /** Parseamos el Body */
        this.app.use(express.json());

        //Cors
        this.app.use(cors())

    }

    async dbConnect(){
        try {
            await db.authenticate();
            console.log('Base datos conectada exitosamente')
        } catch (error) {
            console.error('Error conecxion DDBB'+ error)
        }
     

    }
}

export default Server;