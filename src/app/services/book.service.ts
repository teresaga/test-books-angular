import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookForm } from '../interfaces/book.interface';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public base_url = 'http://localhost:3000/book'

  constructor( private http: HttpClient) { }

  getBooks() {

    return this.http.get<Book[]>( this.base_url ).pipe(
      map( (resp:  Book[] ) => resp ) 
    );
  }
  
  getBookById( _id: string ): Observable<Book>  {
    const url = `${ this.base_url }/${ _id }`;
    return this.http.get<Book>( url);
  }

  createBook( formData: any) {
    return this.http.post(this.base_url, formData);
  }
  
  updateBook( _id: string, book: any  ) {
    const url = `${ this.base_url }/${ _id }`;
    return this.http.put( url, book);
  }

  deleteBook( _id: string ) {
    const url = `${ this.base_url }/${ _id }`;
    return this.http.delete( url );
  }

}
