import {Participant} from "../../../domain/entity/participant";
import {MemoryRepository} from "../../../infra/repositories/memory/MemoryRepository";


test('Should add data correctly', () => {
    const repo = new MemoryRepository<Participant>()

    repo.deleteAll()

    const participant = new Participant({
        name: 'Ciclano da Silva',
        email: 'ciclano@dasilva.com',
        score: 50
    })

    repo.add(participant)

    const participants = repo.findAll()

    const participantExist = participants.find(participant => participant.getEmail() === 'ciclano@dasilva.com') !== undefined

    expect(participantExist).toBe(true)
})

test('Should get all data', () => {
    const repo = new MemoryRepository<Participant>()

    repo.deleteAll()

    repo.add(new Participant({
        name: 'Ciclano da Silva',
        email: 'ciclano@dasilva.com',
        score: 50
    }))

    repo.add(new Participant({
        name: 'Beltrano da Silva',
        email: 'beltrano@dasilva.com',
        score: 50
    }))

    const participants = repo.findAll()

    expect(participants.length).toBe(2)
})
