import { useState } from 'react';
import { Post } from './Post.js';

function App() {

  var sampleText = "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
  var postsPerPage = 20;

  // Use useState to hold the posts being rendered to the screen
  // Create the array of posts to map to render
  const [posts, setPosts] = useState([...Array(postsPerPage).keys()]);

  var postNumber = postsPerPage;

  function handleScroll() {
    var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight;

    if (isAtBottom) {
      // Load next posts
      postNumber += postsPerPage;

      setPosts([...Array(postNumber).keys()]);

    }
  }
  // Add the listener
    window.addEventListener("scroll", handleScroll);

  return (
    <div>

      {posts.map((item, i) => (
        <Post title={"Post " + (i + 1)} body={sampleText} />
        ))}

    </div>
  );
}

export default App;
