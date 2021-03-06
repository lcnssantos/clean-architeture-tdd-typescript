import {DrawUserCase} from "../../../../application/usecases/draw";
import {ParticipantRepositoryMock} from "../mocks/ParticipantRepository";
import {Draw} from "../../../../domain/entity/draw";
import {Participant} from "../../../../domain/entity/participant";


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

test('Should return all participants', () => {
    const draw = DrawUserCase.create(0)
    DrawUserCase.addParticipants(draw, new ParticipantRepositoryMock())
    expect(DrawUserCase.getParticipants(draw)).toBeInstanceOf(Array)
    expect(DrawUserCase.getParticipants(draw).length).toBe(3)
})