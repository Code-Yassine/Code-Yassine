
import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link"; 


export default function Tabernacle(){
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
                <div className={styles.titre}><h1>Assessoire Eau Potable Tabernacle</h1></div>
                    <h5>SPECIFICATION TECHNIQUE</h5>
          <p>
            Matière : polypropylène pour robinet de prise en charge .
            Couleur : Blue.
          </p>
          <h5>UTILISATION</h5>
          <p>
            • Le petit TABEPNACLE a été développe pour la protection des robinets de prise en charge.
            • La matière en pp lui confère longévité durée de vie de plus de 80 ans.
            • Resistance aux chocs et aux terrains agressifs la possibilité de le recycler a 100%.
            • La mise en place se fait sans collage et sans outillage spécifique.
            • Placement du tube en diamètre 65 mm extérieur sur la partie male du tabernacle situe sur le dessus.

          </p>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/acce-tab1.jfif"} width={200} height={200} alt={"PVC evacuation Tube"} className={styles.image}/>
                    <Image src={"/acce-tab2.jpg"} width={200} height={200} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
            </div>
            <div className={styles.head1}>
                <h1>La Fiche Technique</h1>
            </div> <br />
            <div className={styles.pdf_container}>
                <a href="/Accessoire_Eau_Potable.pdf" download><Image src={"/Accessoire_Eau_Potable.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
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
                <Link className={styles.navlink} href="/Produits/PvcForageTube">Forage Tube</Link>
                <Link className={styles.navlink} href="/Produits/PvcTelecomTube">Telecom Tube</Link>
                <h4>Accessoires Eau Potable</h4>
                <Link className={styles.navlink +" "+ styles.active} href="/Produits/EauPotableTabernacle">Tabernacle</Link>
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