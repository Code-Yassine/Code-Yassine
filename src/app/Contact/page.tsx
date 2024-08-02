"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


function Contact() {
  return (
    <>
      <Header text="Contact" />
      <main className={styles.main}>
        <section className={styles.contact}>
          <form>
            <h2>Contact</h2>
            <div className={styles.input_box}>
              <label>Nom:</label>
              <input
                type="text"
                name="nom"
                className={styles.field}
                placeholder="Entrer votre nom"
                required
              />
            </div>
            <div className={styles.input_box}>
              <label>Prenom:</label>
              <input
                type="text"
                name="prenom"
                className={styles.field}
                placeholder="Entrer votre prenom"
                required
              />
            </div>
            <div className={styles.input_box}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className={styles.field}
                placeholder="Entrer votre email"
                required
              />
            </div>
            <div className={styles.input_box}>
              <label>Message:</label>
              <textarea
                name="message"
                className={`${styles.field} ${styles.message}`}
                placeholder="Entrer votre message"
                required
              />
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;