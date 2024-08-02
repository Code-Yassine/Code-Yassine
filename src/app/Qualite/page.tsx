import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/contactus/contact";
import NosReferences from "@/components/NosReferences/NosReferences";

export default function Qualite() {
  return (
    <>
    <Header text={"Qualite"} />
      <main className={styles.main}>
          <div className={styles.container}>
              <h1>Qualite</h1>
          </div>
      </main>
      <div className={styles.box}>
        <div className={styles.text}>
          <h5>Qualite :</h5>
          <p>
            Du fait de notre ambition d’être a même de pouvoir travailler aussi bien avec les PME locales que 
            les grands donneurs d’ordres internationaux, nous nous sommes engages des la création de l’entreprise 
            dans une démarche qualité très forte et présente a tous les niveaux de l’entreprise. Certifies ISO 9001 , 
            nous garantissons a nos clients une écoute et une réactivité a leurs exigences et a leurs attentes.
          </p>
          <h5>Politique envirenementale :</h5>
          <p>
            En raison des matières premières employées, les tuyaux produits par Indusplast Maroc favorisent une gestion 
            environnementale efficace, car leurs composants sont hautement recyclables. De plus, aucune substance ou 
            gaz polluant n'est utilisé lors du processus de fabrication, ce qui permet au produit final de contribuer à 
            une meilleure évacuation des eaux résiduelles et pluviales.
          </p>
        </div>
        <div className={styles.text}>
        <Image src={"/qualite.jpg"} alt="qualite" width={300} height={200} className={styles.image}/>
        <br />
        <br />
        <Image src={"/envi.jfif"} alt="qualite" width={300} height={200} className={styles.image}/>
        </div>
      </div>
    <Certifier/>
    <NosReferences />
    <ContactUs />
    <Footer/>
    </>

  );
}


function Certifier(){
  return(
    <>
    <div className={styles.head1}>
      <h1>Certificats</h1>
    </div> <br />
    <div className={styles.imageContainer}>
      <Image src={"/eurofins.png"} alt="" width={300} height={300}/>
      <Image src={"/ctpc.jfif"} alt="" width={300} height={300}/>
    </div>
    </>
  );
}