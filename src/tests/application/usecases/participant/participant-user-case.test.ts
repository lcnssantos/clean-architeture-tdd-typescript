import {ParticipantRepositoryMock} from "../mocks/ParticipantRepository";
import {ParticipantUserCase} from "../../../../application/usecases/participant";
import {Participant} from "../../../../domain/entity/participant";


test('Should add participant correctly', () => {
    const participantRepo = new ParticipantRepositoryMock()

    participantRepo.deleteAll()

    ParticipantUserCase.addParticipant(
        new Participant({
            name: 'Ciclano da Silva',
            email: 'ciclano@silva.com',
            score: 5
        }),
        participantRepo
    )

    const participants = participantRepo.findAll()

    const participantInserted = participants.find(participant => participant.getEmail() === 'ciclano@silva.com')

    expect(participantInserted !== undefined).toBe(true)
})