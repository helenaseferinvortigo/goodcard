import React, { Component } from 'react';
import LogoFull from "../../views/Logo/LogoFull";
import CategoryItens from "../Filter/CategoryItens/CategoryItens";
import Search from "./Search/Search";
import Menu from "../../components/MenuBottom/MenuBottom";
import styles from "./Styles.module.scss";

export default class Main extends Component{

	render (){
		return (
            <div className={styles.itens}>
                <LogoFull />
                <div className={styles.border}>
                    <Search />
                    <CategoryItens />  
                </div>
                <div className={styles.menu}>
                    <Menu />
                </div> 
            </div>
		);
	}
}