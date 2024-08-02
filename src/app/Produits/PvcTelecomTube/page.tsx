import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
 


export default function PvcTelecomTube(){
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
                <div className={styles.titre}><h1>PVC Telecom Tube</h1></div>
                <h5>DOMAINE D'APPLIATION</h5>
                  <p>
                    Ces tubes sont destines a la réalisation de canalisation  , branchements et collecteurs 
                    du domaine public : lignes souterraines de télécommunications.
                  </p>
                  <h5>CARACTÉRISTIQUES ET NORMES</h5>
                  <p>
                    Ces tubes sont de couleur grise claire ou orang de longueur de 6m.
                  </p>
                  <h5>MARQUAGE</h5>
                  <p>
                    Ces tubes fabriques en pvc-u de couleur gris clair et sont livres pre manchonnes en longueur de 6 mètres hors tout . 
                    Ces tubes sont désignes par leur diamètre , épaisseur et type d’assemblage. 
                    Ces tubes sont fabriques suivant la norme NFT 54-018. 
                  </p>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/telecometube.png"} width={300} height={300} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
            </div>
            <div className={styles.head1}>
                <h1>La Fiche Technique</h1>
            </div> <br />
            <div className={styles.pdf_container}>
                <a href="/Pvc_Telecom_Tube.pdf" download><Image src={"/Telecom_Tube.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
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
              <Link className={styles.navlink +" "+ styles.active} href="/Produits/PvcTelecomTube">Telecom Tube</Link>
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