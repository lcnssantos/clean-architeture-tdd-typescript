import {DrawUserCase} from "../../../usecases/draw";
import {ParticipantRepositoryMock} from "../mocks/ParticipantRepository";
import {Draw} from "../../../entity/draw";
import {Participant} from "../../../entity/participant";


test('Should create and return Draw', () => {
    const draw = DrawUserCase.create(5);
    expect(draw).toBeInstanceOf(Draw)
})

test('Should add participant to draw', () => {
    const draw = DrawUserCase.create(5)
    DrawUserCase.addParticipants(draw, new ParticipantRepositoryMock())
    expect(draw.getParticipants().length).toBeGreaterThan(0)
})

test('Should select a winner', () => {
    const draw = DrawUserCase.create(5)
    DrawUserCase.addParticipants(draw, new ParticipantRepositoryMock())
    expect(DrawUserCase.getWinner(draw)).toBeInstanceOf(Participant)
})