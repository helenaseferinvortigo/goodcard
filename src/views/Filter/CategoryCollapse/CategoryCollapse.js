import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styles from './CategoryCollapse.module.scss';

class CategoryCollapse extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false};
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse}));
    }
    
    render() {
        return (
            <div className={styles.collapse}>
                <Button color="primary" onClick={this.toggle} className={styles.btn}><span> Filtros </span></Button>
                <div className={styles.box}>
                    
                    <Collapse isOpen={this.state.collapse}>
                        <Card className={styles.card}>
                            <CardBody className={styles.cardBody}>
                                <ul className={styles.list}>
                                    <li className={styles.item}>Restaurante</li>
                                    <li className={styles.item}>Fast Food</li>
                                    <li className={styles.item}>Restaurante</li>
                                    <li className={styles.item}>Fast Food</li>
                                    <li className={styles.item}>Restaurante</li>
                                    <li className={styles.item}>Restaurante</li>
                                    <li className={styles.item}>Fast Food</li>
                                    <li className={styles.item}>Restaurante</li>
                                    <li className={styles.item}>Fast Food</li>
                                    <li className={styles.item}>Fast Food</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
            );
        }
    }

export default CategoryCollapse;