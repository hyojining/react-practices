import React from 'react';
import styles from './assets/scss/SearchBar.scss';

function SearchBar({searchEmail}) {
    return (
        <div className={styles.Searchbar}>
            <input 
                type='text' 
                placeholder='찾기'
                onChange={e => { //검색어가 변경될 때마다 searchEmail 함수를 호출하여 검색 기능을 수행
                    searchEmail(e.target.value);
                }}/>
        </div>
    );
}

export default SearchBar;