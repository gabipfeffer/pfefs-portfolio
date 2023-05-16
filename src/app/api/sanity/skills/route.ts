import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { Skill } from "../../../../../typings";
import { NextResponse } from "next/server";

export async function GET() {
  const query = groq`*[_type =='skill']`;
  const skills: Skill[] = await client.fetch(query);

  return NextResponse.json({ skills });
}
