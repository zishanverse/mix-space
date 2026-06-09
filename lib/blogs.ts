import { prisma } from "@/lib/prisma";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string | null;
  category: string;
  readTime: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  authorName: string;
  authorRole: string | null;
  authorImage: string | null;
}

const DUMMY_BLOGS = [
  {
    title: "Cinematic Web Design: The Future of Digital Brand Storytelling",
    slug: "cinematic-web-design-future",
    excerpt: "How branding studios are blending film aesthetics, micro-interactions, and immersive typography to create high-conversion digital realities.",
    category: "Design",
    readTime: "6 min read",
    content: `# Cinematic Web Design: The Future of Digital Brand Storytelling

In an era where attention is the ultimate currency, standard websites are no longer enough. The modern web requires more than grid layouts and generic buttons. To truly stand out, brands are turning to **cinematic web design**—a design philosophy that blends cinematography with responsive interactions.

## 1. Visual Weight and Dramatic Contrast
Cinematic experiences start with lighting and contrast. Utilizing true pitch blacks (\`#000000\`) paired with crisp typography and subtle glows creates a theater-like atmosphere. When the user lands on a page, they aren't just reading information; they are entering a curated visual space.

> "Good design is about making something intelligible and memorable. Great design is about making it cinematic."

## 2. The Power of Micro-Animations
Transitions shouldn't just be functional—they should feel organic. Through libraries like **GSAP** and **Framer Motion**, we can orchestrate elements to enter the screen in choreography.
- **Scroll Progress Indicators**: A thin, elegant bar showing the reading progress.
- **Hover Magnification**: Elements gently expanding or glowing when hovered, communicating responsiveness.
- **Text Reveal Effects**: Lines of copy fading and moving upward as they enter the viewport.

## 3. High-Ticket Brand Trust
A luxury design aesthetic instantly elevates perceived value. By focusing on wide-spaced typography, custom grid structures, and a lack of visual clutter, your brand builds trust without saying a word.

Stay tuned for our upcoming deep dives into creative direction.`,
    imageUrl: "https://cdn.dribbble.com/users/1575908/screenshots/17109968/media/5924ac1d05f0ae915ac7b99f5b29187d.jpg?format=webp&resize=1440x&vertical=center",
    authorName: "Sarah Jenkins",
    authorRole: "Design Principal",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    title: "Scaling Next.js Applications in 2026: Lessons from the Edge",
    slug: "scaling-nextjs-applications-edge",
    excerpt: "A deep dive into partial prereconstruction, streaming server components, and utilizing regional database pools to achieve sub-100ms loading speeds.",
    category: "Development",
    readTime: "8 min read",
    content: `# Scaling Next.js Applications in 2026: Lessons from the Edge

Next.js has matured into the premier React framework for production applications. However, as web layouts become more dynamic and animation-heavy, optimizing performance becomes a critical challenge. Here is how we build ultra-fast web apps.

## Dynamic Server Side Components (RSC)
By using React Server Components, we keep the bulk of our logic on the server. The client only downloads the JavaScript required for interactive components (like navigation menus or interactive elements).

\`\`\`javascript
// Server Component
export async function BlogList() {
  const posts = await prisma.blog.findMany();
  return <PostGrid posts={posts} />;
}
\`\`\`

## Database Connection Management
When deploying to edge environments (like Vercel Edge or Cloudflare Workers), database connection pools can quickly become exhausted. We resolve this by:
1. Using **Prisma Client** with optimized pooling configuration.
2. Placing databases in locations close to our serverless execution environments.
3. Caching static data using CDN-edge nodes.

## The Optimization Checklist
- Optimize images using Next.js \`<Image />\` component.
- Use \`framer-motion\` dynamically or import animation libraries code-split.
- Implement smooth scroll with Lenis globally to avoid visual stuttering during fast scrolling.`,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    authorName: "Alex Rivera",
    authorRole: "Technical Lead",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    title: "The Psychology of Luxury Brands: Designing for High-Ticket Audiences",
    slug: "psychology-of-luxury-brands",
    excerpt: "Unpacking the visual language, minimalism, and micro-animations that turn casual website visitors into loyal brand advocates for high-value services.",
    category: "Branding",
    readTime: "5 min read",
    content: `# The Psychology of Luxury Brands: Designing for High-Ticket Audiences

Luxury brands don't sell products; they sell status, identity, and an experience. Translating this feeling online requires a deep understanding of visual psychology.

## Visual Space is Luxury
In high-end design, whitespace (or negative space) is not empty—it is active. A crowded layout screams discount. A generous layout with plenty of space screams confidence and luxury.

## Serif and Sans-Serif Contrast
Using high-contrast typeface pairings, like a classic serif like *Playfair Display* for large displays and a clean geometric sans-serif like *DM Sans* or *Inter* for body copy, immediately signals high-end publishing.

## Subtle Animations Over Flashy Effects
A luxury website should never feel like a carnival. Animations must be slow, smooth, and controlled.
- Use ease-out curves that feel natural.
- Avoid flashing colors; stick to a harmonious palette (such as warm whites, deep blacks, and muted metallic colors).
- Let elements ease into place gracefully.`,
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    authorName: "Elena Rostova",
    authorRole: "Brand Strategist",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  }
];

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    let blogs = await prisma.blog.findMany({
      orderBy: {
        publishedAt: "desc"
      }
    });

    if (blogs.length === 0) {
      console.log("No blogs found in the database. Seeding dummy blogs...");
      await Promise.all(
        DUMMY_BLOGS.map((blog) =>
          prisma.blog.create({
            data: {
              title: blog.title,
              slug: blog.slug,
              excerpt: blog.excerpt,
              content: blog.content,
              category: blog.category,
              readTime: blog.readTime,
              authorName: blog.authorName,
              authorRole: blog.authorRole,
              imageUrl: blog.imageUrl,
              authorImage: blog.authorImage,
            }
          })
        )
      );

      // Re-fetch after seeding
      blogs = await prisma.blog.findMany({
        orderBy: {
          publishedAt: "desc"
        }
      });
    } else {
      // Check if existing database records lack images/avatars and backfill them
      const needsUpdating = blogs.some((b) => !b.imageUrl || !b.authorImage);
      if (needsUpdating) {
        console.log("Existing blogs in the database are missing images/avatars. Updating them...");
        await Promise.all(
          blogs.map(async (blog) => {
            const dummy = DUMMY_BLOGS.find((d) => d.slug === blog.slug);
            if (dummy) {
              await prisma.blog.update({
                where: { id: blog.id },
                data: {
                  imageUrl: blog.imageUrl || dummy.imageUrl,
                  authorImage: blog.authorImage || dummy.authorImage,
                },
              });
            }
          })
        );
        // Re-fetch after updating
        blogs = await prisma.blog.findMany({
          orderBy: {
            publishedAt: "desc"
          }
        });
      }
    }

    return blogs as BlogPost[];
  } catch (error) {
    console.error("Failed to fetch blogs from database, using static fallback:", error);
    // Fallback to static in case database is down or has issues
    return DUMMY_BLOGS.map((blog, idx) => ({
      id: `fallback-${idx}`,
      ...blog,
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })) as BlogPost[];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug }
    });

    if (blog) return blog as BlogPost;

    // Try dummy data fallback
    const dummy = DUMMY_BLOGS.find((b) => b.slug === slug);
    if (dummy) {
      return {
        id: `fallback-slug-${slug}`,
        ...dummy,
        publishedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      } as BlogPost;
    }

    return null;
  } catch (error) {
    console.error(`Failed to fetch blog by slug ${slug}:`, error);
    const dummy = DUMMY_BLOGS.find((b) => b.slug === slug);
    if (dummy) {
      return {
        id: `fallback-slug-${slug}`,
        ...dummy,
        publishedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      } as BlogPost;
    }
    return null;
  }
}
