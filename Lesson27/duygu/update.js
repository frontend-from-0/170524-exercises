const params = new URLSearchParams(window.location.search);

const postId = params.get('id');

console.log(params, postId);


// TODO
// Make API request to fetch the post with the given ID (Get request)
// Prefill the form in update-post.html with the post title and body


// When a user submits the form, validate the form data
// If form data is not valid, show error messages
// If form data is valid, make an API request to update the post (PUT request)
// ... existing URLSearchParams code ...

// Fetch the post and prefill the form
async function fetchPost() {
  try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const post = await response.json();
      
      document.getElementById('title').value = post.title;
      document.getElementById('body').value = post.body;
  } catch (error) {
      console.error('Error fetching post:', error);
  }
}

// Call fetchPost when page loads
fetchPost();

// Handle form submission
document.getElementById('updateForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const title = document.getElementById('title').value.trim();
  const body = document.getElementById('body').value.trim();
  
  // Validate form data
  if (!title || !body) {
      alert('Please fill in all fields');
      return;
  }
  
  try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: postId,
              title,
              body,
              userId: 1 // Usually this would come from authenticated user
          })
      });
      
      if (response.ok) {
          alert('Post updated successfully!');
          window.location.href = 'index.html'; // Redirect to posts list
      } else {
          throw new Error('Failed to update post');
      }
  } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
  }
});