import Header from "src/components/Header";
import Hero from "src/components/Hero";
import About from "src/components/About";
import WorkExperience from "src/components/WorkExperience";
import Skills from "src/components/Skills";
import Projects from "src/components/Projects";
import Contact from "src/components/Contact";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="bg-[rgb(var(--background))] text-[rgb(var(--text))] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(var(--primary))]">
      <Header />
      <section id={"hero"} className={"snap-start"}>
        <Hero />
      </section>
      <section id={"about"} className={"snap-center"}>
        <About />
      </section>
      <section id={"work-experience"} className={"snap-center"}>
        <WorkExperience />
      </section>
      <section id={"skills"} className={"snap-start"}>
        <Skills />
      </section>
      <section id={"projects"} className={"snap-start"}>
        <Projects />
      </section>
      <section id={"contact"} className={"snap-start"}>
        <Contact />
      </section>
      <footer className={"sticky bottom-5 w-full cursor-pointer"}>
        <a href={"#hero"} className={"flex items-center justify-center"}>
          <ArrowUpIcon
            className={
              "h-10 w-10 rounded-full filter grayscale hover:grayscale-0 text-[rgb(var(--primary))]"
            }
          />
        </a>
      </footer>
    </main>
  );
}
