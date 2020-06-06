import {Participant} from "../../domain/entity/participant";
import {RepositoryContract} from "../repositories/RepositoryContract";

export class ParticipantUserCase {
    static addParticipant(participant: Participant, participantRepo: RepositoryContract<Participant>) {
        participantRepo.add(participant)
    }
}