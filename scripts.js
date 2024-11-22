function openPopup(packageValue, dailyReturn) {
    document.getElementById('packageValue').textContent = packageValue;
    document.getElementById('dailyReturn').textContent = dailyReturn;
    document.getElementById('paymentPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('paymentPopup').style.display = 'none';
}