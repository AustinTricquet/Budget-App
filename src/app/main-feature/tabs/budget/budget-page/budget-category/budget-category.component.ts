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
      (category.children).forEach(child => {
        try {
          sum += child.amount[0].Weekly
        } catch {
          (child.children).forEach(child => {
            sum += child.amount[0].Weekly
          });
        }
      });
      return sum
    }
    if (category.costBasis == "Monthly") {
      let sum = 0;
      (category.children).forEach(child => {
        try {
          sum += child.amount[0].Monthly
        } catch {
          (child.children).forEach(child => {
            sum += child.amount[0].Monthly
          });
        }
        
      });
      return sum
    }
  }

  getAmount(category, child) {
    if (category.costBasis == "Weekly") {
      try { 
        return child.amount[0].Weekly
      } catch {
        let sum = 0;
        (child.children).forEach(child => {
          sum += child.amount[0].Weekly
        });
        return sum
      }
    }
    if (category.costBasis == "Monthly") {
      try {
        return child.amount[0].Monthly
      } catch {
        let sum = 0;
        (child.children).forEach(child => {
          sum += child.amount[0].Monthly
        });
        return sum
      }
    }
  }

  myclick():any {
    console.log("clicked!!");
  }
}
