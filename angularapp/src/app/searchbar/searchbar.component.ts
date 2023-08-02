import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  enteredSearchValue: string = '';

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
      this.searchTextChanged.emit(this.enteredSearchValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}