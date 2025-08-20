import { SubscriptionRequest } from "@/app/api/v1/subscription/create-subscription/route";

export const createSubscription = async (requestBody: SubscriptionRequest): Promise<Response> => {
  const requestUrl: URL = new URL("api/v1/subscription/create-subscription", process.env.NEXT_PUBLIC_CLIENT_URL);
  const requestHeader: Headers = new Headers({
    "content-type": "application/json; charset=utf-8"
  });

  return await fetch(requestUrl.toString(), {
    method: "POST",
    headers: requestHeader,
    body: JSON.stringify(requestBody)
  });
};
