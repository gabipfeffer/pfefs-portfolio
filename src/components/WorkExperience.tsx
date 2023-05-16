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
      wrapperClassname={"flex-col md:flex-row max-w-full"}
    >
      <div
        className={
          "w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(var(--primary))]"
        }
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
