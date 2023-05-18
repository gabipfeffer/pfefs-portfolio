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
    <div
      className={"group relative flex cursor-pointer snap-start justify-center"}
    >
      <motion.img
        className={
          "rounded-lg border border-gray-500 object-cover w-14 h-14 filter group-hover:grayscale transition duration-300 ease-in-out bg-gray-100"
        }
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        // @ts-ignore
        src={urlForImage(skill?.image!)?.url()}
        alt={skill.title}
      />
      <div
        className={
          "absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 rounded-full z-0"
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
