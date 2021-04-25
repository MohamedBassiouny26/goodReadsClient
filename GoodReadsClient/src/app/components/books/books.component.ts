import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { HomeService } from 'src/app/services/home.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]
  constructor(private bookService: BooksService ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res: Book[]) => this.books = res)
  }
}


