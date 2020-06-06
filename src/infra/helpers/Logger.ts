import {LoggerContract} from "../ports/contracts/logger.contract";

export class Logger implements LoggerContract {
    error(data: string) {
        console.error(data)
    }

    info(data: string) {
        console.log(data)
    }
}