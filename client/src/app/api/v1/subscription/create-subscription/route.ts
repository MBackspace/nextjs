import { NextRequest, NextResponse } from "next/server";
import { post } from "@/app/lib/https";

export interface SubscriptionRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  const requestUrl: URL = new URL("v1/subscription/create-subscription", process.env.SERVER_URL);
  const requestBody: SubscriptionRequest = await request.json();
  const response = await post(requestUrl.toString(), { ...requestBody }, {});

  return new NextResponse(null, {
    status: response.status,
    headers: response.headers
  });
}
