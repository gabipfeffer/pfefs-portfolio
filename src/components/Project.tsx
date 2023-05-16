import { Project } from "../../typings";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { motion } from "framer-motion";

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
        "w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-start px-10 h-screen"
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
          {project.title}
        </h4>

        <div className={"grid grid-cols-6 gap-2.5"}>
          {project?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              className={"w-10 h-10 rounded-full snap-start"}
              // @ts-ignore
              src={urlForImage(technology?.image!)?.url() || ""}
              alt={technology.title}
              width={300}
              height={300}
            />
          ))}
        </div>
        <p className={"text-lg text-center md:text-left"}>{project.summary}</p>
      </div>
    </motion.div>
  );
}
