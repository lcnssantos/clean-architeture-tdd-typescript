import {ParticipantFileRepository} from "../../repositories/files/ParticipantFileRepository";
import {Participant} from "../../entity/participant";


test('Should add participant correctly', () => {
    const repo = new ParticipantFileRepository();

    repo.deleteAll()

    const participant = new Participant('Ciclano da Silva', 'ciclano@dasilva.com', 50)

    repo.add(participant)

    const participants = repo.findAll()

    const participantExist = participants.find(participant => participant.getEmail() === 'ciclano@dasilva.com') !== undefined

    expect(participantExist).toBe(true)
})

test('Should get all participants', () => {
    const repo = new ParticipantFileRepository()

    repo.deleteAll()

    repo.add(new Participant('Ciclano da Silva', 'ciclano@dasilva.com', 50))
    repo.add(new Participant('Beltrano da Silva', 'beltrano@dasilva.com', 50))

    const participants = repo.findAll()

    expect(participants.length).toBe(2)
})

