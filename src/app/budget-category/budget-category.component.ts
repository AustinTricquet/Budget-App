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
    if (category.costBasis == "Weekly") {
      let sum = 0;
      (category.lineItems).forEach(item => {
        sum += item.amount[0].Weekly
      });
      return sum
    }
    if (category.costBasis == "Monthly") {
      let sum = 0;
      (category.lineItems).forEach(item => {
        sum += item.amount[0].Monthly
      });
      return sum
    }
  }

  getAmount(category, lineItem) {
    if (category.costBasis == "Weekly") {
      return lineItem.amount[0].Weekly
    }
    if (category.costBasis == "Monthly") {
      return lineItem.amount[0].Monthly
    }
    
  }

  

}
