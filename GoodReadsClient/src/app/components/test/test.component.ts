import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Book } from '../models/book';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
    searchForm = new FormGroup({
      searchVal: new FormControl(''),
    });
    books:Array<Book> = []
    filteredList :Array <Book> = this.books;
    logoutIcon:boolean = true
    constructor(private myService:BooksService,private modalService: NgbModal) { }

  

  ngOnInit() {

  }
  get search() {
    return this.searchForm.get('searchVal');
  }
  

  subscriber:any

  onSubmit() {
  

    this.subscriber = this.myService.getBooks()
    .subscribe((book:any)=>{
      console.log(book)
      this.books = book
        this.filteredList= this.books.filter((item)=>{
          return item.name.includes(this.search?.value)
        })    
        console.log(this.filteredList)
    },(err:any)=>{
      console.log(err)
    })
  }
  closeResult = '';
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
