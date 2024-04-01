import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BooksComponent } from './pages/books/books.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
