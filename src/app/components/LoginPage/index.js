"use client";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import styles from "../../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();

  const setToRegister = (e) => {
    e.preventDefault();
    setIsRegistered(false);
  };
  const setToLogin = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    console.log(router);
    router.push("/home", { scroll: false });
  };
  return (
    <div
      id="container"
      style={{ marginTop: "150px" }}
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
            <a href="#">
              {/* <i className="fab fa-facebook-f"></i> */}
              <BsFacebook
                className={styles.socialIcon}
                style={{
                  width: "100%",
                  height: "100%",
                  color: "var(--bg-dark)",
                }}
              />
            </a>
            <a href="#" className={`${styles.link} ${styles.social}`}>
              {/* <i className="fab fa-google-plus-g"></i> */}
              <BsGoogle
                className={styles.socialIcon}
                style={{
                  width: "100%",
                  height: "100%",
                  color: "var(--bg-dark)",
                }}
              />
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
          <h1 className={styles.h1_title}>Se connecter</h1>
          <div className={styles.socialContainer}>
            <a href="#" className={`${styles.social} ${styles.link}`}>
              <BsFacebook
                className={styles.socialIcon}
                style={{
                  width: "100%",
                  height: "100%",
                  color: "var(--bg-dark)",
                }}
              />
            </a>
            <a href="#" className={`${styles.social} ${styles.link}`}>
              <BsGoogle
                className={styles.socialIcon}
                style={{
                  width: "100%",
                  height: "100%",
                  color: "var(--bg-dark)",
                }}
              />
            </a>
          </div>
          <span className={styles.span}>ou utilisez vos identifiants</span>
          <input className={styles.input} type="email" placeholder="Email" />
          <input
            className={styles.input}
            type="password"
            placeholder="Mot de passe"
          />
          <a className={styles.link} href="#">
            Mot de passe oublié ?
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
            <h1 className={styles.h1_title}>Bonjour cher ami!</h1>
            <p className={styles.paragraph}>
              Inscrivez-vous puis profitez de notre merveilleux blog.
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

export default LoginPage;
