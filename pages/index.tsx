import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div
      className="bg-[rgb(22,22,22)]
     text-white h-screen snap-y snap-mandatory 
     overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar scrollbar-thumb-[#f4dc1c]/80"
    >
      <Head>
        <title>Alejandro's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      {/* Footer */}
      <Link href="#hero">
        <footer className="sticky bottom-2 w-full cursor-pointer">
          <div className="flex items-end justify-end mr-10">
            <img
              className="h-10 w-10"
              title="Go to Home"
              src="https://alejandro-marcano.web.app/static/media/logo.a24d4fd3.svg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
