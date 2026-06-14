import { getAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import EmailsClient from "./EmailsClient";

export const dynamic = 'force-dynamic';

export default async function EmailsPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return <EmailsClient username={session.username} role={session.role} />;
}
