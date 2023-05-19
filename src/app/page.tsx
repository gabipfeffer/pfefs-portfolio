import Header from "src/components/Header";
import Hero from "src/components/Hero";
import About from "src/components/About";
import WorkExperience from "src/components/WorkExperience";
import Skills from "src/components/Skills";
import Projects from "src/components/Projects";
import Contact from "src/components/Contact";
import { PageInfo, Skill, Social, Project, Experience } from "../../typings";
import {
  fetchPageInfo,
  fetchSkills,
  fetchSocials,
  fetchExperiences,
  fetchProjects,
} from "src/utils";

export default async function Home() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();

  return (
    <main className="bg-[rgb(var(--background))] text-[rgb(var(--text))] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(var(--primary))]">
      <Header socials={socials} />
      <section id={"hero"} className={"snap-start"}>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id={"about"} className={"snap-center"}>
        <About pageInfo={pageInfo} />
      </section>
      <section id={"work-experience"} className={"snap-center"}>
        <WorkExperience experiences={experiences} />
      </section>
      <section id={"skills"} className={"snap-start"}>
        <Skills skills={skills} />
      </section>
      <section id={"projects"} className={"snap-start"}>
        <Projects projects={projects} />
      </section>
      <section id={"contact"}>
        <Contact pageInfo={pageInfo} />
      </section>
    </main>
  );
}

export const revalidate = 30;
