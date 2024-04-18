import React, { useEffect, useState } from 'react';
import NavBar from '../navbar/navbar';
import styles from "../posts/posts.module.css"


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);
  
  
  return (
    <div className={styles.head}>
    <NavBar /> 
    <div className={styles.bodyInside}>
      {Array.isArray(posts) && posts.map(post => (
          <article className={styles.containers} key={post.id}>
            <h2>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h2>
            <p>{post.body || "No body text"}</p> 
          </article>
        ))}
    </div>
    </div>
  );
}


export default Posts;
