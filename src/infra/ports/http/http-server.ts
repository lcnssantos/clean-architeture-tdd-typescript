import {PortsContract} from "../contracts/ports-contract";
import {Application, Router} from 'express'
import * as express from 'express'
import {LoggerContract} from "../contracts/logger.contract";
import {router} from './routes'
import * as bodyParser from "body-parser";
import * as cors from 'cors'

export class HttpServer implements PortsContract {
    private app: Application;

    constructor(private port: number, private logger: LoggerContract) {
        this.app = express()
        this.port = port;
        this.addMiddlewares()
        this.useRoutes(router)
    }

    async start() {
        try {
            await this.startExpress()
            this.logger.info("Express Started!")
        } catch {
            this.logger.error("Error to start express")
        }
    }

    private async startExpress() {
        this.app.listen(this.port)
    }

    private addMiddlewares() {
        this.app.use(cors())
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(bodyParser.json())
    }

    private useRoutes(routes: Router){
        this.app.use(routes)
    }
}