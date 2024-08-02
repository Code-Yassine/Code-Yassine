import styles from "./statistique.module.css";
export default function Statistique(){
    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <span>+500</span><br />
                Clients 
            </div>
            <div className={styles.container}>
                <span>+44</span><br />
                Les villes Livrison
            </div>
            <div className={styles.container}>
                <span>+20</span> <br /> 
                Annee D'experience
            </div>
        </div>
    );
}


