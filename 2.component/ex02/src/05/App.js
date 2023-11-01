import React from 'react';
import styles from './assets/scss/App.scss';

function App() {    
    console.log(styles);
    return (
        <div id={styles.App}>
            <h1 className={styles.Header}>SASS & SCSS</h1>
        </div>
    );
}

export {App};