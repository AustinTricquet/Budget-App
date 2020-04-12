import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-week-month-toggle',
  templateUrl: './week-month-toggle.component.html',
  styleUrls: ['./week-month-toggle.component.scss']
})
export class WeekMonthToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedValue2: String = "week";

  @Output() selectedValueEvent2 = new EventEmitter<string>();
  

  selectionChanged(item) {
    console.log("Selected value: " + item.value);

    this.selectedValueEvent2.emit(item.value);

    this.selectedValue2 = item.value;

  }

}
