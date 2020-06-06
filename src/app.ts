import {PortsContract} from "./infra/ports/contracts/ports-contract";
import {Ignitor} from "./infra/ports/ignitor";


class Application {
    private ports: Array<PortsContract>;

    constructor() {
        this.ports = Ignitor.getPorts()

        this.startPorts()
    }

    startPorts() {
        this.ports.forEach(port => port.start())
    }
}

const App = new Application()