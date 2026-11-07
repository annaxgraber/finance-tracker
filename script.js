// Listen for the form submission
document.getElementById('expense-form').addEventListener('submit', function(event) {
    
    // 1. Stop the browser from refreshing the page
    event.preventDefault(); 

    // 2. Grab the values you typed into the HTML inputs
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    // 3. Find the empty table body in your HTML
    const tableBody = document.querySelector('#expense-table tbody');

    // 4. Create a new HTML table row (<tr>) with the data
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount} ₪</td>
    `;

    // 5. Inject the new row into the table
    tableBody.appendChild(newRow);

    // 6. Clear the form inputs so it is ready for the next expense
    this.reset();
});