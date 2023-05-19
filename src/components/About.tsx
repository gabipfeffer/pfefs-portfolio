"use client";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";
import Section from "src/components/Section";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <Section
      title={"About"}
      sectionClassname={"flex-col text-center md:text-left justify-center"}
      wrapperClassname={
        "flex flex-col md:flex-row max-w-7xl justify-center items-center"
      }
    >
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
        // @ts-ignore
        src={urlForImage(pageInfo.profilePic)?.url() || ""}
        alt={pageInfo.name}
        className={
          "mb-2 md:mb-12 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        }
      />
      <div className={"space-y-3 px-2 md:px-10"}>
        <h4 className={"text-xl font-semibold"}>
          Here is a{" "}
          <span className={"underline decoration-[rgb(var(--primary))]"}>
            little
          </span>{" "}
          background
        </h4>
        <p className={"text-sm md:text-base"}>
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </Section>
  );
}
