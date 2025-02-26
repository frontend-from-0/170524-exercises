const URL = "https://jsonplaceholder.typicode.com/posts";

const createButton = document.getElementById("create-button");
createButton.addEventListener("click", () => {
  window.location.href = "./create-post.html";
});

const fetchButton = document.getElementById("fetch-button");

fetchButton.addEventListener("click", getPosts);

function getPosts() {
  const postsContainer = document.getElementById("posts-container");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts);

      posts.map((post) => {
        console.log(post);
        const listItem = document.createElement("li");
        const headerOfItem = document.createElement("h2");
        const paragraphOfItem = document.createElement("p");
        headerOfItem.textContent = post.title;
        paragraphOfItem.textContent = post.body;
        listItem.classList.add("post");
        headerOfItem.classList.add("post-title");
        paragraphOfItem.classList.add("post-body");

        const buttons = document.createElement("div");
        buttons.classList.add("buttons-container");

        // Add update button
        const updateButton = document.createElement("a");
        updateButton.textContent = "Update post";
        updateButton.classList.add("button", "button--success");
        updateButton.href = `./update-post.html?id=${post.id}`;

        // Add delete button
        const deleteButton = document.createElement("a");
        deleteButton.textContent = "delete post";
        deleteButton.classList.add("button", "button--success");
        deleteButton.addEventListener("click", () => deletePost(`${post.id}`));

        buttons.appendChild(updateButton);
        buttons.appendChild(deleteButton);

        listItem.appendChild(headerOfItem);
        listItem.appendChild(paragraphOfItem);
        listItem.appendChild(buttons);

        postsContainer.appendChild(listItem);
      });
    });
}
// Make an API request to delete the post with the given ID (DELETE request)
function deletePost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log(`Post with an id of ${id} deleted`);
      } else {
        throw new Error(`Failed to delete post: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while deleting the post.");
    });
}
