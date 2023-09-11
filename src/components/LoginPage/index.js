"use client";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import styles from "../../app/page.module.css";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setGithubUsername,
  setGithubUserData,
} from "../../helpers/redux_toolkit";
import axios from "axios";
function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const router = useRouter();
  const github_name = useRef("");

  const dispatch = useDispatch();
  const github_userData = useSelector((state) => state.user.github_userData);

  // useEffect(() => {
  //   if (github_userData !== null) {
  //      // Redirect to the home page
  //   }
  // }, [github_userData]);

  const setToRegister = (e) => {
    e.preventDefault();
    setLoadingBtn(true);
    sessionStorage.setItem("github_username", github_name.current.value);

    fetchGithubUserData(github_name.current.value);
    setIsRegistered(false);
  };
  const fetchGithubUserData = async (github_username) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    try {
      const result = await axios.post("/api/github_username", {
        github_username 
      });
      setLoadingBtn(false);
    dispatch(setGithubUsername(result.data.user_data.login));
    dispatch(setGithubUserData(result.data.user_data));
      result?.data?.success  && router.push("/home");
      
    } catch (error) {
      console.log("error = ", error);
    }
  };
  const setToLogin = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    //router.push("/home", { scroll: false });
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
          <h1 className={styles.h1_title}>Enregistrez votre compte github </h1>
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
          {/* <span className={styles.span}>Ou s&lsquo;inscrire avec.</span> */}
          <input
            ref={github_name}
            className={styles.input}
            type="text"
            name="github_username"
            autoFocus
            // value="Saintrick-FM"
            placeholder="Intitulé du compte github"
          />
          {/* <input className={styles.input} type="email" placeholder="Email" /> */}

          <Button
            className={`${styles.button} `}
            onClick={(e) => setToRegister(e)}
            size="large"
            style={{
              marginTop: "10px",
              borderRadius: "20px",
              padding: "0 45px",
            }}
            loading={loadingBtn}
          >
            {loadingBtn ? "Chargement..." : "Confirmer"}
          </Button>
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
              Connectez-vous directement avec votre compte github enregistré.
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
              Entrez les informations du compte github puis profitez au max.
            </p>
            {/* <button
              className={`${styles.button} ${styles.ghost}`}
              onClick={(e) => setToRegister(e)}
              >
              Confirmer
            </button> */}
            <Button
              id="signUp"
              className={`${styles.button} ${styles.ghost}`}
              onClick={(e) => setToRegister(e)}
              danger
              loading={loadingBtn}
            >
              {loadingBtn ? "Chargement..." : "Confirmer fm2"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
