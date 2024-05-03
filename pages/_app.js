import "../styles/globals.css";
import React, { useEffect } from "react";
import { DarkModeProvider } from "../context/DarkMode";
import emailjs from "@emailjs/browser";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    emailjs.init("hq1Q-p9zG34owTsmJ");
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="afterInteractive"
      />
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  );
}

export default MyApp;
