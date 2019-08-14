import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.scss';
import Row from 'react-bootstrap/Row';
import FloatComponents from "../../components/FloatComponents/FloatComponents";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "../Sidebar/Home";
import MapContainer from '../../components/Map/Map' ;
import Carousel from "../Sidebar/Carousel";
export class Sidebar extends Component {

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
        return  <div className="Login-header">
                        <Row className={styles.home}>
                                <div className={styles.sideBar}>
                                    <Home />
                                    {/*  <Carousel />*/}

                                </div>           
                                <div className={styles.map}>
                                    <MapContainer />
                                    <FloatComponents />
                                </div>                        
                        </Row>
                </div>            
            }
}