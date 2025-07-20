import { motion } from "framer-motion";
import logo1 from "/public/l1.png";
import logo2 from "/public/l2.png";
import logo3 from "/public/l3.png";
import logo4 from "/public/l4.png";
// Add more logo imports as needed

const experiences = [

     {
    role: "Project Intern",
    company: "Samsung R&D Institute India",
    period: "Mar 2025 - Present",
    //description: "Designed a custom MARL algorithm with emergent communication for cooperative predator-prey pursuit, enhancing coordination via a learnable scalar signal in partially observable environments.",
    logo: logo3
  },

    {
    role: "Research and Data",
    company: "Placfv's (SRM Placement Student Team)",
    period: "Jan 2025 - Present",
    //description: "Designed a custom MARL algorithm with emergent communication for cooperative predator-prey pursuit, enhancing coordination via a learnable scalar signal in partially observable environments.",
    logo: logo4
  },

  {
    role: "Summer Research Intern",
    company: "NIT Trichy",
    period: "May 2025 - July 2025",
    description: "Designed a custom MARL algorithm with emergent communication for cooperative predator-prey pursuit, enhancing coordination via a learnable scalar signal in partially observable environments.",
    logo: logo2
  },
  {
    role: "Research Intern",
    company: "Research Center Imarat, DRDO",
    period: "Dec 2024 - Jan 2025",
    description: "Analyzed big datasets with Python and Pandas to inform data-driven decisions and model development within TensorFlow and Scikit-Learn And worked closely with engineers and scientists to integrate Machine Learning solutions into defense projects.",
    logo: logo1
  },
  // Add more experiences as needed
];

const Experience = () => (
  <div id="experience" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-light text-white md:text-6xl"
    >
      Experience
    </motion.h1>
    <div className="flex flex-col gap-10 w-full max-w-2xl">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="flex items-center gap-8 rounded-xl bg-black/60 p-6 shadow-lg"
        >
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-16 h-16 object-contain rounded-full bg-white/10 shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-blue-400">{exp.role}</h2>
            <h3 className="text-lg text-gray-300">{exp.company} &middot; {exp.period}</h3>
            <p className="mt-2 text-gray-400">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Experience;