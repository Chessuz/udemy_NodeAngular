import * as express from 'express';
import * as bodyParser from "body-parser";

import Database from './infra/database';
import newsController from './controller/newsController';
import NewsSchema from './models/newsSchema';


class StartUp{
    public app:express.Application;
    private _database: Database;
    private _bodyParser;


    constructor(){
        this.app = express();
        this._database = new Database();
        this._database.createConnection();
        this.middler();
        this.routes();
    }

    middler(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    routes(){
        this.app.route('/').get((req, res) => {
            res.send({versao: "2.5.3"})
        });
        this.app.route("/api/v1/news").get(newsController.get);
        this.app.route("/api/v1/news/:id").get(newsController.getById);
        this.app.route("/api/v1/news/").post(newsController.create);
        this.app.route("/api/v1/news/:id").put(newsController.update);
        this.app.route("/api/v1/news/:id").delete(newsController.delete);
    }
}



export default new StartUp();