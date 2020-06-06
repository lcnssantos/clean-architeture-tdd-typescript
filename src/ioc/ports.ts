import {HttpServer} from "../infra/ports/http/http-server";
import {LoggerHelperFactory} from "./helper";

export const HttpPortFactory = (port: number) => new HttpServer(port, LoggerHelperFactory())