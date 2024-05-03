import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import profile from "../public/ProfilePicture.jpg";
import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "../context/DarkMode";
import NavButton from "./NavButton";
import SwitchTheme from "./SwitchTheme";
import CustomTooltip from "./CustomTooltip";

const HeroSection = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <section className="min-h-screen">
      <nav className="py-4 md:py-10 mb-12 flex justify-between items-center dark:text-white ml-4 pl-4">
        <CustomTooltip content="Made with Next.js & TailwindCSS">
          <h1 className="font-burtons text-md md:text-lg lg:text-3xl mr-4 hover:cursor-vertical-text">
            Mikail&apos;s Portofolio
          </h1>
        </CustomTooltip>
        <ul className="flex flex-row-reverse items-center justify-evenly md:justify-start md:gap-4 lg:gap-12 w-full lg:w-1/2 h-12 lg:h-16">
          <SwitchTheme darkMode={darkMode} setDarkMode={setDarkMode} />
          <NavButton>
            <Link href="/contact">
              <a>Contact Me</a>
            </Link>
          </NavButton>
          <NavButton>
            <a href="./resume.pdf" target="blank" download={false}>
              Resume
            </a>
          </NavButton>
        </ul>
      </nav>
      <div className="text-center p-2 md:p-4 lg:p-6 pb-10">
        <h2 className="text-5xl pb-2  text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Hi, I&apos;m Mikail Miller!
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Unity Game Developer & Educator | Apprentice Full-Stack Developer
        </h3>
        <p className="text-md lg:text-2xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-lg">
          I&apos;m a Unity Game Developer and Educator with a passion for
          teaching and creating games. I&apos;m also an aspiring full-stack
          developer with a drive to learn how to create high quality software.
        </p>
        <div className=" bg-black dark:bg-white w-full p-1 rounded-xl my-4 shadow-md shadow-gray-500 dark:shadow-teal-500"></div>
        <h4 className="dark:text-white p-2 text-md lg:text-2xl md:text-lg">
          You can connect with me on various social media platforms.
        </h4>

        <div className="text-3xl md:text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://twitter.com/ironliondev"
            className=" text-black dark:text-white"
            target="blank"
          >
            <FaSquareXTwitter />
          </a>
          <a
            className=" text-black dark:text-white"
            href="https://www.linkedin.com/in/mikail-miller/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            className=" text-black dark:text-white"
            href="https://www.instagram.com/ironlionm4n/?hl=en"
            target="blank"
          >
            <AiFillInstagram className=" text-black dark:text-white" />
          </a>
          <a
            className=" text-black dark:text-white"
            href="https://github.com/ironlionm4n"
            target="blank"
          >
            <AiFillGithub />
          </a>
        </div>
        <p className="dark:text-white text-md lg:text-2xl py-2 mt-2">
          You can find me on Wyzant where I tutor Unity Game Development and
          Computer Science topics!
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            className=" text-black dark:text-white"
            //href="https://www.wyzant.com/Tutors/UnityTutoringByMikail"
            href="https://www.wyzant.com/Tutors/GA/Marietta/10011508"
            target="blank"
          >
            <Image
              src="/wyzant-logo.png"
              alt="Wyzant Link"
              width="50px"
              height="50px"
            />
          </a>
        </div>
        <div className=" bg-black dark:bg-white w-full p-1 rounded-xl my-4 shadow-md shadow-gray-500 dark:shadow-teal-500"></div>
        <div className="mx-auto rounded-full w-auto h-56 relative overflow-hidden mt-20 md:h-96 md:w-96 shadow-md shadow-zinc-600 dark:shadow-md dark:shadow-teal-600">
          <Image
            src={profile}
            layout="fill"
            objectFit="cover"
            alt="Profile Avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
