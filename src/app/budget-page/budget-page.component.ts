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
      costBasis: 'week',
      lineItems: [
        {
          name: "Austin's Income",
          amount: [
            {
              week: 926,
              month: 4013,
            }
          ]
        },
        {
          name: "Courtney's Income",
          amount: [
            {
              week: 606,
              month: 2626,
            }
          ]
        },
      ],
    },
    {
      category: 'Expenses',
      color: 'red',
      open: false,
      costBasis: 'week',
      lineItems: [
        {
          name: "Church Tithes",
          amount: [
            {
              week: 202,
              month: 875,
            }
          ]
        },
        {
          name: "Rent",
          amount: [
            {
              week: 248,
              month: 1074,
            }
          ]
        },
        {
          name: "Electric Bill",
          amount: [
            {
              week: 12,
              month: 50,
            }
          ]
        },
        {
          name: "Student Debt",
          amount: [
            {
              week: 211,
              month: 915,
            }
          ]
        },
        {
          name: "Car Loan",
          amount: [
            {
              week: 58,
              month: 251,
            }
          ]
        },
        {
          name: "Internet",
          amount: [
            {
              week: 10,
              month: 45,
            }
          ]
        },
        {
          name: "T-Mobile",
          amount: [
            {
              week: 36,
              month: 156,
            }
          ]
        },
        {
          name: "Storage Unit",
          amount: [
            {
              week: 4,
              month: 19,
            }
          ]
        },
        {
          name: "Car Wash Club",
          amount: [
            {
              week: 4,
              month: 18,
            }
          ]
        },
        {
          name: "Groceries",
          amount: [
            {
              week: 70,
              month: 303,
            }
          ]
        },
        {
          name: "Dog Food",
          amount: [
            {
              week: 16,
              month: 70,
            }
          ]
        },
        {
          name: "Fuel",
          amount: [
            {
              week: 58,
              month: 250,
            }
          ]
        },
      ],
    },
    {
      category: 'Savings',
      color: 'blue',
      open: false,
      costBasis: 'week',
      lineItems: [
        {
          name: "Vacation Fund",
          amount: [
            {
              week: 23,
              month: 100,
            }
          ]
        },
        {
          name: "Car Maintenance",
          amount: [
            {
              week: 17,
              month: 75,
            }
          ]
        },
        {
          name: "Gifts",
          amount: [
            {
              week: 2,
              month: 10,
            }
          ]
        },
        {
          name: "Irregular Expenses",
          amount: [
            {
              week: 40,
              month: 173,
            }
          ]
        },
        {
          name: "Emergency Savings",
          amount: [
            {
              week: 475,
              month: 2060,
            }
          ]
        },
      ],
    },
    {
      category: 'Spending',
      color: 'yellow',
      open: false,
      costBasis: 'week',
      lineItems: [
        {
          name: "Fun Money",
          amount: [
            {
              week: 45,
              month: 200,
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
    if ($event == "week") {
      for (let category of this.budgetCategories) {
        category.costBasis = "week"
      }
    }
    if ($event == "month") {
      for (let category of this.budgetCategories) {
        category.costBasis = "month"
      }
    }
  }

}
