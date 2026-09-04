import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BsGithub, BsArrowUpRight } from 'react-icons/bs'
import { asset } from '../utils/paths'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'ML / AI', 'Systems', 'Web', 'Research']

const projectsData = [
  {
    image: '17.png',
    title: 'LOC-PRED',
    description: 'Continuous geolocation model that predicts GPS coordinates from image data by interpolating between known city centroids using deep feature representations.',
    technologies: ['Python', 'Deep CNNs', 'Jupyter'],
    githubLink: 'https://github.com/Amitreddy14/LOC-PRED',
    category: 'ML / AI',
    featured: true,
  },
  {
    image: '16.png',
    title: 'Centrl-Server-Grp-Chat',
    description: 'Secure Signal-style group chat system with encrypted messaging, certificate-based login, and group support using CryptoPP and Boost.',
    technologies: ['C++', 'CMake', 'CryptoPP'],
    githubLink: 'https://github.com/Amitreddy14/Centrl-Server-Grp-Chat',
    category: 'Systems',
    featured: true,
  },
  {
    image: null,
    title: 'Warehouse-Picking',
    description: 'Modeled warehouse operations using SQL-based data processing and graph traversal algorithms, implementing TSP-inspired heuristics reducing travel distance by ~83%.',
    technologies: ['SQL', 'Graph Algorithms', 'TSP'],
    githubLink: 'https://github.com/Amitreddy14/Warehouse-Picking',
    category: 'Systems',
    featured: true,
  },
  {
    image: null,
    title: 'PNNM — Prunable Neural Network',
    description: 'Production-ready ML system with FastAPI REST backend, Docker containerization, and CI/CD-compatible deployment — applying secure coding practices and automated testing achieving ~9.7x model compression.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'CI/CD'],
    githubLink: 'https://github.com/Amitreddy14',
    category: 'ML / AI',
  },
  {
    image: null,
    title: 'Team Management App',
    description: 'Full-stack collaborative platform using React, Node.js, Express, and MongoDB, applying Git workflows, peer code reviews, unit testing, and Agile delivery practices.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/Amitreddy14/TEAM-FOUR',
    category: 'Web',
  },
  {
    image: null,
    title: 'AI-FOR-BHARAT',
    description: 'LLM-powered document intelligence platform using Python (FastAPI), React.js, RAG pipelines, and LLM APIs with AI-assisted development and validated outputs.',
    technologies: ['Python', 'FastAPI', 'React', 'RAG', 'LLMs'],
    githubLink: 'https://github.com/Amitreddy14',
    category: 'ML / AI',
    featured: true,
  },
  {
    image: '15.png',
    title: 'LZW Compression',
    description: 'Java implementation of the Lempel-Ziv-Welch algorithm for file compression with dynamic dictionary building.',
    technologies: ['Java'],
    githubLink: 'https://github.com/Amitreddy14/LZW',
    category: 'Systems',
  },
  {
    image: '14.png',
    title: 'Sea-Lifter',
    description: 'Uses MongoDB to store microplastic data and applies NLP-based analysis to map pollution hotspots with tailored clean-up suggestions.',
    technologies: ['Python', 'NLP', 'MongoDB', 'Rasa'],
    githubLink: 'https://github.com/Amitreddy14/Sea-Lifter',
    category: 'ML / AI',
    featured: true,
  },
  {
    image: '13.png',
    title: 'GRNABrain',
    description: 'Locus Inference and Generative Adversarial Network for gRNA Design targeting CRISPR applications.',
    technologies: ['Python', 'GAN', 'CRISPR'],
    githubLink: 'https://github.com/Amitreddy14/GRNABrain',
    category: 'Research',
  },
  {
    image: '12.png',
    title: 'TopoFicial',
    description: 'Artificial Neural Topology built upon semi-random graph structure emulating characteristics of simple cerebral organisms.',
    technologies: ['Python', 'Graph Theory', 'ANN'],
    githubLink: 'https://github.com/Amitreddy14/TopoFicial',
    category: 'Research',
    featured: true,
  },
  {
    image: '11.png',
    title: 'Travel-APP',
    description: 'AI-powered Android app generating personalized travel itineraries with real-time flight, hotel, and attraction searches.',
    technologies: ['Kotlin', 'Python', 'Google Maps API'],
    githubLink: 'https://github.com/Amitreddy14/Travel-APP',
    category: 'Web',
  },
  {
    image: '10.png',
    title: 'Gestroll',
    description: 'Augmented Reality program based on a pre-trained CNN gesture recognition model for hands-free interaction.',
    technologies: ['Python', 'OpenCV', 'CNN', 'AR'],
    githubLink: 'https://github.com/Amitreddy14/Gestroll',
    category: 'ML / AI',
  },
  {
    image: '9.png',
    title: 'GEN-CLIP-CVAE',
    description: 'CVAE for image generation inspired by Hierarchical Text-Conditional Image Generation with CLIP Latents.',
    technologies: ['Python', 'CLIP', 'CVAE'],
    githubLink: 'https://github.com/Amitreddy14/GEN-CLIP-CVAE',
    category: 'ML / AI',
  },
  {
    image: '8.png',
    title: 'SKEIMG',
    description: 'GAN model that converts sketches into photo-like images using Deep Contextual Completion.',
    technologies: ['Python', 'GAN', 'Deep Learning'],
    githubLink: 'https://github.com/Amitreddy14/SKEIMG',
    category: 'ML / AI',
  },
  {
    image: '7.png',
    title: 'TravelAI',
    description: 'AI-driven platform optimizing travel routes with a Vehicle Routing API, dynamic scheduling, and AR experiences.',
    technologies: ['React', 'Node.js', 'Google Maps API'],
    githubLink: 'https://github.com/Amitreddy14/TravelAI',
    category: 'Web',
  },
  {
    image: '6.png',
    title: 'Vehicle Routing System',
    description: 'Simulated-annealing-based local search algorithm solving the NP-complete Capacitated Vehicle Routing Problem.',
    technologies: ['Java', 'Simulated Annealing'],
    githubLink: 'https://github.com/Amitreddy14/vehicle-routing-main',
    category: 'Systems',
  },
  {
    image: '5.png',
    title: 'NeuroVision',
    description: 'Deep learning on EEG and MRI data to predict behavioral metrics for neurological diagnosis achieving ~86% accuracy.',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    githubLink: 'https://github.com/Amitreddy14/NeuroVision',
    category: 'ML / AI',
    featured: true,
  },
  {
    image: '4.png',
    title: 'Election Swing Prediction',
    description: "Analyzing voter behavior in India's 2019 election using statistical methods and ML to forecast outcomes.",
    technologies: ['Python', 'ML', 'Statistics'],
    githubLink: 'https://github.com/Amitreddy14/2019-Election-Analysis-and-Swing-Prediction-Model',
    category: 'Research',
  },
  {
    image: '1.png',
    title: 'Inventory Management',
    description: 'Multi-user RDBMS-based system with JavaFX UI, visualization, multi-level access, and auto due updates.',
    technologies: ['Java', 'JavaFX', 'MySQL'],
    githubLink: 'https://github.com/Amitreddy14/InventoryManagementSystem',
    category: 'Systems',
  },
  {
    image: '2.jpg',
    title: 'MEDCARE',
    description: 'Patient management webpage with appointment scheduling, patient history, responsive design, and a health chatbot.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Amitreddy14/MEDCARE',
    category: 'Web',
  },
  {
    image: '3.png',
    title: 'Transcript Generator',
    description: 'Streamlit app extracting YouTube transcripts and generating summaries with Google Gemini Pro.',
    technologies: ['Python', 'Streamlit', 'Gemini'],
    githubLink: 'https://github.com/Amitreddy14/transcript-generator',
    category: 'Web',
  },
]

