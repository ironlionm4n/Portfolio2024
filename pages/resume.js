import Head from "next/head";
import React from "react";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="Resume" content="Resume" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <h1>Resume</h1>
          <embed src="./public/resume.pdf" width="100%" height="600px" />
        </section>
      </main>
    </>
  );
};

export default Resume;
