"use client";
import { motion } from "framer-motion";
import Skill from "src/components/Skill";
import { Skill as SkillType } from "../../typings";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      className={
        "h-screen relative flex overflow-hidden flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Skills
      </h3>
      <h3
        className={
          "absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm"
        }
      >
        Hover over a skills for current proficiency
      </h3>
      <div
        className={
          "absolute top-48 grid grid-cols-4 md:grid-cols-6 gap-5 overflow-y-scroll max-h-[70vh] scrollbar scrollbar-thin scrollbar-track-[rgb(var(--background))] snap-y snap-mandatory"
        }
      >
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft={true} />
        ))}
      </div>
    </motion.div>
  );
}
