"use client";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
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
        src={urlForImage(pageInfo?.profilePic!)?.url() || "/hero-image.jpg"}
        className={
          "-mb-32 md:mb-0 md:ml-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
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
        <p className={"text-base"}>{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
