import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './FAQ.modules.scss';
import collapse from 'assets/img/duvidas.png';

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.state = { collapse1: false, collapse2: false, collapse3: false };
    }

    toggle() {
        this.setState(state => ({ collapse1: !state.collapse1}));
    }
    toggle2() {
        this.setState(state => ({ collapse2: !state.collapse2 }));
    }
    toggle3() {
        this.setState(state => ({ collapse3: !state.collapse3 }));
    }

    render() {
        return (
            <div className="accordion">
                <div className="accordion__box">
                    <Button color="primary" onClick={this.toggle} className="accordion__btn"><span> Como faço para localizar um estabeleciomento pelo nome? </span> <img src={collapse} alt="FAQ" /> </Button>
                    <Collapse isOpen={this.state.collapse1}>
                        <Card className="accordion__card">
                            <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem ex, auctor ac placerat in, placerat id mauris. Vestibulum volutpat, erat sit amet vulputate consectetur, dolor nisi eleifend dui, ac mollis metus urna et nulla. Sed eleifend mauris nec risus vehicula euismod.
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div className="accordion__box">
                    <Button color="primary" onClick={this.toggle2} className="accordion__btn"><span> Como faço para localizar um estabelecimento em uma cidade específica?</span> <img src={collapse} alt="FAQ" /></Button>
                    <Collapse isOpen={this.state.collapse2}>
                        <Card className="accordion__card">
                            <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem ex, auctor ac placerat in, placerat id mauris. Vestibulum volutpat, erat sit amet vulputate consectetur, dolor nisi eleifend dui, ac mollis metus urna et nulla. Sed eleifend mauris nec risus vehicula euismod.
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div className="accordion__box">
                    <Button color="primary" onClick={this.toggle3} className="accordion__btn"><span> Minha pesquisa está lenta. <br></br>Como faço para resolver? </span><img src={collapse} alt="FAQ" /></Button>
                    <Collapse isOpen={this.state.collapse3}>
                        <Card className="accordion__card">
                            <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem ex, auctor ac placerat in, placerat id mauris. Vestibulum volutpat, erat sit amet vulputate consectetur, dolor nisi eleifend dui, ac mollis metus urna et nulla. Sed eleifend mauris nec risus vehicula euismod.
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
            );
        }
    }

export default FAQ;