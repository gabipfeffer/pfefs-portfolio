import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#1c233f] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer"
      }
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={"/hero-image.jpg"}
        className={
          "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        }
        alt={"experience image"}
      />
      <div className={"px-0 md:px-10"}>
        <h4 className={"text-4xl font-light"}>Full Stack Developer</h4>
        <p className={"font-bold text-2xl mt-1"}>The Stack Factory</p>
        <div className={"flex space-x-2 my-2"}>
          <Image
            className={"w-10 h-10 rounded-full"}
            src={
              "https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            }
            alt={"javascript"}
            width={300}
            height={300}
          />
        </div>
        <p className={"py-5 uppercase text-gray-300"}>
          Started work... - Ended ...
        </p>
        <ul className={"list-disc space-y-4 text-lg ml-5"}>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
