import Header from "@/components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "@/components/contactus/contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
 


export default function PvcEvacuationRaccords(){
    return(
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
                <div className={styles.titre}><h1>PVC Evacuation Raccords</h1></div>
                  <p>
                    <span>INDUSPLAST</span> propose un système complet . sur economique et rationnel pour un   apport de la meilleure qualite et efficacite , en conformite avec les exigences reglementaires.
                    Les accessoires sanitaires d’INDUSPLAST sont fabriques en granute de PVC rigide  exempt de charges et plastifiants.
                    Par moulage par injection. Ils se presentent chanfreines et  evases pour leur raccord par encollage . Au cours du processus de fabrication  la meilleure technologie d’injection est utilisee en obtenant un produit de haute qualite. 
                    Le tube et les accessoires ont obtenu la marque M1 par Asso-ciation de Normalisation (AFNOR).                     
                  </p>
              <h5>CARACTÉRISTIQUES TECHNIQUES</h5> <hr/> 
                  <p>
                      •	<span>EMBOITURE</span> : A coller<br/>
                      •	<span>COULEUR</span> : Gris clair RAL 7037<br/>
                      •	<span>REFERENCE</span> : NORME : NF EN 1-1329<br/>
                      •	<span>APPLICATION</span> : Réseau evacuation batiment<br/>
                      •	<span>MISE EN CEUVRE</span> :Installation en aerien a l’interieur du batiment.<br/>
                      nstallation en enterre dans le domaine prive NF.<br/>
                      DTU 60.32 et NF DTU 60.33 <br/>
                      •	<span>NORMES</span> : En 1329 <br/>
                      •	<span>CERTIFICATION A LA MARQUE M1</span> : Non inflammable et auto-extinguible ne cas d’icendie <br/>
                      •	<span>MARQUAGE</span> : INDUSPLAST <br/>
                      •	<span>LIVRAISON</span> : Unite par caisse(u/c) <br/>
                  </p>
                  <hr/>
                </div>
                <div className={styles.box_images}>
                    <Image src={"/evacuationRaccords.jpg"} width={300} height={300} alt={"PVC evacuation Tube"} className={styles.image}/>
                    <Image src={"/evacuationRaccords1.jfif"} width={350} height={300} alt={"PVC evacuation Tube"} className={styles.image}/>
                </div>
            </div>
            <div className={styles.head1}>
                <h1>La Fiche Technique</h1>
            </div> <br />
            <div className={styles.pdf_container}>
                <a href="/Pvc_Evacuation_Raccords.pdf" download><Image src={"/Evacuation_Raccords1.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
                <a href="/Pvc_Evacuation_Raccords.pdf" download><Image src={"/Evacuation_Raccords2.png"} alt="pdf" width={200} height={300}  className={styles.pdf_download}/></a>
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
                <Link className={styles.navlink +" "+ styles.active} href="/Produits/PvcEvacuationRaccords">Evacution Raccords</Link>
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