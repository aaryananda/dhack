document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;
    
    document.getElementById('receiptAmount').textContent = amount;
    document.getElementById('receiptDescription').textContent = description;
    
    document.getElementById('receipt').classList.remove('hidden');
});
