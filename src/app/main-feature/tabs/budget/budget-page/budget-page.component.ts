import { Component, OnInit, Input } from '@angular/core';


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
      children: [
        {
          name: "Austin's Income",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 926,
              Monthly: 4013,
            }
          ]
        },
        {
          name: "Courtney's Income",
          open: true,
          children: [],
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
      children: [
        {
          name: "Church Tithes",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 202,
              Monthly: 875,
            }
          ],
          due: "8th",
        },
        {
          name: "Rent",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 248,
              Monthly: 1074,
            }
          ],
          due: "2nd",
        },
        {
          name: "Electric Bill",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 12,
              Monthly: 50,
            }
          ],
          due: "25th",
        },
        {
          name: "Student Debt",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 211,
              Monthly: 915,
            }
          ],
          due: "17th",
        },
        {
          name: "Car Loan",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 58,
              Monthly: 251,
            }
          ],
          due: "24th",
        },
        {
          name: "Internet",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 10,
              Monthly: 45,
            }
          ],
          due: "26th",
        },
        {
          name: "T-Mobile",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 36,
              Monthly: 156,
            }
          ],
          due: "26th",
        },
        {
          name: "Storage Unit",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 4,
              Monthly: 19,
            }
          ],
          due: "3rd",
        },
        {
          name: "Car Wash Club",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 4,
              Monthly: 18,
            }
          ],
          due: "13th",
        },
        {
          name: "Irregular Expenses",
          open: false,
          children: [
            {
              name: "Amazon",
              open: true,
              children: [],
              amount: [
                {
                  Weekly: 70,
                  Monthly: 303,
                }
              ],
              due: "19"
            },
            {
              name: "Geico",
              open: true,
              amount: [
                {
                  Weekly: 70,
                  Monthly: 303,
                }
              ],
              due: "30"
            }
          ],
        },
        {
          name: "Groceries",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 70,
              Monthly: 303,
            }
          ],
          due: "19th",
        },
        {
          name: "Dog Food",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 16,
              Monthly: 70,
            }
          ],
          due: "1st",
        },
        {
          name: "Fuel",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 58,
              Monthly: 250,
            }
          ],
          due: "10th",
        },
      ],
    },
    {
      category: 'Savings',
      color: 'blue',
      open: false,
      costBasis: 'Weekly',
      children: [
        {
          name: "Vacation Fund",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 23,
              Monthly: 100,
            }
          ]
        },
        {
          name: "Car Maintenance",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 17,
              Monthly: 75,
            }
          ]
        },
        {
          name: "Gifts",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 2,
              Monthly: 10,
            }
          ]
        },
        {
          name: "Irregular Expenses",
          open: true,
          children: [],
          amount: [
            {
              Weekly: 40,
              Monthly: 173,
            }
          ]
        },
        {
          name: "Emergency Savings",
          open: true,
          children: [],
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
      children: [
        {
          name: "Fun Money",
          open: true,
          children: [],
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
