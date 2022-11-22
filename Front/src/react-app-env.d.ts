
export interface ITaskProps {
    Id: number,
    Title:string,
    Description: string,
    Category:{
        id: number,
        name: string
    }
}

export interface ICustomersProps{
    Id: number,
    avatar: string,
    name: string,
    job: string,
    phone: string,
    email: string
}

export interface CategoriesProps{
    id: number,
    name: string 
}