import { NextRequest, NextResponse } from "next/server";

export interface SubscriptionRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  const requestUrl: URL = new URL("v1/subscription/create-subscription", process.env.SERVER_URL);
  const requestBody: SubscriptionRequest = await request.json();
  const requestHeader: Headers = request.headers;
  const response: Response = await fetch(requestUrl.toString(), {
    method: "POST",
    headers: requestHeader,
    body: JSON.stringify(requestBody)
  });

  return new NextResponse(null, {
    status: response.status,
    headers: response.headers
  });
}
