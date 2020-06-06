import {PortsContract} from "./contracts/ports-contract";
import {HttpPortFactory} from "../../ioc/ports";


export class Ignitor {
    static getPorts(): Array<PortsContract> {
        const ports: Array<PortsContract> = []
        ports.push(HttpPortFactory(3000))
        return ports;
    }
}