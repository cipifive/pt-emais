export interface Item {
    id : number,
    name : string,
    proccessed?: boolean
}

export interface ExpensiveComponentProps {
    data : Item[]
}