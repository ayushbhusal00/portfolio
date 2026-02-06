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
      <div className='min-h-screen flex items-center justify-center text-text-subtle'>
        Not Found
      </div>
    );
  }

  return (
    <main className='bg-bg-base'>
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
