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
      costBasis: 'Weekly',
      lineItems: [
        {
          name: "Austin's Income",
          amount: [
            {
              Weekly: 926,
              Monthly: 4013,
            }
          ]
        },
        {
          name: "Courtney's Income",
          amount: [
            {
              Weekly: 606,
              Monthly: 2626,
            }
          ]
        },
      ],
    },
    {
      category: 'Expenses',
      color: 'red',
      open: false,
      costBasis: 'Weekly',
      lineItems: [
        {
          name: "Church Tithes",
          amount: [
            {
              Weekly: 202,
              Monthly: 875,
            }
          ]
        },
        {
          name: "Rent",
          amount: [
            {
              Weekly: 248,
              Monthly: 1074,
            }
          ]
        },
        {
          name: "Electric Bill",
          amount: [
            {
              Weekly: 12,
              Monthly: 50,
            }
          ]
        },
        {
          name: "Student Debt",
          amount: [
            {
              Weekly: 211,
              Monthly: 915,
            }
          ]
        },
        {
          name: "Car Loan",
          amount: [
            {
              Weekly: 58,
              Monthly: 251,
            }
          ]
        },
        {
          name: "Internet",
          amount: [
            {
              Weekly: 10,
              Monthly: 45,
            }
          ]
        },
        {
          name: "T-Mobile",
          amount: [
            {
              Weekly: 36,
              Monthly: 156,
            }
          ]
        },
        {
          name: "Storage Unit",
          amount: [
            {
              Weekly: 4,
              Monthly: 19,
            }
          ]
        },
        {
          name: "Car Wash Club",
          amount: [
            {
              Weekly: 4,
              Monthly: 18,
            }
          ]
        },
        {
          name: "Groceries",
          amount: [
            {
              Weekly: 70,
              Monthly: 303,
            }
          ]
        },
        {
          name: "Dog Food",
          amount: [
            {
              Weekly: 16,
              Monthly: 70,
            }
          ]
        },
        {
          name: "Fuel",
          amount: [
            {
              Weekly: 58,
              Monthly: 250,
            }
          ]
        },
      ],
    },
    {
      category: 'Savings',
      color: 'blue',
      open: false,
      costBasis: 'Weekly',
      lineItems: [
        {
          name: "Vacation Fund",
          amount: [
            {
              Weekly: 23,
              Monthly: 100,
            }
          ]
        },
        {
          name: "Car Maintenance",
          amount: [
            {
              Weekly: 17,
              Monthly: 75,
            }
          ]
        },
        {
          name: "Gifts",
          amount: [
            {
              Weekly: 2,
              Monthly: 10,
            }
          ]
        },
        {
          name: "Irregular Expenses",
          amount: [
            {
              Weekly: 40,
              Monthly: 173,
            }
          ]
        },
        {
          name: "Emergency Savings",
          amount: [
            {
              Weekly: 475,
              Monthly: 2060,
            }
          ]
        },
      ],
    },
    {
      category: 'Spending',
      color: 'yellow',
      open: false,
      costBasis: 'Weekly',
      lineItems: [
        {
          name: "Fun Money",
          amount: [
            {
              Weekly: 45,
              Monthly: 200,
            }
          ]
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
    if ($event == "Weekly") {
      for (let category of this.budgetCategories) {
        category.costBasis = "Weekly"
      }
    }
    if ($event == "Monthly") {
      for (let category of this.budgetCategories) {
        category.costBasis = "Monthly"
      }
    }
  }

}
