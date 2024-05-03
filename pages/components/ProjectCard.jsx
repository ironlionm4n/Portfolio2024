import React from "react";
import Image from "next/image";
import { Badge } from "flowbite-react";

const ProjectCard = ({ imageSrc, badgeContent, url }) => {
  return (
    <div className=" basis-1/3 w-auto shadow-md shadow-black rounded-lg">
      <Badge
        color="teal"
        className="rounded-lg dark:bg-slate-700 dark:text-white text-center text-lg md:text-2xl mb-4 p-2"
      >
        {badgeContent}
      </Badge>
      <a href={url} target="blank">
        <Image
          className="rounded-lg object-cover hover:scale-110 hover:cursor-pointer duration-500 ease-in-out"
          layout="responsive"
          src={imageSrc}
          alt="OMDB API Project"
        />
      </a>
    </div>
  );
};

export default ProjectCard;
