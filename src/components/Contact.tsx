"use client";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from "../../typings";
import Section from "src/components/Section";

type Props = { pageInfo: PageInfo };

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:gabrielpfeffer@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} [${formData.email}].
    ${formData.message}`;
  };

  // noinspection TypeScriptValidateTypes
  return (
    <Section
      title={"Contact"}
      sectionClassname={
        "flex-col text-center md:text-left md:flex-row max-w-7xl"
      }
      wrapperClassname={"flex-col md:flex-row px-10"}
    >
      <div className={"flex flex-col space-y-10"}>
        <h4 className={"text-3xl font-semibold text-center"}>
          I have got just <br className={"md:hidden"} />
          what you need. <br />
          <span className={"underline decoration-[#EF6941]/50"}>
            Let&#39;s Talk
          </span>
        </h4>
        <div className={"space-y-2"}>
          <div className={"flex items-center space-x-5 justify-center"}>
            <PhoneIcon
              className={"text-[rgb(var(--primary))] h-7 w-7 animate-pulse"}
            />
            <p className={"text-xl"}>{pageInfo.phoneNumber}</p>
          </div>
          <div className={"flex items-center space-x-5 justify-center"}>
            <EnvelopeIcon
              className={"text-[rgb(var(--primary))] h-7 w-7 animate-pulse"}
            />
            <p className={"text-xl"}>{pageInfo.email}</p>
          </div>
          <div className={"flex items-center space-x-5 justify-center"}>
            <MapPinIcon
              className={"text-[rgb(var(--primary))] h-7 w-7 animate-pulse"}
            />
            <p className={"text-xl"}>{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"flex flex-col space-y-2 w-full mx-auto"}
        >
          <div
            className={
              "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
            }
          >
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
    </Section>
  );
}
