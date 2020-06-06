import {FileRepository} from "../infra/repositories/files/FileRepository";
import {Participant} from "../domain/entity/participant";


export const ParticipantRepositoryFactory = () => {
    return new FileRepository<Participant>(Participant, 'participants')
}