import React from 'react'
import VIEWS from 'components/MenuBottom/views.js'
import 'components/MenuBottom/MenuBottom.module.scss';
import styles from './Principal.module.scss'
import favoritos from 'assets/img/favoritos.png';
import imprimir from 'assets/img/imprimir.png';
import faq from 'assets/img/faq.png';
import sobre from 'assets/img/sobre.png';
import iconBottom from 'assets/img/iconBottom.png';

const Principal = props => {
    const { setView } = props;

    return (
        <div className={styles.menuBottom}>
            <h2 className={styles.title}><img src={iconBottom} alt="Busca" className="iconMenu" /> Ver mais</h2>

            <div onClick={() => setView(VIEWS.FAVORITOS)} className={styles.menuItem}>
                <div className={styles.iconBorder}>
                <img src={favoritos} alt="Busca" className={styles.iconImage} /> 
                </div>
                <div className={styles.name}>
                    Favoritos
                </div>
            </div>
            <div className={styles.menuItem}>
                <div className={styles.iconBorder}>
                    <img src={imprimir} alt="Busca" className={styles.iconImage} /> 
                </div>
                <div className={styles.name}>
                    Imprimir
                </div>
            </div>
            <div onClick={() => setView(VIEWS.FAQ)} className={styles.menuItem}>
                <div className={styles.iconBorder}>
                    <img src={faq} alt="Busca" className={styles.iconImage} /> 
                </div>
                <div className={styles.name}>
                    FAQ
                </div>
            </div>
            <div onClick={() => setView(VIEWS.SOBRE)} className={styles.menuItem}>
                <div className={styles.iconBorder}>
                    <img src={sobre} alt="Busca" className={styles.iconImage} /> 
                </div>
                <div className={styles.name}>
                    Sobre
                </div>
            </div>
        </div>

    )
}

export default Principal