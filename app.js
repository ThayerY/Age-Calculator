// Set max date to today when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('birthdate').max = today;
});

const calculateAge = () => {
  const birthdateInput = document.getElementById('birthdate').value;
  if (!birthdateInput) {
    alert('Please enter your birthdate');
    return;
  }

  const birthdate = new Date(birthdateInput);
  const today = new Date();

  if (birthdate > today) {
    alert('Birthdate cannot be in the future');
    return;
  }

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthdate.getDate());
    days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
    months--;
  }

  displayResults(years, months, days);
}

const displayResults = (years, months, days) => {
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('ageMessage').textContent =
    `You are ${years} years, ${months} months, and ${days} days old!`;

  const resultDiv = document.getElementById('result');
  resultDiv.classList.add('show');
}

const resetCalculator = () => {
  // Clear the input
  document.getElementById('birthdate').value = '';

  // Hide the result section with animation
  const resultDiv = document.getElementById('result');
  resultDiv.classList.remove('show');

  // Reset the numbers
  document.getElementById('years').textContent = '0';
  document.getElementById('months').textContent = '0';
  document.getElementById('days').textContent = '0';

  // Clear the message
  document.getElementById('ageMessage').textContent = '';
}
