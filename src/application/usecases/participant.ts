import {Participant} from "../../domain/entity/participant";
import {RepositoryContract} from "../repositories/RepositoryContract";

export class ParticipantUseCase {
    static async addParticipant(participant: Participant, participantRepo: RepositoryContract<Participant>) {
        return participantRepo.add(participant)
    }
}