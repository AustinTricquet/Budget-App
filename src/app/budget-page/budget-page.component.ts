import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss']
})
export class BudgetPageComponent implements OnInit {

  budgetCategories = [
    {
      category: 'Income',
      color: 'green',
      open: false,
      lineItems: [
        {
          name: "Austin's Income",
          amount: 926,
        },
        {
          name: "Courtney's Income",
          amount: 606,
        },
      ],
    },
    {
      category: 'Expenses',
      color: 'red',
      open: false,
      lineItems: [
        {
          name: "Church Tithes",
          amount: 202,
        },
        {
          name: "Rent",
          amount: 248,
        },
        {
          name: "Electric Bill",
          amount: 12,
        },
        {
          name: "Student Debt",
          amount: 211,
        },
        {
          name: "Car Loan",
          amount: 58,
        },
        {
          name: "Internet",
          amount: 10,
        },
        {
          name: "T-Mobile",
          amount: 36,
        },
        {
          name: "Storage Unit",
          amount: 4,
        },
        {
          name: "Car Wash Club",
          amount: 4,
        },
        {
          name: "Groceries",
          amount: 70,
        },
        {
          name: "Dog Food",
          amount: 16,
        },
        {
          name: "Fuel",
          amount: 58,
        },
      ],
    },
    {
      category: 'Savings',
      color: 'blue',
      open: false,
      lineItems: [
        {
          name: "Vacation Fund",
          amount: 23,
        },
        {
          name: "Car Maintenance",
          amount: 17,
        },
        {
          name: "Gifts",
          amount: 2,
        },
        {
          name: "Irregular Expenses",
          amount: 40,
        },
        {
          name: "Emergency Savings",
          amount: 475,
        },
      ],
    },
    {
      category: 'Spending',
      color: 'yellow',
      open: false,
      lineItems: [
        {
          name: "Fun Money",
          amount: 45,
        }
      ],
    },
  ]


  constructor() { }

  ngOnInit() {
  }

  receiveSelectedValue($event) {
    if ($event == "Detail") {
      for (let category of this.budgetCategories) {
        category.open = true;
      }
      
    }
    if ($event == "Summary") {
      for (let category of this.budgetCategories) {
        category.open = false;
      }
      
    }
  }

}
