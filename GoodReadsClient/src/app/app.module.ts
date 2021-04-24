import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
// import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TestComponent,
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [NoopAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
