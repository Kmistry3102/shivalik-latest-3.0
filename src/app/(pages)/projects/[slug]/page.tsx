import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Projects } from "@/constants/projects.constant";
import ProjectPage from "@/components/section/projects/ProjectPage";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const awaitedparams = await params;
  const project = Projects.find(
    (p) =>
      (p.projectName || "").toLowerCase().replace(/\s+/g, "") ===
      awaitedparams.slug.toLowerCase()
  );
  if (!project) {
    return {
      title: "Project Not Found | Shivalik",
      description: "This project does not exist.",
    };
  }
  return {
    title: `${project.projectName}`,
    description:
      project.ctaHeading || `Discover ${project.projectName} by Shivalik.`,
    openGraph: {
      title: `${project.projectName} | Shivalik`,
      description:
        project.ctaHeading || `Discover ${project.projectName} by Shivalik.`,
      // Add images, url, etc. here if available
    },
  };
}

export default async function InnerProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const awaitedparams = await params;

  const project = Projects.find(
    (p) =>
      (p.projectName || "").toLowerCase().replace(/\s+/g, "") ===
      awaitedparams.slug.toLowerCase()
  );
  if (!project) return notFound();
  return <ProjectPage project={project} />;
}
