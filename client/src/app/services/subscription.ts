import { post } from "@/app/lib/https";

export interface SubscriptionRequest {
  email: string;
}

export const createSubscription = async (body: SubscriptionRequest): Promise<Response> => {
  return post("v1/subscription/create-subscription", { ...body }, {});
};
