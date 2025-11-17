import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";
import Card, { CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/button";
import resumePdf from "./resume.pdf";

const DetailedPortfolio = ({ onBack }) => {
  const [darkMode, setDarkMode] = useState(true);

  const resumeUrl = process.env.REACT_APP_RESUME_URL || resumePdf;

  const projects = useMemo(
    () => [
      {
        title: "Music Recommender - TBD",
        description:
          "A music recommendation platform named TBD that users connect their spotify and create recommended playlist in seconds by analyzing their listening habits",
        stack: ["React", "Spotify API"],
      },
      {
        title: "Ice Breaker - Social Chat",
        description:
          "Developed in hacakthon to have a unique in-person chat application that let any large social gathering into a connection hub",
        stack: ["Next.JS", "ReactJS", "Firebase"],
        liveUrl: "https://ice-breaker-two.vercel.app",
        githubUrl: "https://github.com/animeshsaha0906/ice-breaker",
      },
      {
        title: "Draw it Right",
        description: "A hackathon winning project that uses computer vision to let users virtually draw on screen and machine learning model to predict the object drawn on screen",
        stack: ["Streamlit", "TensorFlow"],
      },
    ],
    []
  );

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 transition dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 dark:text-slate-100">
        <div className="mx-auto max-w-5xl px-6 pb-16">
          <header className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-blue-500">Portfolio</p>
              <h1 className="text-4xl font-bold">Animesh Saha</h1>
              <p className="text-lg text-slate-500 dark:text-slate-300">
                Computer Science Student · University at Buffalo
              </p>
            </div>

            <div className="flex items-center gap-3">
              {onBack && (
                <Button
                  onClick={onBack}
                  className="bg-white text-slate-900 shadow-md shadow-black/10 dark:bg-white/10 dark:text-white"
                >
                  Back to Landing
                </Button>
              )}
              <Button
                onClick={() => setDarkMode((prev) => !prev)}
                className="bg-slate-900 text-white dark:bg-white/10 dark:text-white"
              >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </Button>
            </div>
          </header>

          <motion.section
            {...fadeIn(0)}
            className="flex flex-col gap-6 rounded-3xl bg-white/70 p-8 text-center shadow-2xl shadow-black/5 backdrop-blur dark:bg-slate-900/70 dark:text-white sm:flex-row sm:text-left"
          >
            <img
              src="https://avatars.githubusercontent.com/u/122835487?s=400&u=63d315ff78eaefdd8af2c4e62ecefdce969f1ffb&v=4"
              alt="Animesh Saha"
              className="mx-auto h-32 w-32 rounded-3xl object-cover shadow-xl sm:mx-0"
            />

            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold">Coder · Researcher · Student</h2>
              <p className="text-slate-600 dark:text-slate-300">
                  I like to solve real world problems through coding and loves to integrate machine learning with software engineering
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-300 sm:justify-start">
                <span className="rounded-full bg-blue-100/70 px-3 py-1 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
                  JavaScript
                </span>
                <span className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                  Python
                </span>
                <span className="rounded-full bg-purple-100/70 px-3 py-1 text-purple-700 dark:bg-purple-500/20 dark:text-purple-200">
                  React & AI
                </span>
              </div>
            </div>
          </motion.section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div {...fadeIn(0.1)}>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">About Me</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">In a nutshell</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    I am a senior Computer Science (Al/ML specialization) with the expected graduation in December 2025.
                    As of now, I’m focused on full-stack development, experiment with computer vision, machine learning and being a teaching assistant for CSE 305: Programming language
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeIn(0.15)}>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-semibold">Technologies</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                    {["React", "Node.js", "Python", "OpenCV", "Tailwind", "Firebase"].map((tech) => (
                      <li
                        key={tech}
                        className="rounded-2xl border border-slate-200/60 px-3 py-2 text-center dark:border-slate-800"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          <motion.section {...fadeIn(0.2)} className="mt-12">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Projects</h3>
              <Button
                className="bg-white text-slate-900 shadow-md shadow-black/10 dark:bg-white/10 dark:text-white"
                onClick={() => window.open("https://github.com/animeshsaha0906", "_blank")}
              >
                View GitHub
              </Button>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div key={project.title} {...fadeIn(0.25 + index * 0.05)}>
                  <Card className="h-full">
                    <CardContent>
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-500 dark:text-slate-300">
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
                        <div className="mt-4 flex flex-col gap-2">
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeIn(0.3)} className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="h-full">
              <CardContent>
                <h3 className="text-2xl font-semibold">My details</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <p>
                    Email:{" "}
                    <a href="mailto:asaha5@buffalo.edu" className="font-semibold text-blue-600 dark:text-blue-400">
                      asaha5@buffalo.edu
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
                <p className="text-slate-600 dark:text-slate-300">
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default DetailedPortfolio;
