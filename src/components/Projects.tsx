"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      className={
        "h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
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
        Projects
      </h3>
      <div
        className={
          "relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"
        }
      >
        {projects.map((project, i) => (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            key={project}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className={
              "w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            }
          >
            <Image
              src={
                "https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              }
              height={500}
              width={500}
              alt={"project-image"}
            />
            <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
              <h4 className={"text-4xl font-semibold text-center"}>
                <span className={"underline decoration-[#EF6941]/50"}>
                  Case study {i + 1} of {projects.length}
                </span>
                : UPS Clone
              </h4>
              <p className={"text-lg text-center md:text-left"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda at itaque laboriosam ullam! Atque consequatur
                cupiditate deserunt ducimus exercitationem iusto laudantium
                minima odio officiis optio porro recusandae saepe, similique ut.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div
        className={
          "w-full absolute top-[30%] bg-[#EF6941]/50 left-0 h-[500px] -skew-y-12"
        }
      />
    </motion.div>
  );
}
