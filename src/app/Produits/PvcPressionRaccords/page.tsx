

import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link"; 


export default function PvcPressionRaccords(){
    return(
        <>
        <Header text={"Produits"} />
        <main className={styles.main}>
            <div className={styles.container}>
                <h1>Produits</h1>
            </div>
        </main>
        <div className={styles.box}>
                <Menu/>
                <div className={styles.text}>
                <div className={styles.titre}><h1>PVC Pression Raccords</h1></div>
                <h5>DOMAINE D'APPLIATION</h5>
                    <p>
                      Les produits en PVC-U sont utilises pour l’adduction d’eau , L’irrigation ,
                      les réseaux de piscine , l’industrie chimique , l’industrie alimentaire ,etc.
                    </p>
                    <h5>CONDITIONS D'UTILISATION</h5>
                    <p>
                      La pression nominale d’utilisation est indiquée dans les tableaux de chaque produit 
                      . les détails dans notre catalogue général.
                    </p>
                    <h5>RACCORDEMENT A COLLER</h5>
                    <p>
                      Les raccordements a coller sont conformes a la norme européenne EN 1452.
                    </p>
                    <h5>RACCORDEMENT DES BRIDES</h5>
                    <p>
                      les dimensions de raccordement des brides sont conformes a la norme EN 1-1092 
                      et compatibles avec la plupart des équipements . Ces dimensions sont indiquées
                      dans notre catalogue général.
                    </p>
                    <hr/>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/pression_raccords1.jfif"} width={300} height={300} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
            </div>
            <div className={styles.head1}>
                <h1>La Fiche Technique</h1>
            </div> <br />
            <div className={styles.pdf_container}>
                <a href="/Pvc_Pression_Raccords.pdf" download><Image src={"/Pression_Raccords1.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
                <a href="/Pvc_Pression_Raccords.pdf" download><Image src={"/Pression_Raccords2.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
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
              <Link className={styles.navlink +" "+ styles.active} href="/Produits/PvcPressionRaccords">Pression Raccords</Link>
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