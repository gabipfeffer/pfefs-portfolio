import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-2.5 flex-shrink-0 w-[350px] sm:w-[600px] md:w-[600px] xl:w-[800px] snap-center bg-[#1c233f] p-5 md:opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer"
      }
    >
      <div
        className={
          "flex flex-row items-center justify-start gap-5 md:gap-10 md:px-10 w-full"
        }
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          // @ts-ignore
          src={urlForImage(experience?.companyImage!)?.url()}
          className={
            "w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
          }
          alt={"experience image"}
        />
        <div className={"flex flex-col"}>
          <h4 className={"text-lg font-light"}>{experience.jobTitle}</h4>
          <p className={"font-bold text-base mt-1"}>{experience.company}</p>
        </div>
      </div>
      <div className={"px-0 md:px-10 space-y-2.5"}>
        <p className={"pt-2.5 uppercase text-gray-300"}>
          {new Date(experience.dateStarted).toDateString()} -
          {experience.isCurrentlyWorkingHere
            ? " Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <div className={"flex space-x-2 overflow-x-hidden pb-2 mb-2"}>
          {experience.technologies.map((technology) => (
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
        <ol
          className={
            "list-decimal space-y-4 text-lg max-h-48 lg:max-h-52 overflow-y-scroll scrollbar scrollbar-thin"
          }
        >
          {experience?.points?.map((point) => (
            <li className={"list-disc text-sm sm:text-base"} key={point}>
              {point}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
