import React from "react";
import styles from "./CategoryItens.module.scss";
import refeicao from 'assets/img/refeicao.png';
import alimentacao from 'assets/img/alimentacao.png';
import farmacias from 'assets/img/farmacias.png';
import abastecimento from 'assets/img/abastecimento.png';
import veiculos from 'assets/img/veiculos.png';
import lojas from 'assets/img/lojas.png';
import servicos from 'assets/img/servicos.png';
import lazer from 'assets/img/lazer.png';
import financeiro from 'assets/img/financeiro.png';


const CategoryItens = () => <div className={styles.categoryFilter}>
                                <h2 className={styles.title}>Categorias</h2>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={refeicao} alt="Refeição" className={styles.iconCategory} />
                                        </div>
                                        <div className={styles.name}>
                                            Refeição 
                                        </div>
                                    </div>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={alimentacao} alt="Alimentação" className={styles.iconCategory} />
                                        </div>
                                        <div className={styles.name}>
                                            Alimentação 
                                        </div>
                                    </div>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={farmacias} alt="Farmácias" className={styles.iconCategory}  />
                                        </div>
                                        <div className={styles.name}>
                                            Farmácias 
                                        </div>
                                    </div>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={abastecimento} alt="Abastecimento" className={styles.iconCategory} />
                                        </div>
                                        <div className={styles.name}>
                                            Abastecimento 
                                        </div>
                                    </div>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={veiculos} alt="Veículos" className={styles.iconCategory}  />
                                        </div>
                                        <div className={styles.name}>
                                            Veículos 
                                        </div>
                                    </div>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={lojas} alt="Lojas" className={styles.iconCategory} />
                                        </div>
                                        <div className={styles.name}>
                                            Lojas 
                                        </div>
                                    </div>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={servicos} alt="Serviços" className={styles.iconCategory} />
                                        </div>
                                        <div className={styles.name}>
                                            Serviços 
                                        </div>
                                    </div>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={lazer} alt="Lazer" className={styles.iconCategory} />
                                        </div>
                                        <div className={styles.name}>
                                            Lazer 
                                        </div>
                                    </div>
                                    <div className={styles.categoryFilterBox}>
                                        <div className={styles.icon}>
                                            <img src={financeiro} alt="Financeiro" className={styles.iconCategory} />
                                        </div>
                                        <div className={styles.name}>
                                            Financeiro 
                                        </div>
                                    </div>      
                            </div>
                        
export default CategoryItens;