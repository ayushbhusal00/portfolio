import NiuralClient from "@/components/NiuralClient";
import { caseStudies } from "@/lib/data";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ REQUIRED
  const { id } = await params;

  const project = caseStudies[Number(id)];

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center text-text-subtle'>
        Not Found
      </div>
    );
  }

  const CustomComponent = project.RenderComponent;

  return (
    <NiuralClient
      project={{
        ...project,
      }}
    >
      {CustomComponent ? <CustomComponent /> : null}
    </NiuralClient>
  );
}
