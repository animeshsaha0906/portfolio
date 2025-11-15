import React, { useEffect, useMemo, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  { label: "Python", color: "bg-red-600" },
  { label: "React", color: "bg-teal-600" },
  { label: "Java", color: "bg-indigo-600" },
  { label: "JavaScript (ES6+)", color: "bg-yellow-600" },
  { label: "C", color: "bg-red-600" },
  { label: "PHP", color: "bg-red-600" },
  { label: "OCaml", color: "bg-red-600" },
  { label: "jQuery", color: "bg-red-600" },
  { label: "Node.js", color: "bg-red-600" },
  { label: "NumPy", color: "bg-red-600" },
  { label: "TensorFlow", color: "bg-red-600" },
  { label: "OpenCV", color: "bg-red-600" },
  { label: "Matplotlib", color: "bg-red-600" },
  { label: "Pandas", color: "bg-red-600" },
  { label: "Streamlit", color: "bg-red-600" },
  { label: "MongoDB", color: "bg-green-600" },
  { label: "Cloud (AWS)", color: "bg-blue-600" },
];

const projects = [
  {
    title: "Facial and Hand Written Digits Recognition",
    image: "https://placehold.co/800x450/222d3e/a1a1aa?text=Recognizer",
    details: [
      "Built and trained a neural network model from scratch to classify hand-written digits (MNIST) and facial structures with accuracy of 91% of the testing data.",
      "Implemented a convolutional neural network with ReLU activation that resulted in improved accuracy of 94.6% of the testing data.",
      "Improved testing accuracy to 96.8% by tuning hyperparameters, applying L2 regularization, and using Kernel PCA for dimensionality reduction.",
    ],
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
    title: "Music Discovery Platform",
    image: `${process.env.PUBLIC_URL || ""}/tbd.png`,
    details: [
      "Built a full-stack music recommendation application that surfaces songs based on a user's mood and recent history.",
      "Integrated Spotify APIs to predict recommendations and implemented OAuth for authentication.",
      "Delivered core user features including login, password reset, and playlist creation, following agile development practices.",
    ],
    tags: ["React", "PHP", "MySQL"],
  },
  {
    title: "Draw it Right",
    image: "https://placehold.co/800x450/222d3e/a1a1aa?text=Draw+It+Right",
    details: [
      "UB Hacking 2024 winner: gesture-controlled drawing app built with OpenCV and Mediapipe.",
      "Classifies user-drawn objects in real time with 92.5% accuracy.",
      "Streamlit-powered interface keeps the experience friendly and fast.",
    ],
    tags: ["React", "D3.js", "REST API"],
  },
];

const LandingPage = ({ onViewDetails }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

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

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0e1217] text-white">
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="text-2xl font-bold text-sky-400 transition duration-300 hover:text-sky-300">
            Animesh Saha
          </a>

          <div className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent text-lg text-gray-300 transition duration-300 hover:border-sky-400 hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="rounded-lg p-2 text-gray-300 transition duration-300 hover:bg-gray-800 focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="bg-gray-800 border-t border-gray-700 md:hidden">
            {navLinks.map((link) => (
              <a
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={handleNavClick}
                className="block px-6 py-3 text-gray-300 transition duration-300 hover:bg-gray-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="flex h-screen items-center justify-center bg-gray-900 border-b border-gray-700 text-center">
          <div className="max-w-4xl px-4">
            <p className="mb-4 text-xl font-medium text-sky-400 sm:text-2xl">
              <span className={`inline-block min-h-[1.5rem] ${isTyping ? "typing-cursor" : ""}`}>{typedText}</span>
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building <span className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">Scalable</span> and
              User-Centric Web Applications
            </h1>

            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="rounded-xl bg-sky-600 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.03] hover:bg-sky-700"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-gray-700 px-8 py-3 font-semibold text-gray-200 shadow-lg transition duration-300 hover:scale-[1.03] hover:bg-gray-600"
              >
                Get In Touch
              </a>
              {onViewDetails && (
                <button
                  type="button"
                  onClick={onViewDetails}
                  className="rounded-xl border border-sky-500 px-8 py-3 font-semibold text-sky-300 shadow-lg transition duration-300 hover:scale-[1.03] hover:bg-sky-500/10"
                >
                  View More Details
                </button>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto border-b border-gray-700 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="mb-16 text-center text-4xl font-bold text-sky-400">About Me</h2>

          <div className="flex flex-col items-center lg:flex-row lg:space-x-12">
            <div className="mb-8 flex justify-center lg:mb-0 lg:w-1/3">
              <img
                src="/Animesh Saha_9.22.25_NancyJParisi_6667.JPG"
                alt="Animesh Saha"
                className="h-48 w-48 rounded-full border-4 border-sky-500 object-cover shadow-2xl transition duration-500 hover:shadow-sky-500/50 sm:h-64 sm:w-64"
              />
            </div>

            <div className="space-y-6 text-gray-300 lg:w-2/3">
              <p className="text-lg leading-relaxed">
                I am currently in my senior year majoring in Computer Science with a specialization in Artificial Intelligence. I love building
                software systems that work hand-in-hand with AI/ML to create measurable impact.
              </p>
              <p className="text-lg leading-relaxed">
                My experience spans full-stack development, agile teamwork, and award-winning computer vision projects like Draw it Right. Beyond
                development, I serve as a Teaching Assistant for CSE 305 and tutor students in Python, Java, OOP, and Calculus 2.
              </p>

              <div className="pt-4">
                <h3 className="mb-3 text-xl font-semibold text-white">Core Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill.label}
                      className={`${skill.color} rounded-full px-4 py-1 text-sm font-medium text-white shadow-md`}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container mx-auto border-b border-gray-700 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="mb-16 text-center text-4xl font-bold text-sky-400">Featured Projects</h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl bg-gray-800 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-sky-500/30"
              >
                <img src={project.image} alt={project.title} className="h-48 w-full rounded-t-2xl object-cover" />
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
                  <ul className="mb-4 list-disc space-y-2 pl-5 text-left text-gray-400">
                    {project.details.map((detail) => (
                      <li key={detail} className="text-base">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={`${project.title}-${tag}`} className="rounded-full px-3 py-1 text-xs" style={{ backgroundColor: "rgba(56,189,248,0.15)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="font-medium text-sky-400 transition duration-300 hover:text-sky-300">
                    View Demo &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="mb-16 text-center text-4xl font-bold text-sky-400">Get in Touch</h2>
          <div className="mx-auto max-w-xl rounded-2xl border border-gray-700 bg-gray-900 p-8 shadow-2xl sm:p-10">
            <p className="mb-6 text-center text-gray-300">I’m currently seeking new opportunities! Feel free to reach out.</p>
            <form action="https://formspree.io/f/yourUniqueHashID" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 transition duration-300 focus:border-sky-500 focus:ring-sky-500"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 transition duration-300 focus:border-sky-500 focus:ring-sky-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <input type="hidden" name="_replyto" />
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full resize-none rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 transition duration-300 focus:border-sky-500 focus:ring-sky-500"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-teal-600 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:scale-[1.01] hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-700 bg-gray-900 py-6 text-center text-sm text-gray-400">
        <p>&copy; {currentYear} Animesh Saha. All rights reserved.</p>
        <p className="mt-2">Built with HTML, Tailwind CSS, and React.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
