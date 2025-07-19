import image1 from "/public/1.png";
import image2 from "/public/2.jpg";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import image6 from "/public/6.png";
import image7 from "/public/7.png";
import image8 from "/public/8.png";
import image9 from "/public/9.png";
import image10 from "/public/10.png";
import image11 from "/public/11.png";
import image12 from "/public/12.png";
import image13 from "/public/13.png";
import image14 from "/public/14.png";
import image15 from "/public/15.png";
import image16 from "/public/16.png";
import image17 from "/public/17.png";

import { motion } from "framer-motion";

const projectsData = [
  {
  image: image17,
  title: "LOC-PRED",
  description: "LOC-PRED is a continuous geolocation model that predicts GPS coordinates from image data by interpolating between known city centroids using deep feature representations. It enables spatial reasoning from sparse training data, offering a novel approach to image-to-GPS prediction.",
  technologies: ["Python", "Jupyter Notebook", "Deep Convolutional Networks"],
  githubLink: "https://github.com/Amitreddy14/LOC-PRED",
  },

  {
  image: image16,
  title: "Centrl-Server-Grp-Chat",
  description: "A secure Signal-style group chat system with encrypted messaging, certificate-based login, and group support using CryptoPP and Boost libraries.",
  technologies: ["C++", "CMake"],
  githubLink: "https://github.com/Amitreddy14/Centrl-Server-Grp-Chat",
  },

  {
  image: image15,
  title: "LZW",
  description: "A Java-based implementation of the Lempel-Ziv-Welch (LZW) algorithm for file compression. It reads text input, builds a dynamic dictionary, and outputs a compressed binary file.",
  technologies: ["Java"],
  githubLink: "https://github.com/Amitreddy14/LZW",
  },

  {
  image: image14,
  title: "Sea-Lifter",
  description: "Sea-Lifter uses MongoDB to store open-source microplastic data and applies recent research to map pollution hotspots with NLP-based clean-up suggestions tailored to local plastic density.",
  technologies: ["Python", "NLP", "MongoDB", "Langchane", "Folium", "Rasa"],
  githubLink: "https://github.com/Amitreddy14/Sea-Lifter",
  },

  {
  image: image13,
  title: "GRNABrain",
  description: "Locus Inference and Generative Adversarial Network for gRNA Design.",
  technologies: ["Python", "GAN", "CRISPR"],
  githubLink: "https://github.com/Amitreddy14/GRNABrain",
  },

  {
  image: image12,
  title: "TopoFicial",
  description: "An Artificial Neural Topology (ANT) built upon a semi-random graph structure that emulates the fundamental characteristics observed in simple cerebral organisms.",
  technologies: ["Python", "ANT", "ANN", "Graph Theory"],
  githubLink: "https://github.com/Amitreddy14/TopoFicial",
  },

  {
  image: image11,
  title: "Travel-APP",
  description: "AI-powered Android application using Kotlin and Python that generates personalized travel itineraries which integrate real-time flight, hotel, and attraction searches via Amadeus and Google Places APIs.",
  technologies: ["Kotlin", "Python", "HTML", "GoogleMaps API", "Amadeus API"],
  githubLink: "https://github.com/Amitreddy14/Travel-APP",
  },

  {
  image: image10,
  title: "Gestroll",
  description: "An Augmented Reality program based on a pre-trained CNN gesture recognition model.",
  technologies: ["Python", "Shell", "openCV", "CNN", "AR"],
  githubLink: "https://github.com/Amitreddy14/Gestroll", 
  },

  {
  image: image9,
  title: "GEN-CLIP-CVAE",
  description: "CVAE for Image Generation inspired by Hierarchical Text-Conditional Image Generation with CLIP Latents",
  technologies: ["Google Colab", "Python", "VLM", "CLIP"],
  githubLink: "https://github.com/Amitreddy14/GEN-CLIP-CVAE", 
  },

 {
  image: image8,
  title: "SKEIMG",
  description: "A GAN model that converts sketches into photo-like images using Deep Contextual Completion.",
  technologies: ["Python", "Shell", "GAN", "Deep Learning"],
  githubLink: "https://github.com/Amitreddy14/SKEIMG", 
  },
  {
    image: image7,
    title: "TravelAI",
    description: "The Travel Itinerary AI Planner is an AI-driven platform that optimizes travel routes, personalizes itineraries, and integrates AR experiences. It features a Vehicle Routing API, dynamic scheduling, and real-time recommendations for smarter trip planning.",
    technologies: ["React", "Node.js", "Tailwaind CSS", "Framer Motion", "Google Map API"],
    githubLink: "https://github.com/Amitreddy14/TravelAI" 
  },
  {
    image: image6,
    title: "Vehicle Routing System",
    description: "The Vehicle Routing project implements a simulated-annealing-based local search algorithm in Java to solve the NP-complete Capacitated Vehicle Routing Problem (CVRP). It optimizes vehicle routes to minimize total travel distance while adhering to capacity and demand constraints.",
    technologies: ["Java", "Shell", "Simulated Annealing", "Local Search Algorithm"],
    githubLink: "https://github.com/Amitreddy14/vehicle-routing-main", 
  },
  {
    image: image5,
    title: "NeuroVision",
    description: "NeuroVision utilizes deep learning on EEG and MRI data to predict behavioral metrics, enabling accurate diagnosis and treatment of neurological conditions. Its multi-modal approach provides clinicians with valuable insights into brain activity and cognitive states.",
    technologies: ["Python", "TensorFlow", "Numpy", "Pandas", " OpenCV", "SimpleITK"],
    githubLink: "https://github.com/Amitreddy14/NeuroVision", 
  },
  {
    image: image4,
    title: "2019 General Election Analysis and Swing Prediction Model ",
    description: "This project analyzes voter behavior in India's 2019 general election, identifying patterns across demographics, economic conditions, and social factors using statistical methods and machine learning. By assessing regional disparities and government policies, we aim to elucidate India's democratic process and improve election outcome forecasting.",
    technologies: ["Python"],
    githubLink: "https://github.com/Amitreddy14/2019-Election-Analysis-and-Swing-Prediction-Model", 
  },
  {
    image: image1,
    title: "Inventory Management System",
    description: "A multi-user, RDBMS-based inventory management system with an elegant UI, robust visualization, and multi-level access privileges. Developed using JavaFX and MySQL, with features like auto due update and multi-threading",
    technologies: ["JAVA", "CSS","MySQL"],
    githubLink: "https://github.com/Amitreddy14/InventoryManagementSystem",
  },
  {
    image: image2,
    title: "MEDCARE",
    description: "This webpage manages patient information and appointments, featuring patient history, responsive design, and a navigation bar for easy access to different sections. Technologies used include HTML, CSS, JavaScript, and local storage for user credentials. The project also includes a health chatbot for user assistance.",
    technologies: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/Amitreddy14/MEDCARE", 
  },
  {
    image: image3,
    title: "Transcript Generator",
    description: "This Streamlit app extracts YouTube video transcripts using youtube_transcript_api and generates summaries with Google Gemini Pro. Users enter a YouTube link, view the video thumbnail, and click a button to get detailed notes displayed.",
    technologies: ["Python"],
    githubLink: "https://github.com/Amitreddy14/transcript-generator",
  },

  // {
  //   image: image5,
  //   title: "Admin Dashboard",
  //   description: "I will write the description 5",
  //   technologies: ["HTML", "CSS", "Javascript", "MySQL"],
  //   githubLink: "https://github.com/your-username/admin-dashboard", // Add your GitHub repo link here
  // }

];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-500 hover:underline"
            >
              {project.title}
            </a>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
