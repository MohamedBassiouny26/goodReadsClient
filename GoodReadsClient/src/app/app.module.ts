
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AddBookComponent } from './components/admin/books-panel/add-book/add-book.component';
import { AddAuthorComponent } from './components/admin/author-panel/add-author/add-author.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AuthorPanelComponent } from './components/admin/author-panel/author-panel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryPanelComponent } from './components/admin/category-panel/category-panel.component';
import { BooksPanelComponent } from './components/admin/books-panel/books-panel.component';
import { EditAuthorComponent } from './components/admin/author-panel/edit-author/edit-author.component';
import { EditBookComponent } from './components/admin/books-panel/edit-book/edit-book.component';
import { EditItemComponent } from './components/admin/category-panel/edit-category/edit-category.component';
import { AddItemComponent } from './components/admin/category-panel/add-category/add-categroy.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorComponent } from './components/author/author.component';
import { RatingModule } from 'ng-starrating';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { ShortenPipe } from './shorten.pipe';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [
    HeaderComponent,
    TestComponent,
    AppComponent,
    HomeComponent,
    BooksComponent,
    LoginComponent,
    AdminComponent,
    AdminLoginComponent,
    AddBookComponent,
    AddAuthorComponent,
    AdminHeaderComponent,
    AdminPanelComponent,
    AuthorPanelComponent,
    AdminPanelComponent,
    CategoryPanelComponent,
    BooksPanelComponent,
    AuthorPanelComponent,
    EditAuthorComponent,
    EditBookComponent,
    EditItemComponent,
    AddItemComponent,
    RegisterComponent,
    UserComponent,
    CategoriesComponent,
    CategoryComponent,
    AuthorsComponent,
    AuthorComponent,
    HomeComponent,
    BookDetailsComponent,
    AuthorDetailsComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    RatingModule,
  ],
  providers: [NoopAnimationsModule,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
