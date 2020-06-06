export class Participant {

    private name: string;
    private email: string;
    private score: number;

    constructor(data: {name: string, email: string, score: number}) {
        this.name = data.name;
        this.email = data.email;
        this.score = data.score;
    }

    getScore() {
        return this.score;
    }

    getEmail() {
        return this.email
    }
}
