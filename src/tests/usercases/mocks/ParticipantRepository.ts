import {ParticipantRepositoryContract} from '../../../usercases/contracts/ParticipantRepositoryContract'
import {Participant} from "../../../entity/participant";

export class ParticipantRepositoryMock implements ParticipantRepositoryContract {

    private participants: Array<Participant>;

    constructor() {
        this.participants = [
            new Participant('Fulano1', 'fulano1@fulano.com', 5),
            new Participant('Fulano2', 'fulano2@fulano.com', 5),
            new Participant('Fulano3', 'fulano3@fulano.com', 7)
        ]
    }
    findAll(): Array<Participant> {
        return this.participants
    }

    add(participant: Participant) {
        this.participants.push(participant)
    }
}