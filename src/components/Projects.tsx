"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
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
          "relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(var(--primary))]"
        }
      >
        {projects?.map((project, i) => (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            key={project._id}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className={
              "w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            }
          >
            <Image
              // @ts-ignore
              src={urlForImage(project?.image!)?.url() || ""}
              height={350}
              width={350}
              alt={project.title}
            />

            <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
              <h4 className={"text-4xl font-semibold text-center"}>
                <span className={"underline decoration-[#EF6941]/50"}>
                  Case study {i + 1} of {projects.length}
                </span>
                : {project.title}
              </h4>

              <div className={"flex items-center justify-center space-x-2"}>
                {project?.technologies?.map((technology) => (
                  <Image
                    key={technology._id}
                    className={
                      "w-6 h-6 md:w-10 md:h-10 rounded-full snap-start"
                    }
                    // @ts-ignore
                    src={urlForImage(technology?.image!)?.url() || ""}
                    alt={technology.title}
                    width={300}
                    height={300}
                  />
                ))}
              </div>
              <p className={"text-lg text-center md:text-left"}>
                {project.summary}
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
