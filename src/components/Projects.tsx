"use client";
import { Project as ProjectType } from "../../typings";
import Project from "src/components/Project";
import Section from "src/components/Section";

type Props = {
  projects: ProjectType[];
};

export default function Projects({ projects }: Props) {
  return (
    <Section
      title={"Projects"}
      sectionClassname={"overflow-hidden flex-col text-left max-w-full z-0"}
      wrapperClassname={"flex-col max-w-full space-y-2 lg:space-y-2.5"}
    >
      <h3
        className={"uppercase tracking-[3px] text-gray-500 text-xs text-center"}
      >
        Scroll to view projects
      </h3>
      <div
        className={
          "relative w-full flex items-cen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(var(--primary))]"
        }
      >
        {projects?.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
      <div
        className={
          "w-full absolute top-[20%] bg-[#EF6941]/50 left-0 h-[500px] -skew-y-12"
        }
      />
    </Section>
  );
}
