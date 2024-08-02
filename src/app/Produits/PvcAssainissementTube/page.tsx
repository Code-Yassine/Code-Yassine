

import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";


export default function PvcAssainissementTube() {
    return (
        <>
            <Header text={"Produits"} />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1>Produits</h1>
                </div>
            </main>
            <div className={styles.box}>
                <Menu />
                <div className={styles.text}>
                <div className={styles.titre}><h1>PVC Assainissement Tube</h1></div>
                    <h5>DOMAINE D'APPLIATION</h5> <hr />
                    <p>
                        •	Réseaux d’assainissement gravitoire Eaux uses , eaux pluviales.
                        •	Les canalisation pour effluents , hors batiment et sous batiments.
                    </p>
                    <h5>CARACTÉRISTIQUES ET NORMES</h5> <hr />
                    <p>
                        •	Ces tubes sont designes par leur diametre , epaisseur , type d’assemblage , longueur et type de serie.
                        •	Ces tubes sont fabriques suivant la norme NF P 16-352 UNE-UN 1401 pour la canilisation sans pression.
                    </p>
                    <h5>CARACTÉRISTIQUES</h5> <hr />
                    <p>
                        •	Longueur de tube : Barres de 6m(5+- cm).
                    </p>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/assainissement-tube.jfif"} width={300} height={300} alt={"PVC evacuation Tube"} className={styles.image} />
                </div>
            </div>
            <div className={styles.head1}>
                <h1>La Fiche Technique</h1>
            </div> <br />
            <div className={styles.pdf_container}>
                <a href="/Pvc_Assainissement_Tube.pdf" download><Image src={"/Assainissement_Tube.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
            </div>
            <ContactUs />
            <Footer />
        </>
    );
}

function Menu() {
    return(
        <>
    <div>
    <header className={styles.header}>
        <div className={styles.containerMenu}>
            <nav className={styles.nav}>
                <h4>Tuyaux PVC</h4>
                <Link className={styles.navlink} href="/Produits">Evacution Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcEvacuationRaccords">Evacution Raccords</Link>
                <Link className={styles.navlink} href="/Produits/PvcPressionTube">Pression Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcPressionRaccords">Pression Raccords</Link>
                <Link className={styles.navlink +" "+ styles.active} href="/Produits/PvcAssainissementTube">Assainissement Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcForageTube">Forage Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcTelecomTube">Telecom Tube</Link>
                <h4>Accessoires Eau Potable</h4>
                <Link className={styles.navlink} href="/Produits/EauPotableTabernacle">Tabernacle</Link>
                <Link className={styles.navlink} href="/Produits/EauPotableBagueAntifraude">Bague Antifraude</Link>
                <h4>Tuyaux PE</h4>
                <Link className={styles.navlink} href="/Produits/PePressionTube">Pression Tube</Link>
            </nav>
        </div>
    </header>
    <main>
        
    </main>
    </div>
    </>
    );
}