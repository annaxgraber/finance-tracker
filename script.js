// 1. Find the form using its ID ('expense-form') and add an event listener for the 'submit' event.
// The listener needs a function that takes 'event' as a parameter.
document.getElementById('expense-form').addEventListener('submit', function(event) {
    
    // 2. Stop the browser's default behavior of refreshing the page.
    // Hint: use a method on the 'event' object.
    event.preventDefault();

    // 3. Create four variables to grab the .value from your four inputs:
    // 'description', 'amount', 'category', and 'date'.
    // Hint: document.getElementById('...').value
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    // 4. Find the table body where the new rows will go and store it in a variable.
    // Hint: document.querySelector('#expense-table tbody')
    const tableBody = document.querySelector('#expense-table tbody')


    // 5. Create a new HTML table row element and store it in a variable.
    // Hint: document.createElement('tr')
    const newRow = document.createElement('tr');

    // 6. Set the inner HTML of your new row to hold the data.
    // Hint: use backticks (`) to create a string with <td> tags and inject your variables using ${variableName}
    newRow.innerHTML(`<td>${date}</td>
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount} ₪</td>`);

    // 7. Attach your new row to the table body variable you created in step 4.
    // Hint: use the .appendChild() method
    
        tableBody.appendChild(newRow);
    // 8. Clear the form so it is empty for the next expense.
    this.reset();
    
});