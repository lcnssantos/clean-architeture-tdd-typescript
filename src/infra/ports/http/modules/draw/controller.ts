import {Request, Response} from "express";
import {DrawUserCase} from "../../../../../application/usecases/draw";
import {RepositoryContract} from "../../../../../application/repositories/RepositoryContract";
import {Participant} from "../../../../../domain/entity/participant";
import {LoggerContract} from "../../../contracts/logger.contract";


export class DrawController {

    constructor(
        private participantRepo: RepositoryContract<Participant>,
        private Logger: LoggerContract
    ) {}

    do = async (request: Request, response: Response) => {
        try {
            const draw = DrawUserCase.create(parseInt(request.params.minScore))
            const participants = DrawUserCase.addParticipants(draw, this.participantRepo)
            const winner = DrawUserCase.getWinner(draw)
            response.send({
                winner,
                totalParticipants: participants,
                allParticipants: DrawUserCase.getParticipants(draw)
            })
        } catch {
            response.status(500).send()
        }
    }
}