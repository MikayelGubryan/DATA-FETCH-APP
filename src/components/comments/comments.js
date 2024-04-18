import React, { useEffect, useState } from 'react';
import NavBar from '../navbar/navbar';
import styles from "../comments/comments.module.css"

function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setComments(data))
        .catch(error => console.error('Error fetching data: ', error));
    },[])

    return (
        <div className={styles.head}>
        <NavBar /> 
        <div className={styles.bodyInside}>
            {Array.isArray(comments) && comments.map(comment => (
                <article className={styles.containers} key={comment.id}>
                <h2>{comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}</h2>
                <h3>{comment.email}</h3>
                <p>{comment.body || "No body text"}</p> 
                </article>
            ))}
          </div>
        </div>
      );
}

export default Comments;