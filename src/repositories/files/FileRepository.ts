import {RepositoryContract} from "../../usecases/contracts/RepositoryContract";
import {existsSync, unlinkSync, writeFileSync, readFileSync} from 'fs'

export class FileRepository<T> implements RepositoryContract<T> {

    private fileName: string;

    constructor(private type: new(data) => T, fileName: string) {
        this.fileName= fileName+'.json';
        this.allocateFile(this.fileName);
    }

    add(data: T) {
        const dataAtRepository = this.findAll()
        dataAtRepository.push(data)
        writeFileSync(this.fileName, JSON.stringify(dataAtRepository), 'UTF8')
    }

    findAll(): Array<T> {
        const data = JSON.parse(readFileSync(this.fileName).toString()) || []
        return data.map(data => new this.type(data))
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