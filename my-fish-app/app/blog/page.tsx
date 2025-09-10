"use client";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/app/data/blogs";
import { useState } from "react";

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Collect all unique tags from blogs
  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags ?? [])));

  // Filter blogs by search and tag
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    const matchesTag = selectedTag ? blog.tags?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-16 text-center rounded-2xl shadow-lg mb-12 relative overflow-hidden">
        <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">
          Welcome to My Blog
        </h1>
        <p className="text-xl opacity-90">
          Insights, tutorials, and experiences to inspire your journey
        </p>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Search Bar & Tags */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-full border ${selectedTag === null ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-indigo-600'} font-medium transition`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full border ${selectedTag === tag ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-indigo-600'} font-medium transition`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg py-12">No blogs found.</div>
        ) : (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Blog Image */}
              <div className="h-48 w-full relative">
                <Image
                  src={blog.authorImage || "/author5.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.content.substring(0, 120)}...
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {blog.tags?.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta & CTA */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <p>{blog.date}</p>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Newsletter CTA */}
      <div className="bg-indigo-50 rounded-2xl mt-16 p-10 text-center shadow-inner">
        <h2 className="text-3xl font-bold mb-4">
          📩 Subscribe to My Newsletter
        </h2>
        <p className="text-gray-700 mb-6">
          Stay updated with the latest blog posts, tips, and resources.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg border border-gray-300 w-72"
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-4">Have questions or ideas?</p>
        <a
          href="mailto:sendInquiry@blog.id"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
