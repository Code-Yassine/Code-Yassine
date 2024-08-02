import Header from "@/components/Header/Header";
import styles from "./page.module.css";

export default function Catalogue() {
    return (
        <>
            <Header text="Catalogue" />
            <div className={styles.pdf_container}>
                <iframe src="/catalogue_indusplast_2024.pdf" width="100%" height="100%">
                </iframe>
                <a className={styles.pdf_download} href="/catalogue_indusplast_2024.pdf" download>Download PDF</a>
            </div>
        </>
    );
}