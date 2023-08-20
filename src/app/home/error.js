"use client";
import Link from "next/link";

function error() {
  return (
    <>
      <h2 style={{ margin: "50px auto" }}>
        Ooops, Une erreur s&lsquo;est produite.
      </h2>
      <Link href="/home" style={{ margin: "50px auto" }}>
        Aller à la page d&lsquo;accueil
      </Link>
    </>
  );
}

export default error;
