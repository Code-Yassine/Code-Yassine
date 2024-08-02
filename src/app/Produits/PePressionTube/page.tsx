
import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer"; 


export default function PePressionTube(){
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
                <div className={styles.titre}><h1>PE pression Tube</h1></div>
                <p>
                La croissance significative de l'utilisation des tuyaux en polyéthylène (PE) 
                ces dernières années témoigne de leur excellence technique et de leur grande
                compétitivité pour toutes sortes de conduites de fluides sous pression. Grâce
                à leur longue durée de vie et à leurs propriétés physiques et chimiques exceptionnelles,
                les tuyaux en PE sont aujourd'hui une alternative de choix aux tuyaux en métal ou en d'autres
                matériaux traditionnels.
                </p>
                <p>
                diverses applications. Pour leur fabrication, les matières premières utilisées
                proviennent directement des usines pétrochimiques et incluent les stabilisants, 
                antioxydants et noir de fumée nécessaires pour assurer une transformation optimale 
                et garantir la qualité du produit.
                </p>
                <p>
                Pendant toute la phase de fabrication, les systèmes et équipements de contrôle de qualité 
                les plus avancés sont mis en œuvre, garantissant ainsi le respect des critères et spécifications 
                relatifs aux caractéristiques et méthodes de test définis par les réglementations correspondantes.
                </p>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/pe-pression.jpg"} width={200} height={200} alt={"PVC evacuation Tube"} className={styles.image}/>
                    <Image src={"/pe-pression1.jfif"} width={200} height={200} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
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
                <Link className={styles.navlink} href="/Produits/PvcPressionTube">Pression Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcPressionRaccords">Pression Raccords</Link>
                <Link className={styles.navlink} href="/Produits/PvcAssainissementTube">Assainissement Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcForageTube">Forage Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcTelecomTube">Telecom Tube</Link>
                <h4>Accessoires Eau Potable</h4>
                <Link className={styles.navlink} href="/Produits/EauPotableTabernacle">Tabernacle</Link>
                <Link className={styles.navlink} href="/Produits/EauPotableBagueAntifraude">Bague Antifraude</Link>
                <h4>Tuyaux PE</h4>
                <Link className={styles.navlink +" "+ styles.active} href="/Produits/PePressionTube">Pression Tube</Link>
            </nav>
        </div>
    </header>
    <main>
        
    </main>
    </div>
    </>
    );
}