import { NextResponse } from "next/server";
import { get } from "@/app/lib/https";

export async function GET(): Promise<NextResponse> {
  const requestUrl: URL = new URL("v1/app/get-hello", process.env.SERVER_URL);
  const response: Response = await get(requestUrl.toString(), {}, {});
  const responseBody: BodyInit = await response.text();

  return new NextResponse(responseBody, {
    status: response.status,
    headers: response.headers
  });
}
