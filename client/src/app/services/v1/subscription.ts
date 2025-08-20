import { post } from "@/app/lib/https";
import { SubscriptionRequest } from "@/app/api/v1/subscription/create-subscription/route";

export const createSubscription = async (request: SubscriptionRequest): Promise<Response> => {
  const requestUrl: URL = new URL("api/v1/subscription/create-subscription", process.env.NEXT_PUBLIC_CLIENT_URL);
  return post(requestUrl.toString(), { ...request });
};