/* Fallback gradient for projects with no image */
const gradients = [
  'from-indigo-600/20 via-purple-600/10 to-surface-950',
  'from-emerald-600/20 via-teal-600/10 to-surface-950',
  'from-amber-600/20 via-orange-600/10 to-surface-950',
]

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, delay: (index % 3) * 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      }
    )
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-900 bg-surface-950/50 transition-all duration-500 hover:border-surface-700 hover:bg-surface-900/40"
    >
      {/* Image or gradient fallback */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img
            src={asset(project.image)}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]}`}>
            <span className="font-display text-4xl font-bold text-white/20">{project.title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/40 to-transparent" />

        {project.featured && (
          <div className="absolute left-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            Featured
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-surface-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <BsGithub size={16} />
            View Code
            <BsArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
          className="font-display text-lg font-semibold text-white transition-colors hover:text-accent line-clamp-1">
          {project.title}
        </a>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-400 line-clamp-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-surface-900 px-2.5 py-1 text-[11px] font-medium text-surface-500">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  const filteredProjects =
    activeFilter === 'All' ? projectsData : projectsData.filter((p) => p.category === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div ref={headingRef} className="mb-12">
          <p className="mb-3 font-mono text-sm text-accent">04 — Projects</p>
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
            Selected work<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 max-w-xl text-surface-400">
            A collection of projects across ML/AI, systems programming, web development, and research.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'border border-surface-800 text-surface-400 hover:border-surface-600 hover:text-white'
              }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-60">
                {cat === 'All' ? projectsData.length : projectsData.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
