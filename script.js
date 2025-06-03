function calculateTotal() {
    const table = document.getElementById('groceryTable');
    const priceCells = table.querySelectorAll('tbody tr.item td.prices');

    // Remove existing total row if present
    const oldTotalRow = table.querySelector('tbody tr.total-row');
    if (oldTotalRow) {
      oldTotalRow.remove();
    }

    let total = 0;
    priceCells.forEach(cell => {
      const price = parseFloat(cell.textContent);
      if (!isNaN(price)) {
        total += price;
      }
    });

    // Create new total row
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');

    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', 2);
    totalCell.textContent = 'Total: $' + total.toFixed(2);

    totalRow.appendChild(totalCell);
    table.querySelector('tbody').appendChild(totalRow);
  }

  document.getElementById('calculateBtn').addEventListener('click', calculateTotal);