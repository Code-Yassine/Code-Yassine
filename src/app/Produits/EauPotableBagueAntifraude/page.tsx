
import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/contactus/contact"; 


export default function BagueAntifraude(){
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
                <div className={styles.titre}><h1>Assessoire Eau Potable Bague Antifraude</h1></div>
                <p>
                  •	Les bagues anti-fraude servent servent a mettre en évidence et éviter une possible manipulation des compteurs d’eau ou de gaz. 
                  •	En polycarbonate disponible en plusieurs couleurs . 
                  •	Facile a sceller . pas besoin d’outils. 
                  •	Auto-fermeture qui facilite la manipulation et adaptable a différentes tailles de conduits. 
                  •	Personnalisation possible . 
                  •	Applications possibles : a l’entrée ou a la sortie des compteurs ou sur les raccords des installations. 
                </p>
                <h5>APPLICATIONS</h5>
                <p>
                  •	Joints pour compteurs d’eau 
                  •	Joints pour compteurs de gaz 
                  •	Les pinces en plastique sont utilisées comme synonymes de fermetures a glissière ou de  scelles de
                   sécurité en plastique, mais en réalité. Elles désignent 
                   également des pièce de quincaillerie en métal ou en métal ou en plastique utilisées pour
                   fixer de tuyaux , des tubes ou des conduit sur différentes surfaces. 
                  •	Pourquoi le même nom est-il utilise pour les attaches ou les joints de sécurité en plastique ? 
                  •	La raison peut être trouvée en ce qu’ils partagent un système fonctionnel : les pinces s’ajustent
                   également , servent a regrouper les matériaux et constituent un élément de sécurité . 

                </p>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/acce-bague.jpg"} width={200} height={200} alt={"PVC evacuation Tube"} className={styles.image}/>
                    <Image src={"/acce-bague1.png"} width={200} height={200} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
            </div>
            <div className={styles.head1}>
                <h1>La Fiche Technique</h1>
            </div> <br />
            <div className={styles.pdf_container}>
                <a href="/Accessoire_Eau_Potable.pdf" download><Image src={"/Accessoire_Eau_Potable.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
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
                <Link className={styles.navlink +" "+ styles.active} href="/Produits/EauPotableBagueAntifraude">Bague Antifraude</Link>
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