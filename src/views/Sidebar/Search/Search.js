import React from 'react';
import styles from"./Search.module.scss";
import search from 'assets/img/search.png';

const Search = () => <div className={styles.search}>
                        <div className={styles.icon}>
                            <img src={search} alt="Busca" />
                        </div>
                        <div className={styles.input}>
                            <input type="text" placeholder="O que você procura?" />
                        </div>
                    </div>

export default Search;