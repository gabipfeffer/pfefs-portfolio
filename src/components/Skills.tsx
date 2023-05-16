"use client";
import Skill from "src/components/Skill";
import { Skill as SkillType } from "../../typings";
import Section from "src/components/Section";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <Section
      title={"Skills"}
      wrapperClassname={
        "xl:space-y-10  space-y-5 overflow-hidden flex-col max-w-[2000px] w-full xl:px-10"
      }
      sectionClassname={"text-center max-w-[2000px] w-full"}
    >
      <h3 className={"uppercase tracking-[3px] text-gray-500 text-sm"}>
        Hover over a skills for current proficiency
      </h3>
      <div className={"grid grid-cols-4 lg:grid-cols-6 gap-5"}>
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft={true} />
        ))}
      </div>
    </Section>
  );
}
