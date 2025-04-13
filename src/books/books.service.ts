import { Injectable } from '@nestjs/common';

import { Model, Connection, HydratedDocument, QueryWithHelpers } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.shema';

import { CreateBook } from './interfaces/create-book';
import { UpdateBook } from './interfaces/update-book';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book.name) private BookModel: Model<BookDocument>
    ) {}

    public getAll(): Promise<BookDocument[]> {
        return this.BookModel.find().exec()
    }

    public create(data: CreateBook): Promise<BookDocument> {
        const book = new this.BookModel(data)
        return book.save()
    }

    public update(id: string, data: UpdateBook
    ): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.BookModel.findOneAndUpdate(
            { _id: id },
            data,
        )
    }

    public delete(id: string
    ): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.BookModel.findOneAndDelete({ _id: id })
    } 
}