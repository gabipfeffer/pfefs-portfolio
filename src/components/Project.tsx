import { Project } from "../../typings";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      key={project._id}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className={
        "w-screen flex-shrink-0 snap-center flex flex-col space-y-2 md:space-y-10 items-center justify-start px-10 h-screen"
      }
    >
      <Image
        // @ts-ignore
        src={urlForImage(project?.image!)?.url() || ""}
        height={350}
        width={350}
        alt={project.title}
        className={"w-44 md:w-64"}
      />

      <div
        className={
          "space-y-2.5 md:space-y-8 px-0 md:px-10 max-w-6xl text-center"
        }
      >
        <h4 className={"text-2xl font-semibold text-center"}>
          {project.title}
        </h4>
        <Link
          className={
            "uppercase tracking-[3px] text-gray-500 text-xs text-center"
          }
          href={project.linkToBuild}
        >
          View project
        </Link>

        <div className={"flex flex-row flex-wrap gap-2 justify-center"}>
          {project?.technologies?.map((technology) => (
            <img
              key={technology._id}
              className={
                "rounded-lg border border-gray-500 object-cover w-6 h-6 filter bg-gray-100"
              }
              // @ts-ignore
              src={urlForImage(technology?.image!)?.url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className={"text-base text-center max-w-3xl"}>{project.summary}</p>
      </div>
    </motion.div>
  );
}
