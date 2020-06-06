import {Participant} from "../entity/participant";
import {RepositoryContract} from "./contracts/RepositoryContract";

export class ParticipantUserCase {
    static addParticipant(participant: Participant, participantRepo: RepositoryContract<Participant>) {
        participantRepo.add(participant)
    }
}