// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/app/data/blogs";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>

      {/* Author Section */}
      <div className="flex items-center mb-8 bg-gray-50 rounded-xl p-4 shadow-sm">
        <Image
          src={blog.authorImage}
          alt={blog.author}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="ml-4">
          <p className="font-semibold">{blog.author}</p>
          <p className="text-sm text-gray-600">{blog.authorRole}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg">
        {blog.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  );
}
