export class Participant {
    constructor(
       private name: string,
       private email: string,
       private score: number
    ) {}

    getScore() {
        return this.score;
    }

    getEmail() {
        return this.email
    }
}
