import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";
import Card, { CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/button";
import resumePdf from "./resume.pdf";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  "Python",
  "React",
  "Java",
  "JavaScript (ES6+)",
  "C",
  "PHP",
  "OCaml",
  "jQuery",
  "Node.js",
  "NumPy",
  "TensorFlow",
  "OpenCV",
  "Matplotlib",
  "Pandas",
  "Streamlit",
  "MongoDB",
  "Firebase",
  "Cloud (AWS)",
];

const projects = [
  {
    title: "Draw it Right",
    image: "https://placehold.co/800x450/222d3e/a1a1aa?text=Draw+It+Right",
    description:
      "UB Hacking 2024 winner: a gesture-controlled drawing app built with OpenCV and Mediapipe that classifies user-drawn objects in real time with 92.5% accuracy, wrapped in a fast Streamlit interface.",
    stack: ["Streamlit", "TensorFlow", "OpenCV"],
  },
  {
    title: "Music Recommender - TBD",
    image: `${process.env.PUBLIC_URL || ""}/tbd.png`,
    description:
      "A full-stack music recommendation platform where users connect Spotify and get a personalized playlist in seconds, from OAuth login through mood- and history-based recommendations.",
    stack: ["React", "Spotify API", "PHP", "MySQL"],
  },
  {
    title: "Ice Breaker - Social Chat",
    image: "https://placehold.co/800x450/222d3e/a1a1aa?text=Ice+Breaker",
    description:
      "Built in a hackathon: an in-person chat app that turns any large social gathering into a connection hub.",
    stack: ["Next.js", "React", "Firebase"],
    liveUrl: "https://ice-breaker-two.vercel.app",
    githubUrl: "https://github.com/animeshsaha0906/ice-breaker",
  },
  {
    title: "Facial and Hand Written Digits Recognition",
    image: "https://placehold.co/800x450/222d3e/a1a1aa?text=Recognizer",
    description:
      "Trained a neural network from scratch to classify MNIST digits and facial structures, improving from 91% to 96.8% test accuracy with a CNN, hyperparameter tuning, L2 regularization, and Kernel PCA.",
    stack: ["Python", "TensorFlow", "NumPy"],
  },
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const resumeUrl = process.env.REACT_APP_RESUME_URL || resumePdf;
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    let index = 0;
    let timeoutId;
    const text = "Hello, I'm Animesh Saha";

    const typeNext = () => {
      setTypedText(text.slice(0, index + 1));
      index += 1;

      if (index < text.length) {
        timeoutId = setTimeout(typeNext, 75);
      } else {
        setIsTyping(false);
      }
    };

    timeoutId = setTimeout(typeNext, 75);
    return () => clearTimeout(timeoutId);
  }, []);

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.35 },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 transition dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 dark:text-slate-100">
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a href="#top" className="text-lg font-bold text-blue-600 dark:text-blue-400">
              Animesh Saha
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => setDarkMode((prev) => !prev)}
                className="hidden bg-slate-900 text-white dark:bg-white/10 dark:text-white sm:inline-flex"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button>
              <button
                type="button"
                aria-label="Toggle navigation menu"
                className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 md:hidden"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="border-t border-slate-200/60 bg-white dark:border-white/10 dark:bg-slate-950 md:hidden">
              {navLinks.map((link) => (
                <a
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setDarkMode((prev) => !prev);
                  setIsMenuOpen(false);
                }}
                className="block w-full px-6 py-3 text-left text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
              >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>
          )}
        </header>

        <div id="top" className="mx-auto max-w-5xl px-6 pb-16">
          <motion.section
            {...fadeIn(0)}
            className="mt-10 flex flex-col gap-6 rounded-3xl bg-white/70 p-8 text-center shadow-2xl shadow-black/5 backdrop-blur dark:bg-slate-900/70 dark:text-white sm:flex-row sm:text-left"
          >
            <img
              src="https://avatars.githubusercontent.com/u/122835487?s=400&u=63d315ff78eaefdd8af2c4e62ecefdce969f1ffb&v=4"
              alt="Animesh Saha"
              className="mx-auto h-32 w-32 rounded-3xl object-cover shadow-xl sm:mx-0"
            />

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                <span className={`inline-block min-h-[1.25rem] ${isTyping ? "typing-cursor" : ""}`}>{typedText}</span>
              </p>
              <h1 className="text-3xl font-bold sm:text-4xl">AI/ML Engineer · Researcher · Software Engineer</h1>
              <p className="text-slate-600 dark:text-slate-300">
                A problem solver
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-300 sm:justify-start">
                <span className="rounded-full bg-blue-100/70 px-3 py-1 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
                  JavaScript
                </span>
                <span className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                  Python
                </span>
                <span className="rounded-full bg-purple-100/70 px-3 py-1 text-purple-700 dark:bg-purple-500/20 dark:text-purple-200">
                  React &amp; AI
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 pt-2 sm:justify-start">
                <a
                  href="#projects"
                  className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-600 hover:text-slate-900 dark:border-white/40 dark:text-white dark:hover:border-white"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.section>

          <motion.section id="about" {...fadeIn(0.1)} className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div {...fadeIn(0.15)}>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">About Me</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">In a nutshell</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    I graduated in Computer Science (AI/ML specialization). I'm focused on full-stack
                    development, experienced in building software and production ready platform with RAG pipeline computer vision and machine learning, and
                    have experience being a teaching assistant for CSE 305: Programming Languages.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeIn(0.2)}>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-semibold">Technologies</h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-slate-600 dark:text-slate-300">
                    {skills.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200/60 px-3 py-1 text-sm dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.section>

          <motion.section id="projects" {...fadeIn(0.25)} className="mt-12">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Projects</h3>
              <Button
                className="bg-white text-slate-900 shadow-md shadow-black/10 dark:bg-white/10 dark:text-white"
                onClick={() => window.open("https://github.com/animeshsaha0906", "_blank")}
              >
                View GitHub
              </Button>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div key={project.title} {...fadeIn(0.25 + index * 0.05)} className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/80 shadow-xl shadow-black/5 backdrop-blur transition dark:border-white/10 dark:bg-gray-900/70">
                    <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{project.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500 dark:text-slate-300">
                        {project.stack.map((tech) => (
                          <span
                            key={`${project.title}-${tech}`}
                            className="rounded-full bg-slate-100/70 px-3 py-1 dark:bg-slate-800/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="mt-auto flex flex-col gap-2 pt-2">
                          {project.liveUrl && (
                            <Button
                              className="w-full bg-slate-900 text-white dark:bg-white/10 dark:text-white"
                              onClick={() => window.open(project.liveUrl, "_blank")}
                            >
                              Try it out
                            </Button>
                          )}
                          {project.githubUrl && (
                            <button
                              type="button"
                              onClick={() => window.open(project.githubUrl, "_blank")}
                              className="w-full rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-600 hover:text-slate-900 dark:border-white/40 dark:text-white dark:hover:border-white"
                            >
                              View on GitHub
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="contact" {...fadeIn(0.3)} className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="h-full">
              <CardContent>
                <h3 className="text-2xl font-semibold">My Details</h3>

                <div className="mt-6 space-y-3 text-sm">
                  <p>
                    Email:{" "}
                    <a href="mailto:animeshsaha0906@gmail.com" className="font-semibold text-blue-600 dark:text-blue-400">
                      animeshsaha0906@gmail.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a href="tel:5164128357" className="font-semibold text-blue-600 dark:text-blue-400">
                      516-412-8357
                    </a>
                  </p>
                </div>

                <Button
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600"
                  onClick={() => window.open(resumeUrl, "_blank")}
                >
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent>
                <h3 className="text-2xl font-semibold">Send a Message</h3>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <footer className="mt-12 border-t border-slate-200/60 pt-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
            <p>&copy; {currentYear} Animesh Saha. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
