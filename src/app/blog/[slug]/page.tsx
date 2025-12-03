import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  // No posts to prerender
  return [];
}

async function getPostSafe(slug: string) {
  // Temporarily disable loading posts
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  // No metadata for disabled posts
  return undefined;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostSafe(params.slug);
  // Always 404 to avoid runtime errors
  return notFound();
}
