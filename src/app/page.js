"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [isRegistered, setIsRegistered] = useState(false);

  const setToRegister = (e) => {
    e.preventDefault();
    setIsRegistered(false);
  };
  const setToLogin = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };
  return (
    <div
      id="container"
      className={
        isRegistered === true
          ? styles.container
          : styles.container + " " + styles.rightPanelActive
      }
    >
      <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
        <form className={styles.form}>
          <h1 className={styles.h1_title}>Créer un compte</h1>
          <div className={styles.socialContainer}>
            <a href="#" className={` ${styles.link} ${styles.social}`}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={` ${styles.link} ${styles.social}`}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={` ${styles.link} ${styles.social}`}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className={styles.span}>Ou s&lsquo;inscrire avec.</span>
          <input className={styles.input} type="text" placeholder="Nom" />
          <input className={styles.input} type="email" placeholder="Email" />
          <input
            className={styles.input}
            type="password"
            placeholder="Mot de passe"
          />
          <button
            className={`${styles.button} `}
            onClick={(e) => setToRegister(e)}
          >
            S&lsquo;inscrire
          </button>
        </form>
      </div>
      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form className={styles.form} action="#">
          <h1 className={styles.h1_title}>Sign in</h1>
          <div className={styles.socialContainer}>
            <a href="#" className={`${styles.social} ${styles.link}`}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={`${styles.social} ${styles.link}`}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={`${styles.social} ${styles.link}`}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className={styles.span}>or use your account</span>
          <input className={styles.input} type="email" placeholder="Email" />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <a className={styles.link} href="#">
            Forgot your password?
          </a>
          <button
            className={`${styles.button} `}
            onClick={(e) => setToLogin(e)}
          >
            Se connecter
          </button>
        </form>
      </div>
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <h1 className={styles.h1_title}>Bienvenue!</h1>
            <p className={styles.paragraph}>
              Veillez vous connecter avec vos identifiants svp.
            </p>
            <button
              className={`${styles.button} ${styles.ghost}`}
              id="signIn"
              onClick={(e) => setToLogin(e)}
            >
              Se connecter
            </button>
          </div>
          <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            <h1 className={styles.h1_title}>Hello, Friend!</h1>
            <p className={styles.paragraph}>
              Enter your personal details and start journey with us
            </p>
            <button
              className={`${styles.button} ${styles.ghost}`}
              onClick={(e) => setToRegister(e)}
              id="signUp"
            >
              S&lsquo;inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
