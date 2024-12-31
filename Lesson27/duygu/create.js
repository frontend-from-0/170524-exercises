function createPost() {
  // Get the form data
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  // Validate the form data
  const errors = {};
  if (!title.trim()) {
    errors.title = 'Title is required';
  }
  if (!body.trim()) {
    errors.body = 'Body is required';
  }
  // If form data is not valid, show error messages
  if (Object.keys(errors).length > 0) {
    Object.entries(errors).forEach(([field, message]) => {
      const errorElement = document.getElementById(`${field}-error`);
      if (errorElement) {
        errorElement.textContent = message;
      }
    });
    return;
  }
  // If form data is valid, make an API request to create the post (POST request)
  fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      body
    })
  })
  .then(response => response.json())
  .then(data => {   
    window.location.href = '/posts'; 
  })
  .catch(error => {
    console.error('Error creating post:', error);
   
  });
}
