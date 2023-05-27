export interface IChild {
    name: string,
    age: string
}

export interface IPeople {
    name?: string,
    age?: number,
    children?: IChild[]
}

export interface IPeopleStore {
    people: IPeople
}