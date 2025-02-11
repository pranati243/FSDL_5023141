let expenses = [];
let totalExpense = 0;

document.getElementById("expenseForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("expenseName").value;
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const category = document.getElementById("categorySelect").value;
  const date = document.getElementById("expenseDate").value;

  if (name && amount && category && date) {
    // Add new expense to the array
    const expense = { name, amount, category, date };
    expenses.push(expense);
    totalExpense += amount;

    // Update the expense list and total
    updateExpenseList();
    updateTotalExpense();

    // Clear input fields
    document.getElementById("expenseName").value = '';
    document.getElementById("expenseAmount").value = '';
    document.getElementById("categorySelect").value = '';
    document.getElementById("expenseDate").value = '';
  }
});

function updateExpenseList() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = ''; // Clear the list before updating

  expenses.forEach((expense, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("expense-item");

    listItem.innerHTML = `
      <span>${expense.name} - ₹${expense.amount} (${expense.category}) on ${expense.date}</span>
      <button onclick="deleteExpense(${index})">Delete</button>
      <button onclick="editExpense(${index})">Edit</button>
    `;

    expenseList.appendChild(listItem);
  });
}

function updateTotalExpense() {
  document.getElementById("totalAmount").innerText = totalExpense.toFixed(2);
}

function deleteExpense(index) {
  totalExpense -= expenses[index].amount;
  expenses.splice(index, 1);
  updateExpenseList();
  updateTotalExpense();
}

function editExpense(index) {
  const expense = expenses[index];

  document.getElementById("expenseName").value = expense.name;
  document.getElementById("expenseAmount").value = expense.amount;
  document.getElementById("categorySelect").value = expense.category;
  document.getElementById("expenseDate").value = expense.date;

  deleteExpense(index); // Remove the old expense before adding the updated one
}
