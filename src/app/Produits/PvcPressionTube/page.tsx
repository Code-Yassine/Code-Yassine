

import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link"; 


export default function PvcPressionTube(){
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
                <Menu/>
                </div>
                <div className={styles.text}>
                <div className={styles.titre}><h1>PVC pression Tube</h1></div>
                <h5>DOMAINE D'APPLIATION</h5> <hr/>
                <p>
                  •	Transport sous pression de liquides alimentaires ou industriels entre 20 et 45. 
                  •	Installation de piscines. 
                  •	Adduction et branchement d’eau potable , réseaux publics . Prives ou industriels. 
                  •	Refoulement de réseaux d’assainissement. 
                  •	Assainissement sous pression, ou sous vide. 
                  •	Réseau d’irrigation enterrée.  
                </p>
                <h5>CARACTERISTIQUES ET NORMES</h5> <hr/> 
                <p>
                  •	Ces tubes sont sont fabriques en PVC-U de couleur gris fonce (noire sur commande) et  sont livres pré manchonnes en longueur de 6 mètres hors tout (ou autre longueur demandée). 
                  •	Ces tubes sont désignes par leur diamètre , épaisseur , type d’assemblage , longueur et pression nominale. 
                  •	Ces tubes présentent une résistance exceptionnelle aux chocs . ils ne subissent aucun dommage ni déformation a l’essai d’impact. 
                  •	Ces tubes sont fabriques conformément aux normes NM 05.6.046 ;NF T 016-54 et UNE-EN 1452. 
                  •	Ces tubes peuvent être encastres , noyés ou enterres sans traitement préalable contre la corrosion. 
                  •	Ces tubes n’ont aucune influence sur la qualité de l’eau potable , pas d’altération sur la composition de l’eau. 
                  •	Ils sont assembles par collage (du diam 32 au diam 250) ou par joint KM (du diam63 au diam 250).  
                </p>
                <hr/>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/pvc_pression_tube.jpg"} width={300} height={300} alt={"PVC evacuation Tube"} className={styles.image}/>
                    <Image src={"/pvc_pression_tube11.jpg"} width={300} height={300} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
            </div>
            <div className={styles.head1}>
            <h1>La Fiche Technique</h1></div> <br />
            <div className={styles.pdf_container}>
                <a href="/Pvc_Pression_Tube.pdf" download><Image src={"/Pression_Tube.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
            </div>
            <ContactUs/>
            <Footer/>
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
                <Link className={styles.navlink  +" "+ styles.active} href="/Produits/PvcPressionTube">Pression Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcPressionRaccords">Pression Raccords</Link>
                <Link className={styles.navlink} href="/Produits/PvcAssainissementTube">Assainissement Tube</Link>
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