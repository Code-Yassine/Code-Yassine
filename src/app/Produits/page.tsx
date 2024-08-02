import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";



export default function Produits() {
    return (
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
                    <div className={styles.titre}><h1>PVC Evacuation Tube</h1></div>
                    <h5>TUBE PVC À PAROI COMPACTE</h5> <hr />
                    <p>
                        Le tube <span>INDUSPLAST ÉVACUATION M 1</span> est un tube structuré en PVC fabriqué  selon la norme européenne EN 1453.
                        Il est utilisé dans les installations d'évacuation sans   pressions d'eaux usées, eaux vannes et pluviales 
                        des bâtiments et leurs annexes ainsi que dans les  ventilations  primaires et secondaires de ces installations.
                    </p>
                    <h5>CARACTÉRISTIQUES TECHNIQUES</h5> <hr />
                    <p>
                        Tube PVC (Polychlorure de Vinyle) <br />
                        Installation en aérien à l’intérieur du bâtiment <br />
                        Installation en enterré dans le domaine privé <br />
                    </p>
                    <p>
                        •	<span>DENSITÉ</span>  : De 1.35 à 1.46 Kg/dm3 <br />
                        •	<span>ABSORPTION</span> : &gt; à 40g/m2 <br />
                        •	<span>TEMPÉRATURE DE RAMOLLISSEMENT</span> : &gt; à 78℃ <br />
                        •	<span>RÉSISTANCE À LA TRACTION</span> : &gt; à 45Kg/m2 <br />
                        •	<span>ALLONGEMENT À LA RUPTURE</span> : &gt; à 80% <br />
                        •	<span>COMBUSTION</span> : Autoextinguible (M1) <br />
                        •	<span>ASSEMBLAGE</span> : par collage <br />
                        •	<span>COULEUR</span> : gris clair <br />
                        •	<span>MARQUAGE</span> : INDUSPLAST <br />
                        •	<span>LIVRAISON</span> : barre de 3 ou 4 mètres <br />
                    </p>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/evacuationTube.jpg"} width={300} height={300} alt={"PVC evacuation Tube"} className={styles.image}/>
                    <Image src={"/tube evacuation0.jpg"} width={300} height={300} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
            </div>
            <div className={styles.head1}>
                <h1>La Fiche Technique</h1>
            </div> <br />
            <div className={styles.pdf_container}>
                <a href="/Pvc_Evacuation_Tube.pdf" download><Image src={"/Evacuation_Tube.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
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
                <Link className={styles.navlink +" "+ styles.active} href="/Produits">Evacution Tube</Link>
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