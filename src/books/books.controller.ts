import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';
import { CreateBook } from './data/book'

@Controller('books')
export class BooksController {
  constructor(private readonly BooksService: BooksService) {}

  @Get()
  getBooks(): Book[] {
    return this.BooksService.GetBooks()
  }

  @Post()
  createBook(@Body() createBook: CreateBook): void {
    this.BooksService.createBook(createBook)
  }
}