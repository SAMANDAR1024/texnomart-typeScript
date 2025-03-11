import React from "react";

function Aboutpage() {
  return (
    <div className="flex justify-center items-center pt-32 text-white px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h2 className="text-4xl font-bold text-green-400">About Me</h2>
        <p className="text-lg leading-relaxed">
          <span className="hover:text-red-600 transition-colors duration-300">
            Hello,
          </span>{" "}
          My name and firstName
          <span className="text-green-400 font-semibold hover:text-red-600 transition-colors duration-300">
            {" "}
            Zafarov Samandar.
          </span>{" "}
          I am 16 years old. I have a strong interest in
          <span className="text-blue-400 font-semibold hover:text-red-600 transition-colors duration-300">
            {" "}
            IT
          </span>
          <span>
            {" "}
            and web development technologies, and I am currently studying in
            this field.
          </span>
        </p>
        <p className="text-lg leading-relaxed">
          I have experience in Frontend technologies such as
          <span className="text-yellow-400 font-semibold hover:text-red-600 transition-colors duration-300">
            {" "}
            HTML, CSS, SCSS, JavaScript, Tailwind CSS, React, Bootstrap, and
            GitHub.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Aboutpage;
