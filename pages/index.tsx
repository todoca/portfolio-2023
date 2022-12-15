import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div
      className="bg-[rgb(22,22,22)]
     text-white h-screen snap-y snap-mandatory 
     overflow-scroll z-0"
    >
      <Head>
        <title>Alejandro's PortFolio</title>
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

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  );
}
