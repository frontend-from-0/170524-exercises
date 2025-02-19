const params = new URLSearchParams(window.location.search);

const postId = params.get("id");

const id = parseInt(postId);

const header = document.getElementById("title");
const body = document.getElementById("body");

console.log(params, postId);

function updatePosts() {
  const postDiv = document.getElementById("postDiv");

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => {
      header.value = `${json.title}`;
      body.value = `${json.body}`;

      const buttons = document.createElement("div");
      buttons.classList.add("buttonsDiv");
      // Add update button
      const postButton = document.createElement("a");
      postButton.classList.remove("button--danger");
      postButton.classList.add("button", "button--success");
      postButton.textContent = "Update post";
      postButton.addEventListener("click", updatePost);
      postButton.id = "postButton";
      buttons.appendChild(postButton);
      postDiv.appendChild(buttons);
      //postButton.href = `./index.html`;
    });
}

function updatePost() {
  const title = header.value.trim();
  const content = body.value.trim();
  const errorBtn = document.getElementById("postButton");
  if (!title || !content) {
    errorBtn.classList.add("button--danger");
    alert("Both title and body are required.");
    return;
  }

  const updatedData = {
    id,
    title,
    body: content,
    userId: 1,
  };

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to update post: ${response.statusText}`);
      }
      return response.json();
    })
    .then((json) => {
      console.log("Post updated successfully:", json);
      errorBtn.classList.remove("button--danger");
    })

    .catch((error) => {
      console.error("Error updating post:", error);
      alert("Failed to update post. Please try again.");
    });
}

updatePosts();

// TODO
// Make API request to fetch the post with the given ID (Get request)
// Prefill the form in update-post.html with the post title and body

// When a user submits the form, validate the form data
// If form data is not valid, show error messages
// If form data is valid, make an API request to update the post (PUT request)
