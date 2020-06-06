import {Participant} from "./participant";

export class Draw {

    private participants: Array<Participant>

    constructor(
       private minScore: number
    ) {}

    addParticipants = (participants: Array<Participant>): number => {
        participants = participants.filter(participant => participant.getScore() > this.minScore )
        this.participants = participants
        return this.participants.length
    }

    do(): Participant {
        const numberOfParticipants = this.participants.length;
        const numberSorted = this.generateRandomNumber(0, numberOfParticipants - 1);
        return this.participants[numberSorted]
    }

    private generateRandomNumber(min: number, max: number): number {
        const interval = (max - min)
        const randNumber = Math.ceil(Math.random() * interval)
        return randNumber + min
    }

    getParticipants() {
        return this.participants
    }
}