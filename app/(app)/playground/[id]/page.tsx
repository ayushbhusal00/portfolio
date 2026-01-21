import PlaygroundClient from "@/components/playground-client";
import { playgroundProjects } from "@/lib/data";

export default async function PlaygroundPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = playgroundProjects[Number(id)];

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center text-zinc-600'>
        Not Found
      </div>
    );
  }

  return (
    <main className='md:mx-16 border-x border-[#e6e8eb]'>
      <PlaygroundClient
        project={{
          ...project,
          readTime:
            project.readTime !== undefined
              ? Number(project.readTime)
              : undefined,
        }}
      />
    </main>
  );
}
