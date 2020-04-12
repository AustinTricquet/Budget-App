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

  

  sum(category) {
    if (category.costBasis == "week") {
      let sum = 0;
      (category.lineItems).forEach(item => {
        sum += item.amount[0].week
      });
      return sum
    }
    if (category.costBasis == "month") {
      let sum = 0;
      (category.lineItems).forEach(item => {
        sum += item.amount[0].month
      });
      return sum
    }
  }

  getAmount(category, lineItem) {
    if (category.costBasis == "week") {
      return lineItem.amount[0].week
    }
    if (category.costBasis == "month") {
      return lineItem.amount[0].month
    }
    
  }

  

}
