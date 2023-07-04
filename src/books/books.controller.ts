import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.model';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: number): Book {
    return this.booksService.getBook(id);
  }

  @Post()
  addBook(@Body() book: Book): void {
    this.booksService.addBook(book);
  }

  @Put(':id')
  updateBook(@Param('id') id: number, @Body() book: Book): void {
    this.booksService.updateBook(id, book.title, book.author);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: number): void {
    this.booksService.deleteBook(id);
  }
}
