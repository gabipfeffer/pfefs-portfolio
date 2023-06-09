"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../../typings";

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  return (
    <header
      className={
        "sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-2.5"
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor={"gray"}
            bgColor={"transparent"}
          />
        ))}
      </motion.div>
      <motion.a
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        href={"#contact"}
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
      </motion.a>
    </header>
  );
}
