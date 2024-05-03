import React from "react";
import resume from "../public/resume.pdf";
const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <iframe src={resume} width="100%" height="1000px"></iframe>
    </div>
  );
};

export default Resume;
