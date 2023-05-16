import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { PageInfo } from "../../../../../typings";
import { NextResponse } from "next/server";

export async function GET() {
  const query = groq`*[_type == 'pageInfo'][0]`;
  const pageInfo: PageInfo = await client.fetch(query);

  return NextResponse.json({ pageInfo });
}
