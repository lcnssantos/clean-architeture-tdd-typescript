import {RepositoryContract} from '../../../../application/repositories/RepositoryContract'
import {Participant} from "../../../../domain/entity/participant";

export class ParticipantRepositoryMock implements RepositoryContract<Participant> {

    private participants: Array<Participant>;

    constructor() {
        this.participants = [
            new Participant({
                name: 'Fulano1',
                email: 'fulano1@fulano.com',
                score: 5
            }),
            new Participant({
                name: 'Fulano2',
                email: 'fulano2@fulano.com',
                score: 6
            }),
            new Participant({
                name: 'Fulano3',
                email: 'fulano3@fulano.com',
                score: 7
            })
        ]
    }
    findAll(): Array<Participant> {
        return this.participants
    }

    add(participant: Participant) {
        this.participants.push(participant)
    }

    deleteAll() {
        this.participants = []
    }
}