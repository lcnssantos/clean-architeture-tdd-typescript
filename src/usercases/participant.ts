import {Participant} from "../entity/participant";
import {ParticipantRepositoryContract} from "./contracts/ParticipantRepositoryContract";

export class ParticipantUserCase {
    static addParticipant(participant: Participant, participantRepo: ParticipantRepositoryContract) {
        participantRepo.add(participant)
    }
}