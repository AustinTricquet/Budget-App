import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sum-detail-toggle',
  templateUrl: './sum-detail-toggle.component.html',
  styleUrls: ['./sum-detail-toggle.component.scss']
})
export class SumDetailToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedValue: String = "Summary";

  @Output() selectedValueEvent = new EventEmitter<string>();
  

  selectionChanged(item) {
    console.log("Selected value: " + item.value);

    this.selectedValueEvent.emit(item.value);

    this.selectedValue = item.value;

  }

}
