import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <main className="container mx-auto max-w-2xl py-12">
      <h1 className="text-3xl font-bold mb-4">blog</h1>
      <p className="text-muted-foreground">
        Coming soon — I’ll share notes on Web3, SaaS, and building in public.
      </p>
    </main>
  );
}
