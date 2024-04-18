import React, { useEffect, useState } from 'react';
import NavBar from '../navbar/navbar';
import styles from "../images/images.module.css"

function Images() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=30') 
        .then(response => response.json())
        .then(data => setPhotos(data))
        .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className={styles.head}>
            <NavBar /> 
            <div className={styles.bodyInside}>
                {Array.isArray(photos) && photos.slice(0, 30).map(photo => (
                    <article className={styles.containers} key={photo.id}>
                        <h2>{photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}</h2>
                        <img src={photo.thumbnailUrl} alt={photo.title} width="50%" height="auto" />
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Images;
