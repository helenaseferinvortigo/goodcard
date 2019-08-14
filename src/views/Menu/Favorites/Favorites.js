import React from "react";
import styles from "./Favorites.module.scss";
import refeicao from "assets/img/refeicao.png";
import fav from "assets/img/fav.png";
import favDisabled from "assets/img/fav-disabled.png";

const imagesPath = {
    minus: fav,
    plus: favDisabled
};

class Favorites extends React.Component {
    renderRow(row) {
        return <li>Num: {row}</li>;
    }

    state = {
        open: true
    };
    toggleImage = () => {
        this.setState(state => ({ open: !state.open }));
    };

    getImageName = () => (this.state.open ? "plus" : "minus");

    render() {
        const imageName = this.getImageName();
        let rows = [];
        for (let i = 0; i < 5; i++) {
            return (
                <div className={styles.favorites}>
                    <div className={styles.boxFavorites}>
                        <div className={styles.header}>
                            <div className={styles.iconBorder}>
                                <img
                                    src={refeicao}
                                    alt="Refeição"
                                    className={styles.iconImage}
                                />
                            </div>
                            <div className={styles.name}>
                                Restaurante Japones
                            </div>
                        </div>
                        <div className={styles.address}>
                            Av. 24 de Outubro, 1230, Porto Alegre
                            <span className={styles.distance}>
                                <b>450 metros</b> de mim
                            </span>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.fav}>
                                <img
                                    alt="Favoritar"
                                    className={styles.favImage}
                                    src={imagesPath[imageName]}
                                    onClick={this.toggleImage}
                                />
                            </div>
                            <div className={styles.linkToMap}>Ir</div>
                            <div className={styles.pinMap}>Ver no mapa</div>
                        </div>
                    </div>
                </div>
            );
        }
        if (rows.length === 0) {
            return <div className={styles.favorites}><p className={styles.paragraph}>Adicione seus estabelecimentos favoritos aqui!</p>
                        <img
                            alt="Favoritar"
                            className={styles.favImageUnknown}
                            src={fav}
                        />
                    </div>;
        }

        return <div>{rows.map(this.renderRow)}</div>;
    }
}

export default Favorites;
