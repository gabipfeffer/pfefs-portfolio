"use client";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        "h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
      }
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={"/hero-image.jpg"}
        className={
          "-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        }
      />
      <div className={"space-y-10 px-2 md:px-10"}>
        <h4 className={"text-4xl font-semibold"}>
          Here is a{" "}
          <span className={"underline decoration-[rgb(var(--primary))]"}>
            little
          </span>{" "}
          background
        </h4>
        <p className={"text-base"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          blanditiis consequuntur dolores eaque est explicabo iste iure magni
          nemo provident quibusdam, quidem ratione reprehenderit sunt suscipit
          unde ut! Quisquam, rerum!
        </p>
      </div>
    </motion.div>
  );
}
