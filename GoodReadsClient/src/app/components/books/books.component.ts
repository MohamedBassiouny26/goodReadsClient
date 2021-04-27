import { Component, OnInit,Input } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // books: Book[]
  constructor(private bookService: BooksService) { }
  @Input() books:Array<Book> = []
 

  subscriber:any;
  
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res: Book[]) => this.books = res)
  }
}


