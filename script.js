// Initial setup
let expenses = [];
let total = 0;

// Get elements
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const addExpenseButton = document.getElementById('add-expense');
const themeToggleButton = document.getElementById('theme-toggle');

// Add new expense
addExpenseButton.addEventListener('click', function() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description !== '' && amount > 0) {
        const expense = { description, amount };
        expenses.push(expense);

        // Add expense to the list
        const li = document.createElement('li');
        li.innerHTML = `${description} - $${amount.toFixed(2)}`;
        expenseList.appendChild(li);

        // Update total
        total += amount;
        totalExpenses.textContent = total.toFixed(2);

        // Clear inputs
        descriptionInput.value = '';
        amountInput.value = '';
    }
});

// Dark Mode Toggle
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
