import React from 'react';
import LogoSmall from "../../views/Logo/LogoSmall";
import CategoryCarousel from "../Filter/CategoryCarousel/CategoryCarousel";
import Search from "./Search/Search";
import BoxFilter from "./BoxFilter/BoxFilter";
import styles from "./Styles.module.scss";
import Menu from "../../components/MenuBottom/MenuBottom";

const Carousel = () => 
                        <div>
                            <div className={styles.carousel}>
                                <LogoSmall />
                                <div className={styles.sidebar}>
                                    <Search />
                                    <CategoryCarousel />  
                                </div>      
                            </div>                      
                            <BoxFilter />
                            <div className={styles.menu}>
                                <Menu />
                            </div>  
                        </div>
export default Carousel;