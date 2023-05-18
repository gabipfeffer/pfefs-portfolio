import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  title: string;
  sectionClassname?: string;
  wrapperClassname?: string;
};

export default function Section({
  children,
  title,
  sectionClassname,
  wrapperClassname,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`h-screen relative flex items-center justify-evenly mx-auto ${sectionClassname}`}
    >
      {title && (
        <h3
          className={
            "absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl"
          }
        >
          {title}
        </h3>
      )}
      <div
        className={`absolute top-28 sm:top-48 md:top-32 flex flex-col px-2.5 ${wrapperClassname}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
