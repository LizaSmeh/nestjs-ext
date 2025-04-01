import { Get, Injectable, Post } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBook } from './data/book';

@Injectable()
export class BooksService {
    private readonly books: Book[] = []

    @Get()
    GetBooks(): Book[] {
        return this.books
    }

    @Post()
    createBook(createBook: CreateBook) {
        this.books.push(createBook)
    }
}