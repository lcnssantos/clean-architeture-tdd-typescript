import {RepositoryContract} from "../../../application/repositories/RepositoryContract";


export class MemoryRepository<T> implements RepositoryContract<T> {

    private data: Array<T>

    constructor() {
        this.data = new Array<T>()
    }

    add(data: T) {
        this.data.push(data)
    }

    deleteAll() {
        this.data = []
    }

    findAll(): Array<T> {
        return this.data
    }

}