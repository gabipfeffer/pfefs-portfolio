import Header from "src/components/Header";
import Hero from "src/components/Hero";
import About from "src/components/About";
import WorkExperience from "src/components/WorkExperience";

export default function Home() {
  return (
    <main className="bg-[rgb(var(--background))] text-[rgb(var(--text))] h-screen snap-y snap-mandatory overflow-scroll z-0">
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
      {/*  Experience */}
      {/*  Skills */}
      {/*  Project */}
      {/*  Contact */}
    </main>
  );
}
