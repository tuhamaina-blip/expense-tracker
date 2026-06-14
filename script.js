class Expense {
    constructor(description, amount, category) {
        this.description = description;
        this.amount = Number(amount);
        this.category = category;
    }
}

class ExpenseTracker {
    constructor() {
        this.expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    }

    addExpense(expense) {
        this.expenses = [...this.expenses, expense];
        this.save();
    }

    removeExpense(index) {
        this.expenses.splice(index, 1);
        this.save();
    }

    getTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    filterByCategory(category) {
        if (category === "All") {
            return this.expenses;
        }
        return this.expenses.filter(expense => expense.category === category);
    }
    save() {
        localStorage.setItem("expenses", JSON.stringify(this.expenses));
    }
}

const tracker = new ExpenseTracker();
const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalExpenses = document.getElementById("totalExpenses");
const filterCategory = document.getElementById("filterCategory");

function renderExpenses(expenses = tracker.expenses) {

    expenseList.innerHTML = "";
    expenses.forEach((expense, index) => {
        const { description, amount, category } = expense;
        const li = document.createElement("li");

        li.className = "bg-gray-100 border border-gray-200 rounded-lg p-4 flex justify-between items-center";
        li.innerHTML = `
            <div>
                <h3 class="font-semibold text-gray-800"> ${description}</h3>
                <p class="text-sm text-gray-600">${category}  $${amount}</p>
            </div>

            <button
                onclick="deleteExpense(${index})"
                class="bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600 transition">Delete
            </button>`;

        expenseList.appendChild(li);
    });

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalExpenses.textContent = total;
}

function deleteExpense(index) {
    tracker.removeExpense(index);
    renderExpenses();
}

form.addEventListener("submit", (e) => { 
    e.preventDefault();

    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const expense = new Expense(description, amount, category);
    tracker.addExpense(expense);
    renderExpenses();
    form.reset();
});

filterCategory.addEventListener("change", () => {
    const filtered = tracker.filterByCategory(filterCategory.value);
    renderExpenses(filtered);
});

renderExpenses();
