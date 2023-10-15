import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchText : string = "";
  @Output() searchTextEmitter = new EventEmitter<string>();

  updateSearchText($event: any) {
    this.searchText = $event.target.value;
    this.searchTextEmitter.emit(this.searchText);
  }
}
