import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] sm:w-[600px] md:w-[600px] xl:w-[800px] snap-center bg-[#1c233f] p-5 md:opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer"
      }
    >
      <div className={"flex flex-col sm:flex-row items-center sm:gap-5"}>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          // @ts-ignore
          src={urlForImage(experience?.companyImage!)?.url()}
          className={
            "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          }
          alt={"experience image"}
        />
        <div className={"flex flex-col"}>
          <h4 className={"text-2xl font-light"}>{experience.jobTitle}</h4>
          <p className={"font-bold text-xl mt-1"}>{experience.company}</p>
          <p className={"py-5 uppercase text-gray-300"}>
            {new Date(experience.dateStarted).toDateString()} -
            {experience.isCurrentlyWorkingHere
              ? " Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <div
            className={
              "flex space-x-2 my-2 overflow-x-scroll scrollbar scrollbar-thin scrollbar-track-[rgb(var(--background))] pb-2 snap-x snap-mandatory"
            }
          >
            {experience.technologies.map((technology) => (
              <Image
                key={technology._id}
                className={"w-10 h-10 rounded-full snap-center"}
                // @ts-ignore
                src={urlForImage(technology?.image!)?.url() || ""}
                alt={technology.title}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={"px-0 md:px-10"}>
        <ol
          className={
            "list-decimal space-y-4 text-lg max-h-48 xl:max-h-64 md:max-h-48 overflow-y-scroll scrollbar scrollbar-thin snap-y snap-mandatory"
          }
        >
          {experience?.points?.map((point) => (
            <li className={"snap-start list-disc"} key={point}>
              {point}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
