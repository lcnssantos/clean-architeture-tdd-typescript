import {Participant} from "../../entity/participant";
import {Draw} from '../../entity/draw'

const getParticipants = (number: number): Array<Participant> => {
    const participants: Array<Participant> = []

    while(number) {
        participants.push(new Participant(
            `Fulano ${number}`,
            `fulano${number}@fulano.com`,
            Math.ceil(Math.random() * 10)
        ))

        number--
    }

    return participants
}

const filterParticipantsByScore = (participants: Array<Participant>, minScore: number): Array<Participant> => {
    return participants.filter(participant => participant.getScore() > minScore)
}

test('Should put only participants with score above minimum', () => {
    const participants = getParticipants(10)
    const participantsFiltered = filterParticipantsByScore(participants, 5)

    const draw = new Draw(5)

    expect(draw.addParticipants(participants)).toBe(participantsFiltered.length)
})

test('Should select one participant', () => {
    const participants = getParticipants(10);
    const participantsFiltered = filterParticipantsByScore(participants, 5)

    const draw = new Draw(5)
    
    draw.addParticipants(participantsFiltered)
    
    const choosenParticipant = draw.do()

    const participantIsValid = participantsFiltered.find(participant => participant.getEmail() === choosenParticipant.getEmail()) !== undefined

    expect(participantIsValid).toBe(true)
})