import Head from "next/head";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import {
  FaDivide,
  FaInstagram,
  FaRegHandshake,
  FaSquareXTwitter,
  FaUnity,
} from "react-icons/fa6";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContext, useState } from "react";
import profile from "../public/ProfilePicture.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import itch from "../public/itch.png";
import Link from "next/link";
import { useDarkMode } from "../context/DarkMode";
import NavButton from "../components/NavButton";
import SwitchTheme from "../components/SwitchTheme";
import usePopcorn from "../public/usepopcorn.png";
import pizzaproj from "../public/pizzaproj.png";

import { Badge, Tooltip } from "flowbite-react";
import CustomTooltip from "../components/CustomTooltip";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mikail&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-2 dark:bg-gray-900 md:px-20 lg:px-40">
        <HeroSection />
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">More About Me</h3>
            <p className="text-md lg:text-2xl py-2 leading-8 text-gray-800 dark:text-gray-200 px-2">
              Recent graduate from Kennesaw State University with a Bachelor of
              Science in Computer Game Design and Development, minor in Computer
              Science. I have a passion for creating games and teaching others
              how to create games. I have experience with{" "}
              <span className="text-teal-500">
                Unity, C#, JavaScript, React, and React Native
              </span>
              {". "}I have previous work experience in positions of leadership
              in operations for a restaurant and a logistics company. This has
              equipped me with the skills to work in a fast-paced environment,
              manage multiple tasks, and work with a team to achieve a common
              goal.
            </p>
            <p className="text-md lg:text-2xl py-2 leading-8 text-gray-800 dark:text-gray-200 px-2">
              Transitioning into the tech industry, I have worked as a frontend
              React developer and have experience with React Native with that
              same company. I contributed to all aspects of the development
              lifecycle from design to deployment. My primary role was creating
              all the frontend components for our Cashier Station and Kiosk
              Ionic React Applications. I also maintained a legacy React Native
              application which allowed me to gain experience with React Native
              and deploying mobile apps to the Google Play Store and Apple App
              Store.
            </p>
            <p className="text-md lg:text-2xl py-2 leading-8 text-gray-800 dark:text-gray-200 px-2">
              As I pursue a career in the tech industry, I am currently
              freelancing as a Software Developer. Working on a fullstack .NET
              Entity Framework Core and React application for a client. I am
              also working on a Unity game project for a client.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-md p-10 rounded-xl my-10 bg-white flex-1">
              <Image
                src={itch}
                width={100}
                height={100}
                alt="Play my games on Itch.io"
              />
              <h3 className="text-xl lg:text-2xl font-medium pt-8 pb-2 ">
                Play my games on Itch.io
              </h3>
              <p className="py-2 text-md lg:text-xl">
                Check out my games on Itch.io. I have a variety of games that I
                have created using Unity. They are free to play directly on a
                browser - no download required!
                <br></br>
                Must be on a{" "}
                <span className="text-teal-500 underline font-semibold">
                  desktop browser.
                </span>
              </p>
              <div className="mt-8 hover:cursor-pointer">
                <a
                  className="py-3 text-teal-300 bg-gray-700 rounded-2xl px-4 text-lg lg:text-xl"
                  href="https://ironlionm4n.itch.io/"
                  target="blank"
                >
                  Visit My Itch Page
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-6 md:p-8 rounded-xl my-10 dark:bg-white flex-1">
              <div className=" w-full flex justify-center h-16 md:h-24">
                <FaUnity className=" w-auto h-auto" />
              </div>
              <h3 className="text-xl lg:text-2xl font-medium pt-8 pb-2 ">
                Unity Consulting
              </h3>
              <p className="py-2 text-md lg:text-xl">
                Do you have an indea for a game and want to bring it to life? Or
                perhaps you have a current issue with your game that you need
                help with. I can help you with that!
              </p>
              <h4 className="py-4 text-teal-600 text-lg lg:text-xl">
                Unity Specializations
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
                <p className="text-gray-800 py-1 text-lg lg:text-xl">
                  C# Scripting |
                </p>
                <p className="text-gray-800 py-1 text-lg lg:text-xl">
                  Systems and Mechanics |
                </p>
                <p className="text-gray-800 py-1 text-lg lg:text-xl">
                  Artificial Intelligence |
                </p>
                <p className="text-gray-800 py-1 text-lg lg:text-xl">
                  Game Feel and Juice
                </p>
              </div>
              <div className="mt-8 hover:cursor-pointer">
                <Link href="/contact">
                  <a className="py-3 text-teal-300 bg-gray-700 rounded-2xl px-4 text-lg lg:text-xl">
                    Contact Me
                  </a>
                </Link>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className=" w-full flex justify-center h-16 md:h-24">
                <FaRegHandshake className="w-auto h-auto" />
              </div>
              <h3 className="text-xl lg:text-2xl font-medium pt-8 pb-2 ">
                Seeking Full-Time Employment
              </h3>
              <p className="py-2 text-lg lg:text-xl">
                I am actively seeking full-time employment as a Software
                Developer in the Atlanta area. I am open to remote work as well.
                I have experience with React, React Native, .NET, Entity
                Framework Core, and Unity. Willing to learn anything new and
                consider myself a quick learner.
              </p>
              <h4 className="py-4 text-teal-600 text-lg lg:text-xl">
                If you think I have any skills that fit your needs, I encourage
                you to reach out to me.
              </h4>
              <div className="mt-8 hover:cursor-pointer">
                <Link href="/contact">
                  <a className="py-3 text-teal-300 bg-gray-700 rounded-2xl px-4 text-lg lg:text-xl">
                    Contact Me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-4xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md md:text-2xl py-2 leading-8 text-gray-800 dark:text-gray-200 text-center">
              Since my beginnings as a freelance developer, I have worked with
              <span className="text-teal-500"> individuals </span>, and
              consulted for <span className="text-teal-500">startups </span>,
              collaborating with talanted people to create digital products for
              both business and consumer use. I offer from a wide range of
              services, including direct development, software support, trouble
              shooting, testing, and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 px-2 m-2 lg:px-24 lg:mx-24">
            <ProjectCard
              imageSrc={usePopcorn}
              badgeContent="Open Movie Database API Project"
              url="https://cerulean-pasca-6669b9.netlify.app/"
            />
            <div className=" bg-black dark:bg-white w-full p-1 rounded-xl my-4 shadow-md shadow-gray-500 dark:shadow-teal-500"></div>
            <ProjectCard
              imageSrc={pizzaproj}
              badgeContent="Pizza Ordering System Project"
              url="https://ironpizzaproj.netlify.app/"
            />
            <div className=" bg-black dark:bg-white w-full p-1 rounded-xl my-4 shadow-md shadow-gray-500 dark:shadow-teal-500"></div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <p className="text-xl lg:text-4xl font-poppins italic text-slate-600 dark:text-teal-300 font-bold my-4 py-2 hover:scale-110 transition-all">
            More Content Coming Soon!
          </p>
        </section>
      </main>
    </div>
  );
}
