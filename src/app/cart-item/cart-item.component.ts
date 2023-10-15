import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../cartItem';
import { Book } from '../book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem! : CartItem ;
  @Input() index: number = 0;

  @Output() increaseQuantity = new EventEmitter<Book>();
  @Output() decreaseQuantity = new EventEmitter<Book>();

  increaseCartQuantity(book: Book) {
    this.increaseQuantity.emit(book);
  }
  decreaseCartQuantity(book: Book) {
    this.decreaseQuantity.emit(book);
  }
}
