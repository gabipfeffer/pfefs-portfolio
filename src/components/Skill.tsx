"use client";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className={"group relative flex cursor-pointer snap-start"}>
      <motion.img
        className={
          "rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        }
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={urlForImage(skill?.image!)?.url()}
        alt={skill.title}
      />
      <div
        className={
          "absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0"
        }
      >
        <div className={"flex items-center justify-center h-full"}>
          <p className={"text-2xl font-bold text-black opacity-100"}>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
