import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { textVariant, fadeIn, staggerContainer } from '../utils/animationVariants';
import { projectsData } from '../data/projectsData'; // You'll create this file

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)} // Staggered animation
      className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col h-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-[24px] mb-2">{project.name}</h3>
        <p className="text-gray-300 text-[14px] leading-relaxed">{project.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-[12px] font-medium py-1 px-3 rounded-full ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <SectionWrapper idName="projects">
      <motion.div variants={textVariant(0)}>
        <p className="text-sm text-teal-400 uppercase tracking-wider">My Work</p>
        <h2 className="text-4xl font-bold text-white mt-2 mb-8">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described and reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
