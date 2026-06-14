# Expense Tracker

## About the Project

The Expense Tracker is a web application built with HTML, Tailwind CSS, and JavaScript that helps users record and manage their daily expenses. Users can add expenses with a description, amount, and category, view all recorded expenses, remove unwanted entries, and filter expenses by category.

---

## Features

- Add new expenses
- Delete expenses
- Filter expenses by category
- Calculate total expenses automatically
- Store data using localStorage
- Responsive design using Tailwind CSS
- Object-oriented implementation with classes
- Jest unit tests

---

## Built With

- HTML5
- Tailwind CSS
- JavaScript
- localStorage
- Jest

---

## How It Works

1. Enter an expense description.
2. Enter the expense amount.
3. Select a category.
4. Click **Add Expense**.
5. The expense is displayed in the list and added to the total.
6. Expenses are automatically saved to localStorage and remain after page refresh.
7. Use the category filter to display specific expense types.

---

## Project Structure

```text
expense-tracker/
├── index.html
├── script.js
├── expenseTracker.test.js
└── README.md
```

---

## Testing

Jest tests were created for:

- Adding expenses
- Removing expenses
- Calculating total expenses
- Filtering expenses by category

---

## Future Improvements

- Edit existing expenses
- Add monthly and weekly summaries
- Add expense charts and visual reports
- Integrate a real finance or budgeting API
- Add user accounts and authentication

---

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/tuhamaina-blip/expense-tracker
```

2. Open the project folder.

3. Open `index.html` in your browser.