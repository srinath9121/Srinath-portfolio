import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BlogCover } from "@/components/blog-cover";
import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { getBlogPosts } from "@/lib/mdx";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Blog"),
  description:
    "Notes on data science, machine learning, and systems engineering by M Srinath Swamy.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-10 pb-16 pt-8">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-3 text-secondary">
          Notes on data science, machine learning, research, and technical systems.
        </p>
      </Container>

      <Container>
        {posts.length > 0 ? (
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <LiquidGlassCard
                key={post.slug}
                glowIntensity="sm"
                shadowIntensity="md"
                borderRadius="18px"
                blurIntensity="md"
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <BlogCover
                    title={post.title}
                    cover={post.cover}
                    className="aspect-[2/1] w-full"
                  />
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs uppercase tracking-wider text-secondary">{post.date}</p>
                      <ArrowUpRight className="size-4 shrink-0 text-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </LiquidGlassCard>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-8 text-center text-sm text-secondary">
            Articles and research notes coming soon.
          </div>
        )}
      </Container>
    </div>
  );
}
