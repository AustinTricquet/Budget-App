import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-category',
  templateUrl: './budget-category.component.html',
  styleUrls: ['./budget-category.component.scss']
})
export class BudgetCategoryComponent implements OnInit {

  @Input() budgetCategories

  constructor() { }

  ngOnInit() {
  }

  sum(lineItems) {
    let sum = 0;
    lineItems.forEach(item => {
      sum += item.amount
    }); 
    return sum
  }

  

}
