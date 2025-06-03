function calculateTotal() {
  // Get the table element
  const table = document.getElementById('groceryTable');

  // Select all price cells in rows with class "item"
  const priceCells = table.querySelectorAll('tbody tr.item td.prices');

  // Remove existing total row if exists
  const oldTotalRow = table.querySelector('tbody tr.total-row');
  if (oldTotalRow) oldTotalRow.remove();

  let total = 0;
  priceCells.forEach(cell => {
    const price = parseFloat(cell.textContent);
    if (!isNaN(price)) total += price;
  });

  // Create a new row and cell for total
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');

  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', 2);
  totalCell.textContent = 'Total: $' + total.toFixed(2);

  totalRow.appendChild(totalCell);
  // Append to tbody
  table.querySelector('tbody').appendChild(totalRow);
}
document.getElementById('calculateBtn').addEventListener('click', calculateTotal);

