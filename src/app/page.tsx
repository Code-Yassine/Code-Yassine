import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Statistique from "@/components/statistique/statistique";
import ContactUs from "@/components/contactus/contact";
import NosReferences from "@/components/NosReferences/NosReferences";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header text = "Acceuil"/>
        <div className={styles.box}>
          <div className={styles.container}>
            <h1><span>INDUS</span>PLAST</h1>
            <h4>Qualite -- Fiabilité -- Efficacité -- Confiance</h4>
            <Link href="/Produits"><div className={styles.btn}>NOS PRODUITS</div></Link>
          </div>
        </div>
      </main>
      <div className={styles.pre}>
          <div className={styles.text}>
          <h1>Présentation :</h1>
          <div className={styles.line}/>
          <p>
          Cree en 2015, indusplast est une société Marocaine spécialisée <br />
          dans l’extrusion et l’injection des tuyaux et accessoires plastiques, <br /> 
          en chlorure de polyvinyle(PVC).
          </p>
          <h1>Assistance technique :</h1>
          <div className={styles.line2}/>
          <p>
          INDUSPLAST forme les prescripteurs et les installateurs aux différentes techniques <br /> 
          de pose aussi bien dans le cadre de son centre de formation que sur chantiers. Un bureau <br /> 
          d’études est a votre disposition pour réaliser des plans d’etailles des réseaux, le calepinage <br />
          mais aussi répondre a vos questions techniques.
          </p>
          </div>
          <Image src={"/pipe-factory.jpg"} alt="factory" width={400} height={300} className={styles.image}/>
        </div>
        <Statistique />
        <Produits />
        <br />
        <Secteurs />
        <NosReferences />
        <ContactUs />
      <Footer />
    </>
  );
}


function Secteurs(){
  return(
    <div>
          <div className={styles.head1}>
            <h1>Secteurs d’activités</h1>
          </div>
          <br />
          <div className={styles.secteurs}>
            <div>
            <Image src={"/batiment (1).jfif"} alt="photo" width={300} height={300} className={styles.Image}/>
            <h2>Batiment</h2>
            </div>
            <div>
            <Image src={"/batiment (2).jfif"} alt="photo" width={300} height={300} className={styles.Image}/>
            <h2>Travaux publics</h2>
            </div>
            <div>
            <Image src={"/batiment (3).jfif"} alt="photo" width={300} height={300} className={styles.Image}/>
            <h2>Irrigation et Drainage</h2>
            </div>
          </div>
        </div>
  );
}


function Produits(){
  return(
    <div>
      <div className={styles.head}>
        <h1>Nos Produits</h1>
        <p>
        INDUSPLAST propose un système complet, sur, économique et rationnel pour un apport de
        la meilleure qualité et efficacité, en conformité avec les exigences réglementaires.
        Dont notamment les tubes PVC, les tuyaux PE à des différents diamètres, les accessoires
        et accessoires eau potable
        </p>
      </div>
      <div className={styles.produits}>
        <div className={styles.cadre}>
          <Image src={"/Evacuation-Tube.jpg"} alt="" width={200} height={200}/>
          <h3>Pvc Evacuation Tube</h3>
          <Link href={"/Produits"}><div className={styles.button}>lire plus</div></Link>
        </div>
        <div className={styles.cadre}>
          <Image src={"/pvc_Pression_tube.jpg"} alt="" width={200} height={200}/>
          <h3>Pvc Pression Tube</h3>
          <Link href={"/Produits/PvcPressionTube"}><div className={styles.button}>lire plus</div></Link>  
        </div>
        <div className={styles.cadre}>
          <Image src={"/pe-pression.jpg"} alt="" width={200} height={200}/>
          <h3>Pe Pression Tube</h3>
          <Link href={"/Produits/PePressionTube"}><div className={styles.button}>lire plus</div></Link> 
        </div>
      </div>
      <div className={styles.produits}>
        <div className={styles.cadre}>
          <Image src={"/assainissement-tube.jfif"} alt="" width={200} height={200}/>
          <h3>Pvc Assainissement <br /> Tube</h3>
          <Link href={"/Produits/PvcAssainissementTube"}><div className={styles.button}>lire plus</div></Link>
        </div>
        <div className={styles.cadre}>
          <Image src={"/forage-tube1.jfif"} alt="" width={200} height={200}/>
          <h3>Pvc Forage Tube</h3>
          <Link href={"/Produits/PvcForageTube"}><div className={styles.button}>lire plus</div></Link>  
        </div>
        <div className={styles.cadre +" "+ styles.last}>
          <h3>plus des produits</h3>
          <Link href={"/Produits"}><div className={styles.button}>lire plus</div></Link> 
        </div>
      </div>
    </div>
  );
}