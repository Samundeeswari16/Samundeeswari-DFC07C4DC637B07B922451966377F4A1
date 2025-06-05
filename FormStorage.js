// formStorage.js
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  localStorage.setItem('username', username);
  alert('Data saved to localStorage');
});
