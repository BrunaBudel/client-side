//send a to localhost:3000/message with a POST request using the data from the form

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  console.log(formData);
  fetch('http://localhost:3000/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
})