import Image from "next/image";
import styles from "./NosReferences.module.css";

export default function NosReferences() {
    return (
        <div>
            <div className={styles.head1}>
            <h1>Partenaires Nationaux</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={"/lydec.jfif"} alt="photo" width={150} height={150} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/onep.jfif"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/radees.png"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/radeef.jpg"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/radeet.jfif"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/ocp.jfif"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/amendis.png"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/redal.jfif"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/sonasid.jfif"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/stam.png"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/office.jfif"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/mapmdref.png"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/ramsa.png"} alt="photo" width={100} height={100} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src={"/maroc_telecom.jfif"} alt="photo" width={100} height={100} />
                </div>
            </div>
        </div>
    );
}