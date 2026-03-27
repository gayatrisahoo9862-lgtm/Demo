// Make sure all assets are loaded
document.addEventListener("DOMContentLoaded", () => {

  const postsContainer = document.querySelector(".posts-container");
  const APIUrl ="https://jsonplaceholder.typicode.com/posts";

  async function fetchPosts() {
    try {
      // make the http request
      const response = await fetch(APIUrl);
      const posts = await response.json();

      // clear the loading message
      postsContainer.innerHTML = "";

      // display posts
      posts.forEach((post) => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
      });

    } catch (error) {
      postsContainer.innerHTML =
        '<p style="color:red;text-align:center">Error loading posts. Please try again later</p>';
    }
  }

  fetchPosts();
});
