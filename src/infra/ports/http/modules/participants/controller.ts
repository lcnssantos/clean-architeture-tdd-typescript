import {Request, Response} from "express";
import {Participant} from "../../../../../domain/entity/participant";
import {ParticipantUseCase} from '../../../../../application/usecases/participant'
import {RepositoryContract} from "../../../../../application/repositories/RepositoryContract";
import {LoggerContract} from "../../../contracts/logger.contract";

export class ParticipantController {
    constructor(
        private participantRepo: RepositoryContract<Participant>,
        private Logger: LoggerContract
    ) {}


    create = async (request: Request, response: Response) => {
        const participant = new Participant(request.body)

        try {
            await ParticipantUseCase.addParticipant(participant, this.participantRepo)
            response.status(201).send()
        } catch (e){
            this.Logger.error(e)
            response.status(500).send()
        }
    }
}
