import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
})
export class SearchComponent implements OnInit {

  searchVal = '';
  @Input() placeholder = '';
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.search.emit(this.searchVal);
  }

  clear(): void {
    this.searchVal = '';
    this.submit();
  }
}
