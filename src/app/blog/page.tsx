import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-muted-foreground text-lg">Coming soon...</p>
          <p className="text-muted-foreground text-sm mt-2">
            I&apos;ll be sharing thoughts on Web3, SaaS development, and building in public.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
