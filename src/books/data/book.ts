import { Book } from "../interfaces/book.interface";

export class CreateBook implements Book{
    title: string
    description: string
    author: string
}