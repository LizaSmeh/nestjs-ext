import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common'
import { BookDocument } from './schemas/book.shema'
import { BooksService } from './books.service'
import { CreateBook } from './interfaces/create-book'
import { UpdateBook } from './interfaces/update-book'
import { IParamId } from './interfaces/param-id'
import { HydratedDocument, QueryWithHelpers } from 'mongoose'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.booksService.getAll()
  }

  @Post()
  public createBook(@Body() body: CreateBook): Promise<BookDocument> {
    return this.booksService.create(body)
  }

  @Put(':id')
  public updateBook(
    @Param() { id }: IParamId,
    @Body() body: UpdateBook
  ): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
     
    return this.booksService.update(id, body)
  }

  @Delete(':id')
  public deleteBook(
    @Param() { id }: IParamId
  ): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
    
    return this.booksService.delete( id )
  }
}