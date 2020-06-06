export interface RepositoryContract<T> {
    findAll(): Array<T>
    add(data: T)
    deleteAll()
}