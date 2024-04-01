import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  book: any = { name: '', author: '', date: '' }
  public bookId: string = '';
  public formSubmitted = false;
  public success = false;
  
  public booksForm = this.fb.group({
    name: ['', Validators.required ],
    author: ['', Validators.required ],
    date: ['', Validators.required ],
  });

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      console.log(this.bookId);

      this.bookService.getBookById(this.bookId).subscribe(book => {

        this.book = book;

        this.booksForm.patchValue({
          name: book.name,
          author: book.author,
          date: book.date
        });
      })
    });

  }

  updateBook() {
    this.formSubmitted = true;
    console.log( this.booksForm.value );

    if ( this.booksForm.invalid ) {
      return;
    }

    // Realizar el posteo
    this.success = false
    
    this.bookService.updateBook( this.bookId, this.booksForm.value )
        .subscribe( resp => {
          this.success = true
          
          console.log('Libro modificado');
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
