import { Skill, Social, PageInfo, Experience, Project } from "../typings";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch(`${baseUrl}/api/sanity/skills`);
  const data = await res.json();

  return data.skills;
};

export const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${baseUrl}/api/sanity/socials`);
  const data = await res.json();

  return data.socials;
};

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(`${baseUrl}/api/sanity/pageInfo`);
  const data = await res.json();

  return data.pageInfo;
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  const res = await fetch(`${baseUrl}/api/sanity/experiences`);
  const data = await res.json();

  return data.experiences;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${baseUrl}/api/sanity/projects`);
  const data = await res.json();

  return data.projects;
};
