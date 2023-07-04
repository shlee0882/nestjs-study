import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getAllBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    return this.books.find(book => book.id === id);
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  updateBook(id: number, title: string, author: string): void {
    const book = this.books.find(book => book.id === id);
    if (book) {
      book.title = title;
      book.author = author;
    }
  }
  
  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}