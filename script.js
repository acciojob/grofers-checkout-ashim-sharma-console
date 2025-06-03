 function updateTotal() {
    const priceElements = document.querySelectorAll('.prices');
    let total = 0;

    // Calculate the sum of prices
    priceElements.forEach(function (el) {
      const value = parseFloat(el.textContent.trim());
      if (!isNaN(value)) {
        total += value;
      }
    });

    // Remove previous total row if exists
    const existingTotalRow = document.getElementById('total-row');
    if (existingTotalRow) {
      existingTotalRow.remove();
    }

    // Create a new row for total
    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row';

    const totalCell = document.createElement('td');
    const columnCount = document.querySelector('.item').children.length;

    totalCell.setAttribute('colspan', columnCount);
    totalCell.textContent = 'Total Price: ₹' + total.toFixed(2);
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'right';

    totalRow.appendChild(totalCell);
    document.getElementById('grocery-table').appendChild(totalRow);
  }