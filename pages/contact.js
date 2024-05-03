import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from "./context/DarkMode";
import emailjs from "@emailjs/browser";
import NavButton from "./components/NavButton";
import SwitchTheme from "./components/SwitchTheme";

const Contact = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const form = React.useRef();

  const sendEmail = async (e) => {
    if (
      form.current.name.value === "" ||
      form.current.email.value === "" ||
      form.current.message.value === ""
    ) {
      alert("Please fill out all fields");
      return;
    }

    e.preventDefault();
    // console.log(form.current.name.value);
    // console.log(form.current.email.value);
    // console.log(form.current.message.value);
    await emailjs
      .send("service_40elgyg", "template_08ufv5e", {
        from_name: "Mikail Miller",
        to_name: form.current.name.value,
        message: form.current.message.value,
        reply_to: form.current.email.value,
      })
      .then((result) => {
        alert("Message Sent Successfully");
      })
      .catch((error) => {
        alert("An error occurred, Please try again", error);
      });

    e.target.reset();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Contact Me</title>
        <meta name="Contact Form" content="Contact Me" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Mikail&apos;s Portofolio</h1>
            <ul className="flex items-center gap-4">
              <NavButton>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </NavButton>
              <SwitchTheme darkMode={darkMode} setDarkMode={setDarkMode} />
            </ul>
          </nav>
          <div className="bg-zinc-50 dark:bg-zinc-100 rounded-md shadow-sm shadow-black dark:shadow-teal-200">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center items-center gap-3 dark:bg-slate-600 p-4"
            >
              <h2 className="text-2xl lg:text-4xl text-black dark:text-teal-300 font-semibold">
                Contact Me
              </h2>
              <label
                htmlFor="name"
                className="text-black dark:text-white font-semibold text-xl lg:text-2xl"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter Name"
                className="w-10/12 lg:w-4/12 h-12 mb-8 mx-8 text-lg lg:text-xl p-2 bg-zinc-100 border-2
                 border-black dark:border-teal-300"
              />
              <label
                htmlFor="email"
                className="text-black dark:text-white font-semibold text-xl lg:text-2xl"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter Email"
                className="w-10/12 lg:w-4/12 h-12 mb-8 mx-8 text-lg lg:text-xl p-2 bg-zinc-100 border-2
                border-black dark:border-teal-300"
              />
              <label
                htmlFor="message"
                className="text-black dark:text-white font-semibold text-xl lg:text-2xl"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Message..."
                rows="4"
                className="w-10/12 lg:w-8/12 mb-8 mx-8 text-lg lg:text-xl p-2 bg-zinc-100 border-2
                border-black dark:border-teal-300"
              />
              <button
                type="submit"
                className="text-white dark:text-teal-200 w-4/12 lg:w-3/12 font-semibold text-xl lg:text-2xl bg-slate-400 dark:bg-slate-400 rounded-md p-2 hover:bg-teal-400 dark:hover:bg-teal-600 transition duration-500 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
