import { Draw } from "../entity/draw";
import {ParticipantRepositoryContract} from "./contracts/ParticipantRepositoryContract";
import {Participant} from "../entity/participant";

export class DrawUserCase {
    static create(minScore: number): Draw {
        return new Draw(5)
    }

    static addParticipants(draw: Draw, participantRepo: ParticipantRepositoryContract) {
        draw.addParticipants(participantRepo.findAll())
    }

    static getWinner(draw: Draw): Participant {
        return draw.do()
    }
}