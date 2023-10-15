import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book! : Book;
  @Output() toCartEmitter = new EventEmitter<Book>();

  addToCart(book: Book) {
    this.toCartEmitter.emit(book);
  }
}
