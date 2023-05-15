"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className={
        "sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5"
      }
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{ duration: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        className={"flex flex-row items-center"}
      >
        <SocialIcon
          url={"https://www.instagram.com/gabrielpfeffer"}
          fgColor={"gray"}
          bgColor={"transparent"}
        />
        <SocialIcon
          url={"https://www.github.com/gabipfeffer"}
          fgColor={"gray"}
          bgColor={"transparent"}
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{ duration: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        className={"flex flex-row items-center"}
      >
        <SocialIcon
          className={"cursor-pointer"}
          network={"email"}
          fgColor={"gray"}
          bgColor={"transparent"}
        />
        <p className={"hidden md:inline-flex uppercase text-sm text-gray-400"}>
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
