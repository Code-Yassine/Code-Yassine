import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

function Header(props: { text: string}) {
    return(
    <header className={styles.header}>
        <div className={styles.container}>
            <Image src={"/logo.png"} alt="logo" width={120} height={44} className={styles.logo}></Image>
            <nav className={styles.nav}>
                <Link className={`${styles.navlink} ${props.text === "Acceuil" ? styles.active : ""}`} href="/">Acceuil</Link>
                <Link className={`${styles.navlink} ${props.text === "Qualite" ? styles.active : ""}`} href="/Qualite">Qualite</Link>
                <Link className={`${styles.navlink} ${props.text === "Produits" ? styles.active : ""}`} href="/Produits">Produits</Link>
                <a    className={`${styles.navlink} ${props.text === "Catalogue" ? styles.active : ""}`} href="/Catalogue">Catalogue</a>
                <Link className={`${styles.navlink} ${props.text === "Contact" ? styles.active : ""}`} href="/Contact">Contact</Link>
            </nav>
        </div>
    </header>
    );
}

export default Header;