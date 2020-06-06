import { Participant } from "src/entity/participant";

export interface ParticipantRepositoryContract {
    findAll(): Array<Participant>
    add(participant: Participant)
    deleteAll()
}