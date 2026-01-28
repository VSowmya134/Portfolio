import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/animationVariants";

const About = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant(0)}>
        <p className="text-sm text-teal-400 uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-4xl font-bold text-white mt-2 mb-8">
          About Me
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="lg:w-full"
        >
          <p className="mb-4">
            Hello! I’m{" "}
            <span className="font-semibold text-teal-400">
              Vunnam Sowmya
            </span>
            , a Computer Science and Engineering undergraduate at G. Pullaiah
            College of Engineering and Technology.
          </p>

          <p className="mb-4">
            I specialize in web development and enjoy building responsive and user-friendly applications. I have experience working with databases and using version control tools for collaborative development.
          </p>

          <p className="mb-4">
            Through my internship experiences, I have worked on building
            responsive web applications, implementing backend functionality,
            and collaborating with teams to deliver scalable solutions. I also
            have hands-on exposure to machine learning concepts through data
            analysis and real-world datasets.
          </p>

          <p className="mb-6">
            I enjoy working on practical projects, learning new technologies,
            and continuously improving my development skills. I am actively
            looking for opportunities to grow as a software developer and
            contribute to impactful projects.
          </p>

          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Let’s Connect
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
