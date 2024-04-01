import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  public formSubmitted = false;
  public success = false;
  
  public booksForm = this.fb.group({
    name: ['Test', Validators.required ],
    author: ['test-author', Validators.required ],
    date: ['1900', Validators.required ],
    calificacion: ['', Validators.required ],
  });

  constructor(  private fb: FormBuilder,
                private bookService: BookService,
                private router: Router ) { 

                }

  createBook() {
    this.formSubmitted = true;
    console.log( this.booksForm.value );

    if ( this.booksForm.invalid ) {
      return;
    }

    // Realizar el posteo
    this.success = false
    
    this.bookService.createBook( this.booksForm.value )
        .subscribe( resp => {
          this.success = true
          // Navegar al Dashboard
          //this.router.navigateByUrl('/');
          console.log('Libro agregado');
          console.log(resp)
          
        }, (err) => {
          // Si sucede un error
          console.warn(err);
        });


  }

  campoNoValido( campo: string ): boolean {
    
    if ( this.booksForm.get(campo)?.invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }
}
