// app/page.tsx (SERVER COMPONENT — NO "use client")

import HomeClient from "@/components/home-client";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return <HomeClient />;
}
