import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  public books: Book[] = [];
  public load: boolean = true;

  constructor( private bookService: BookService,
                private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {

    this.load = true;
    this.bookService.getBooks()
        .subscribe( books => {
          this.load = false;
          this.books = books;

          for (let i = 0; i < this.books.length; i++) {
            if (!this.books[i].calificacion) {
              this.books[i].calificacion = 2
            }
          }
          
        })

  }

  updateBook(id: any) {
    this.router.navigate(['/update-book', id]);
  }

  deleteBook(id: any) {
    Swal.fire({
      title: '¿Estas seguro de eliminar libro?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
      },
    }).then((result) => {
      if (result.isConfirmed) {

        this.bookService.deleteBook(id)
        .subscribe( book => {
          
          if (book) {

            
            this.getBooks();
          }
        });
        
        Swal.fire('El libro ha sido eliminado!', '', 'success')
      } 
    })
  }
}
