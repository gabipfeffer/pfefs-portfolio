"use client";
import { motion } from "framer-motion";
import ExperienceCard from "src/components/ExperienceCard";
import { Experience } from "../../typings";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      className={
        "h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
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
        Experience
      </h3>
      <div
        className={
          "absolute top-36 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(var(--primary))]"
        }
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
