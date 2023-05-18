"use client";
import ExperienceCard from "src/components/ExperienceCard";
import { Experience } from "../../typings";
import Section from "src/components/Section";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <Section
      title={"Experience"}
      sectionClassname={
        "overflow-hidden flex-col text-left md:flex-row md:text-left max-w-full"
      }
      wrapperClassname={"flex-col max-w-full  lg:space-y-10"}
    >
      <h3
        className={"uppercase tracking-[3px] text-gray-500 text-xs text-center"}
      >
        Scroll to view work experience
      </h3>
      <div
        className={
          "w-full flex space-x-5 overflow-x-scroll px-5 pb-2.5 md:pb-5 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(var(--primary))]"
        }
      >
        {experiences
          .sort((a, b) => new Date(b.dateStarted) - new Date(a.dateStarted))
          .map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </Section>
  );
}
