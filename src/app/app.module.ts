import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BooksComponent } from './pages/books/books.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AddBookComponent,
    NopagefoundComponent,
    BooksComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
