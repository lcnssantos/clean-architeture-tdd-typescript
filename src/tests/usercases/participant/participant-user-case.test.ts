import {ParticipantRepositoryMock} from "../mocks/ParticipantRepository";
import {ParticipantUserCase} from "../../../usercases/participant";
import {Participant} from "../../../entity/participant";


test('Should add participant correctly', () => {
    const participantRepo = new ParticipantRepositoryMock()

    ParticipantUserCase.addParticipant(
        new Participant('Ciclano da Silva', 'ciclano@silva.com', 5),
        participantRepo
    )

    const participants = participantRepo.findAll()

    const participantInserted = participants.find(participant => participant.getEmail() === 'ciclano@silva.com')

    expect(participantInserted !== undefined).toBe(true)
})