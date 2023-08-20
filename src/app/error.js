"use client";
import Link from "next/link";

function error() {
  return (
    <>
      <h2 style={{ margin: "50px auto" }}>
        Ooops, Une erreur s&lsquo;est produite.
      </h2>
      <Link href="/">Réessayer</Link>
    </>
  );
}

export default error;
