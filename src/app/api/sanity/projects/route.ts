import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { Project } from "../../../../../typings";
import { NextResponse } from "next/server";

export async function GET() {
  const query = groq`*[_type == 'project']{
  ...,
  technologies[]->
}`;
  const projects: Project[] = await client.fetch(query);

  return NextResponse.json({ projects });
}
