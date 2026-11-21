import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { getProject, projects } from "@/content/projects";
import { ogImage } from "@/lib/og";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} (${project.year})`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `./` },
    openGraph: {
      title,
      description: project.summary,
      type: "article",
      url: `./`,
      images: [{ ...ogImage(project.slug), alt: project.cover.alt }],
    },
    twitter: { card: "summary_large_image", title, description: project.summary, images: [ogImage(project.slug).url] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
