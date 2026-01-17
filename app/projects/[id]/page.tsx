import NiuralClient from "@/components/NiuralClient";
import { caseStudies } from "@/lib/data";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = caseStudies[Number(id)];

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center text-zinc-600'>
        Not Found
      </div>
    );
  }

  return <NiuralClient project={project} />;
}
