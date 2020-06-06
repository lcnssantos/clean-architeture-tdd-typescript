import {ParticipantRepositoryContract} from "../../usercases/contracts/ParticipantRepositoryContract";
import {existsSync, unlinkSync, writeFileSync, readFileSync} from 'fs'
import {Participant} from "../../entity/participant";

export class ParticipantFileRepository implements ParticipantRepositoryContract {
    private fileName: string;

    constructor() {
        this.fileName = 'participants.json'
        this.allocateFile(this.fileName)
    }

    add(participant: Participant) {
        const participants = this.findAll()
        participants.push(participant)
        writeFileSync(this.fileName, JSON.stringify(participants), 'UTF8')
    }

    findAll(): Array<Participant> {
        const data = JSON.parse(readFileSync(this.fileName).toString())
        return data.map(data => new Participant(data.name, data.email, data.score))
    }

    private allocateFile(fileName: string) {
        if(!existsSync(fileName)){
            writeFileSync(fileName, JSON.stringify([]), 'UTF8')
        }
    }

    deleteAll() {
        unlinkSync(this.fileName)
        this.allocateFile(this.fileName)
    }
}