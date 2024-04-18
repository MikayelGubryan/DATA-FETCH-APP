import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../navbar/navbar.module.css';
// import { useDispatch } from 'react-redux';
// import { logout } from '../features/auth/authSlice'; 
// import { useHistory } from 'react-router-dom';

function NavBar() {
    // const dispatch = useDispatch();
    // const history = useHistory();

    // const handleLogout = () => {
    //     // dispatch(logout());  
    //     history.push('/login');  
    //   };

    return (
        <div>
            <div className={styles.header}>
                <div class={styles.logo}>Logo</div>
                <nav className={styles.navbar}>
                    <ul className={styles.navlist}>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><a href="/comments">Comments</a></li>
                        <li><a href="/images">Images</a></li>
                    </ul>
                </nav>

        <button>Logout</button>
                
            </div>
        </div>
    );
}

export default NavBar;
