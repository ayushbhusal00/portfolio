import ProjectHeader from "@/components/project-header";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ProjectHeader />
      {children}
    </main>
  );
}
