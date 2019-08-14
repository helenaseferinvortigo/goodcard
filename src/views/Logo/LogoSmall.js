import React, { Component } from 'react';
import styles from './Logo.module.scss';
import logo from '../../assets/img/GoodCard-logo.png';

export class LogoSmall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    
    state = {
    }

    render() {
        return  <div className={styles.Small}>
                    <img src={logo} alt="Good Card" />
                </div>      
    }
}

export default LogoSmall;