import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./MenuBottom.module.scss";
import VIEWS from './views.js';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import iconTop from '../../assets/img/iconTop.png';
import iconBack from 'assets/img/iconBack.png';
import { ClickAwayListener } from '@material-ui/core';
import Principal from '../../views/Menu/Principal/Principal';
import Favorites from '../../views/Menu/Favorites/Favorites';
import FAQ from '../../views/Menu/FAQ/FAQ';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: '300px',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        bottom: false,
    });

    const [view, setView] = useState(VIEWS.MENU_PRINCIPAL)

    useEffect(()=>{
        console.log(view)
    }, [view])

    const renderUi = (vw = view) => {
        switch (vw) {
        case VIEWS.MENU_PRINCIPAL:
            return <Principal setView={setView} />
        case VIEWS.FAVORITOS:
            return  <div>
                        <h2 onClick={() => setView(VIEWS.MENU_PRINCIPAL)} className={styles.title}>
                        <img src={iconBack} alt="Voltar" className={styles.iconBack} />Favoritos </h2>
                            <Favorites setView={setView} />
                    </div>
        case VIEWS.FAQ:
            return <div>
                        <h2 onClick={() => setView(VIEWS.MENU_PRINCIPAL)} className={styles.title}> 
                        <img src={iconBack} alt="Voltar" className={styles.iconBack} />FAQ </h2>
                        <FAQ setView={setView} />
                    </div>
        case VIEWS.SOBRE:
            return <div onClick={() => setView(VIEWS.MENU_PRINCIPAL)}>componente #4</div>
        default:
            break;
        }
    }
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [side]: open });
    };
    const fullList = side => (
        <div className={classes.fullList} role="presentation" >
        <List>
            <div className={styles.menuBottom}>
                {renderUi()}
            </div>
        </List>
        </div>
    );
    return (
        <div>
        <Button onClick={toggleDrawer('bottom', true)} className={styles.title}>
            <img src={iconTop} alt="Busca" className={styles.iconMenu} /> Ver mais
        </Button>
        <Drawer anchor="bottom" open={state.bottom} >
            <ClickAwayListener onClickAway={toggleDrawer('bottom', false)}>
            {fullList('bottom')}
            </ClickAwayListener>
        </Drawer>
        </div>
    );
}