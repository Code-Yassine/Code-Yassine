import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactUs(){
    return(
        <div className={styles.main}>
            <h2>Vous souhaitez obtenir des renseignements sur nos produits ? &nbsp;&nbsp;&nbsp;<span><Link href="/Contact">Contact Us</Link></span></h2>
        </div>
    );
}
