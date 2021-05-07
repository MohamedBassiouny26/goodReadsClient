import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  header_object = new HttpHeaders().set("authorization", "Bearer " + this.auth.getToken());

  constructor(private client: HttpClient, private auth: AuthService) {
    console.log('service ctor')
  }

  readonly baseURL: string = "http://localhost:8000/users";
  readonly userBooks: string = "http://localhost:8000/users/606623d776e86ac9ad8902fd/books";
  readonly catURL: string = "http://localhost:8000/categories";
  readonly authURL: string = "http://localhost:8000/authors";
  readonly bookURL: string = "http://localhost:8000/books";

  getUsers() {
    return this.client.get(this.baseURL, { observe: 'response' })
  }

  getAuthors() {
    return this.client.get(this.authURL, { observe: 'response' })
  }

  getCategories() {
    return this.client.get(this.catURL, { observe: 'response' })
  }

  getBooks() {
    return this.client.get(this.bookURL, { observe: 'response' })
  }

  getBookById(id: number) {
    return this.client.get(`${this.bookURL}/${id}`)
  }

  getUserBooks() {
    return this.client.get(this.userBooks, { observe: 'response', headers: this.header_object })
  }


  getUserById(id: number) {
    return this.client.get(`${this.baseURL}/${id}`)
  }

  getAuthorById(id: string) {
    return this.client.get(`${this.authURL}/${id}`)
  }

  getCategoryById(id: string) {
    return this.client.get(`${this.catURL}/${id}`)
  }

  deleteUser(id: number) {
    return this.client.delete(`${this.baseURL}/${id}`)
  }

  addUser(user: User) {
    return this.client.post(this.baseURL, user)
  }
  addReview(userId: string, body: Object) {
    return this.client.post(`${this.baseURL}/${userId}/add-review`, body, { headers: this.header_object })
  }
  editRating(userId: string, rating: Object) {
    return this.client.patch(`${this.baseURL}/${userId}/edit-rating`, rating, { headers: this.header_object })
  }
  editStatus(userId: string, status: Object) {
    return this.client.patch(`${this.baseURL}/${userId}/edit-status`, status, { headers: this.header_object })
  }
  addBook(userId: string, book: Object) {
    console.log("user Header ", this.header_object);
    return this.client.post(`${this.baseURL}/${userId}/add-book`, book, { headers: this.header_object })
  }
}


