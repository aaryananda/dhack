// script.js
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const billType = document.getElementById('bill-type').value;
    const amount = document.getElementById('amount').value;
    
    if (amount && amount > 0) {
      // Simulate payment processing
      setTimeout(function() {
        const paymentDate = new Date().toLocaleDateString();
        const paymentDetails = `${billType.toUpperCase()} - $${amount} - ${paymentDate}`;
        
        // Display payment in history
        const historyList = document.getElementById('history-list');
        const listItem = document.createElement('li');
        listItem.textContent = paymentDetails;
        historyList.appendChild(listItem);
        
        // Clear form inputs
        document.getElementById('bill-type').value = 'electricity';
        document.getElementById('amount').value = '';
      }, 1000); // Simulating delay for payment processing
    } else {
      alert('Please enter a valid amount.');
    }
  });
  