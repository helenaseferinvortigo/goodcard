import React from "react";
import styles from "./FloatComponents.module.scss";
import Menu from "../../components/MenuBottom/MenuBottom";
import Search from "../../views/Sidebar/Search/Search";

const FloatComponents = () =>
                            <div className={styles.floatComponents}>
                                <div className={styles.top}>
                                    <div className={styles.search}>
                                        <Search />
                                    </div>
                                    <div className={styles.search}>
                                    </div>
                                </div>

                                <div className={styles.menu}>
                                    <Menu />
                                </div> 
                            </div>

export default FloatComponents;