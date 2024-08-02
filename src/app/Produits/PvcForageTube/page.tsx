

import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
 


export default function PvcForageTube(){
    return(
        <>
        <Header text={"Produits"} />
        <main className={styles.main}>
            <div className={styles.container}>
                <h1>Produits</h1>
            </div>
        </main>
        <div className={styles.box}>
                <div>
                <Menu />
                </div>
                <div className={styles.text}>
                <div className={styles.titre}><h1>PVC Forage Tube</h1></div>
                <h5>DOMAINE D'APPLIATION</h5>
                    <p>
                      Ce tubes sont destines au cheminage des forages d’eau.
                    </p>
                    <h5>CARACTÉRISTIQUES ET NORMES</h5>
                    <p>
                      Ces tubes sont de couleur grise claire ou orange de longueur de 6m.
                      Ils sont raccordes par collage.
                    </p>
                    <h5>MARQUAGE</h5>
                    <p>
                      Nom de référence: NFT 54-017
                      Fabriquant : INDUSPLAST.
                    </p>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/forage-tube.jfif"} width={400} height={400} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
            </div>
            <div className={styles.head1}>
                <h1>La Fiche Technique</h1>
            </div> <br />
            <div className={styles.pdf_container}>
                <a href="/Pvc_Forage_Tube.pdf" download><Image src={"/Forage_Tube.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
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
                <Link className={styles.navlink} href="/Produits/PvcAssainissementTube">Assainissement Tube</Link>
                <Link className={styles.navlink +" "+ styles.active} href="/Produits/PvcForageTube">Forage Tube</Link>
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