import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { InterceptorService } from './services/interceptor.service';
import { CategoryComponent } from './components/category/category.component';
import { AuthorService } from './services/authors.service';
import { UsersService } from './services/users.service';
import { HomeService } from './services/home.service';
import { RatingModule } from 'ng-starrating';
import { CommonModule } from '@angular/common';  
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbModule,
    RatingModule,

    // RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthorService,
    UsersService,
    HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
