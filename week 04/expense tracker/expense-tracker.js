let totalExpense = 0;

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = parseFloat(document.getElementById("expenseAmount").value);

  if (name && !isNaN(amount)) {
    totalExpense += amount;
    const li = document.createElement("li");
    li.textContent = `${name}: $${amount.toFixed(2)}`;
    document.getElementById("expenseList").appendChild(li);
    document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);
    document.getElementById("expenseName").value = '';
    document.getElementById("expenseAmount").value = '';
  }
}
