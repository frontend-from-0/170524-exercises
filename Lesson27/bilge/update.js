const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

if (!postId) {
    alert('No post ID provided');
    window.location.href = 'index.html';
}

// Fetch the post with the given ID
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Post not found');
        }
        return response.json();
    })
    .then((post) => {
        // Prefill the form with the post data
        document.getElementById('title').value = post.title;
        document.getElementById('body').value = post.body;
    })
    .catch(error => {
        console.error('Error fetching post:', error);
        alert('Error loading post. Please try again.');
        window.location.href = 'index.html';
    });

// Handle form submission
document.getElementById('update-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const body = document.getElementById('body').value.trim();
    
    // Validate form data
    if (!title || !body) {
        alert('Please fill in all fields');
        return;
    }
    
    // Make PUT request to update the post
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(updatedPost => {
        console.log('Post updated successfully:', updatedPost);
        alert('Post updated successfully!');
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Error updating post:', error);
        alert('Error updating post. Please try again.');
    });
});






