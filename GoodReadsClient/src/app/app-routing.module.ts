import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

import { RegisterComponent } from './components/register/register.component';

import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';

import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';

const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminLoginComponent },
      { path: 'panel', component: AdminPanelComponent },
    ],
  },

  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'categories', component: CategoriesComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent },
      { path: 'books', component: BooksComponent },
      { path: 'books/:id', component: BookDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'authors', component: AuthorsComponent, },
      { path: 'authors/:id', component: AuthorDetailsComponent },
      { path: 'landing-page', component: HeaderComponent },
    ],
  },
  // { path: '**', component: NotFoundComponent }

]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
