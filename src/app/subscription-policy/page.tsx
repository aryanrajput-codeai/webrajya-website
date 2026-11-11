import { redirect } from "next/navigation";

export default function SubscriptionPolicyRedirect() {
  redirect("/subscription-terms");
}
