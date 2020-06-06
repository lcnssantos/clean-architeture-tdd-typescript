import {FileRepository} from "../infra/repositories/files/FileRepository";
import {Participant} from "../domain/entity/participant";
import {MemoryRepository} from "../infra/repositories/memory/MemoryRepository";
import {RepositoryContract} from "../application/repositories/RepositoryContract";

var ParticipantRepository: RepositoryContract<Participant>;

export const ParticipantFileRepositoryFactory = () => {
    return new FileRepository<Participant>(Participant, 'participants')
}

export const ParticipantInMemoryRepositoryFactory = () => {
    return new MemoryRepository<Participant>()
}

export const ParticipantRepositoryFactory = () => {
    if(!ParticipantRepository) {
        ParticipantRepository = ParticipantFileRepositoryFactory()
    }

    return ParticipantRepository
}