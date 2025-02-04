  // Attach event listener to the "Create Post" button
  // Get the form data
  // Validate the form data
  // If form data is not valid, show error messages
  // If form data is valid, make an API request to create the post (POST request)

    function createBtn(){
    
    const postDiv = document.getElementById('postDiv');
    const buttons = document.createElement('div');
    const postButton = document.createElement('a');
    buttons.classList.add('buttonsDiv');
    postButton.classList.add('button', 'button--success');
    postButton.id = 'create-button';
    postButton.textContent = 'Create post';
    buttons.appendChild(postButton);
    postDiv.appendChild(buttons);
    }
  createBtn();
  const postButton = document.getElementById('create-button');

  postButton.addEventListener('click', createPost);


  function createPost() {
    const header = document.getElementById('title');
    const body = document.getElementById('body');
    const title = header.value.trim();
    const content = body.value.trim();
    
    if (!title || !content) {
      const postButton = document.getElementById('create-button');
      postButton.classList.remove('button--success');
      postButton.classList.add('button--danger');
      alert('Both title and body are required.');
      return;
    }

    const postData = {
      title: title,
      body: content,
      userId: 1, 
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        alert(`Post created successfully!`);
        console.log('Created Post:', data);
        const postButton = document.getElementById('create-button');
        postButton.classList.remove('button--danger');
        postButton.classList.add('button--success');
      })
      .catch((error) => {
        console.error('Error creating post:', error);
        alert('An error occurred while creating the post.');
      });
  }

