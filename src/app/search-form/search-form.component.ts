import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  animations: [
    trigger('submitted', [
      state('active', style({ transform: 'translateY(0)' })),
      state('inactive', style({ transform: 'translateY(250px)' })),
      transition('inactive => active', animate('800ms ease-in-out')),
      transition('active => inactive', animate('800ms ease-in-out'))
    ])
  ]
})
export class SearchFormComponent implements OnInit {
  @Input() searchSumbitted: string;
  @Output() sumbittedValue = new EventEmitter<string>();
  constructor() { }
  displayDetail: boolean = false;
  submitted: string = 'inactive';
  changeSearchState(state: string){
    this.submitted = state;
  }
  sendSearch(searchValue: string){
    //console.log(searchValue)
    this.sumbittedValue.emit(searchValue);
  }
  ngOnInit() {
  }

}
