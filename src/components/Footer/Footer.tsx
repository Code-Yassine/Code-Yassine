import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
    return(
        <footer>
            
            <div className={styles.container}>
                <div className={styles.footer}>
                    <Image src={"/logo.png"} alt="logo" width={120} height={44} className={styles.logo}></Image>
                    <p>
                    Cree en 2015, <span>indusplast</span> est une société Marocaine <br /> spécialisée dans l’extrusion et 
                    l’injection des tuyaux et <br /> accessoires plastiques, en chlorure de polyvinyle(PVC).
                    </p>
                </div>
                <div className={styles.footer}>
                    <h3>Contact:</h3>
                    <div className={styles.text}>
                    <p>• Centre Sidi Moussa Ben Ali-Casablanca</p>
                    <li><Link href="mailto:indusplast1@example.com">• indusplast1@example.com</Link><br /></li>
                    <li><Link href="mailto:indusplast2@example.com">• indusplast2@example.com</Link><br /></li>
                    <li><Link href="call:0523297801">• Tele : 0523297801</Link><br /></li>
                    <li><Link href="call:0523297802">• Fax : 0523297802</Link> <br /></li>
                    </div>
                </div>
                <div className={styles.footer3 +" "+styles.footer}>
                    <h3>Telechargement:</h3>
                    <div className={styles.text}>
                        <li><Link href="Qualite">• Attestations / Certificats</Link> <br /></li>
                        <li><Link href="/Produits">• Fiches Technique</Link><br /></li>
                        <li> <Link href="/Catalogue">• Notre Catalogue</Link><br /></li>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;