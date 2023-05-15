"use client";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:gabrielpfeffer@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} [${formData.email}].
    ${formData.message}`;
  };

  // noinspection TypeScriptValidateTypes
  return (
    <motion.div
      className={
        "h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center px-10"
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
        Contact
      </h3>
      <div className={"flex flex-col space-y-10"}>
        <h4 className={"text-4xl font-semibold text-center"}>
          I have got just what what you need.{" "}
          <span className={"underline decoration-[#EF6941]/50"}>
            Let&#39;s Talk
          </span>
        </h4>
        <div className={"space-y-10"}>
          <div className={"flex items-center space-x-5 justify-center"}>
            <PhoneIcon
              className={"text-[rgb(var(--primary))] h-7 w-7 animate-pulse"}
            />
            <p className={"text-2xl"}>+123456789</p>
          </div>
          <div className={"flex items-center space-x-5 justify-center"}>
            <EnvelopeIcon
              className={"text-[rgb(var(--primary))] h-7 w-7 animate-pulse"}
            />
            <p className={"text-2xl"}>gabrielpfeffer@gmail.com</p>
          </div>
          <div className={"flex items-center space-x-5 justify-center"}>
            <MapPinIcon
              className={"text-[rgb(var(--primary))] h-7 w-7 animate-pulse"}
            />
            <p className={"text-2xl"}>123 Developer Lane</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"flex flex-col space-y-2 w-fit mx-auto"}
        >
          <div className={"flex space-x-2"}>
            <input
              placeholder={"Name"}
              className="contactInput"
              type={"text"}
              {...register("name")}
            />
            <input
              placeholder={"Email"}
              className="contactInput"
              type={"email"}
              {...register("email")}
            />
          </div>
          <input
            placeholder={"Subject"}
            className="contactInput"
            type={"text"}
            {...register("subject")}
          />
          <textarea
            placeholder={"Message"}
            className="contactInput"
            {...register("message")}
          />
          <button
            className={
              "bg-[rgb(var(--primary))] py-5 px-10 rounded-sm text-[rgb(var(--text))] font-bold text-lg "
            }
            type={"submit"}
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
