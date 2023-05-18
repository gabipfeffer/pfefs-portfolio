"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "src/components/BackgroundCircles";
import Image from "next/image";
import { PageInfo } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [`Hi, my name's ${pageInfo?.name}`, "<FullstackDeveloper />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className={
        "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden max-w-full"
      }
    >
      <BackgroundCircles />
      <Image
        width={500}
        height={500}
        // @ts-ignore
        src={urlForImage(pageInfo?.heroImage!)?.url() || "hero-image.png"}
        alt={"hero-image"}
        className={"relative rounded-full mx-auto w-32 h-32 object-cover"}
      />
      <div className={"z-20 flex-flex-col space-y-5"}>
        <h2 className={"text-sm uppercase text-gray-500 tracking-[15px]"}>
          {pageInfo.role}
        </h2>
        <h1 className={"text-3xl lg:text-5xl font-semibold px-10"}>
          <span className={"mr-3"}>{text}</span>
          <Cursor cursorColor={"rgb(var(--orange))"} />
        </h1>
        <div>
          <a href="#about">
            <button className={"heroButton"}>About</button>
          </a>
          <a href="#work-experience">
            <button className={"heroButton"}>Experience</button>
          </a>
          <a href="#skills">
            <button className={"heroButton"}>Skills</button>
          </a>
          <a href="#projects">
            <button className={"heroButton"}>Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
