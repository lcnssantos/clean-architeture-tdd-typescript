import { Draw } from "../entity/draw";
import {RepositoryContract} from "./contracts/RepositoryContract";
import {Participant} from "../entity/participant";

export class DrawUserCase {
    static create(minScore: number): Draw {
        return new Draw(minScore)
    }

    static addParticipants(draw: Draw, participantRepo: RepositoryContract<Participant>) {
        draw.addParticipants(participantRepo.findAll())
    }

    static getWinner(draw: Draw): Participant {
        return draw.do()
    }
}