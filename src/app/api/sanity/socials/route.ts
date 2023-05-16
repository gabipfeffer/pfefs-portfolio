import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { Social } from "../../../../../typings";
import { NextResponse } from "next/server";

export async function GET() {
  const query = groq`*[_type =='social']`;
  const socials: Social[] = await client.fetch(query);

  return NextResponse.json({ socials });
}
