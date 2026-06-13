class Expense {
    constructor(description, amount, category) {
        this.description = description;
        this.amount = Number(amount);
        this.category = category;
    }
}

class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }

    addExpense(expense) {
        this.expenses.push(expense);
    }

    removeExpense(index) {
        this.expenses.splice(index, 1);
    }

    getTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    filterByCategory(category) {
        return this.expenses.filter(expense => expense.category === category);
    }
}

describe("Expense Tracker", () => {

    test("adds an expense", () => {
        const tracker = new ExpenseTracker();
        tracker.addExpense(new Expense("Lunch", 10, "Food"));
        expect(tracker.expenses.length).toBe(1);
    });

    test("removes an expense", () => {
        const tracker = new ExpenseTracker();
        tracker.addExpense(new Expense("Lunch", 10, "Food"));
        tracker.removeExpense(0);
        expect(tracker.expenses.length).toBe(0);
    });

    test("calculates total expenses", () => {
        const tracker = new ExpenseTracker();
        tracker.addExpense(new Expense("Lunch", 10, "Food"));
        tracker.addExpense(new Expense("Bus", 5, "Transport"));
        expect(tracker.getTotalExpenses()).toBe(15);
    });

    test("filters expenses by category", () => {

        const tracker = new ExpenseTracker();
        tracker.addExpense(new Expense("Lunch", 10, "Food"));
        tracker.addExpense(new Expense("Bus", 5, "Transport"));
        const filtered = tracker.filterByCategory("Food");
        expect(filtered.length).toBe(1);
        expect(filtered[0].category).toBe("Food");
    });

});