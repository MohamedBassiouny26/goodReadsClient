import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = 'http://13.59.136.94:8000/users/';
  header_object = new HttpHeaders().set("authorization", "Bearer " + this.auth.getToken());
  // options = new RequestOptions({ headers: this.header_object });

  constructor(private http: HttpClient, private auth: AuthService) { }
  getToken() {
    return this.auth.getToken()
  }
  getAllBooks(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/books`,);
  }
  getCurrentlyReading(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/currently-reading`);
  }
  getWantToRead(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/want-to-read`);
  }

  getRead(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}/read`);
  }
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: boolean) {
    this.messageSource.next(message)
  }
}

