import Cabecalho from "Components/Cabecalho";
import Menu from "Components/Menu";
import styles from './paginaInicial.module.scss'
import Banner from "Components/Banner";
import Rodape from "Components/Rodape";
import Galeria from "Components/Galeria";
import Populares from "Components/Populares";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}