import React, { useState } from 'react';
import { blogPosts } from '../../data/blogData';
import { SEOMeta } from '../common/SEOMeta';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Search, Clock, Calendar, ArrowRight, BookOpen, User } from 'lucide-react';

export const BlogIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Nutcrackers Engineering & Technology Insights',
    description: 'Technical guides, software agency evaluation frameworks, AI automation blueprints, and data analytics architectures.',
    url: 'https://nutcrackers.tech/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Nutcrackers',
      url: 'https://nutcrackers.tech',
      logo: 'https://nutcrackers.tech/new_nutcrackers_business_card.jpeg'
    },
    blogPost: blogPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.metaDescription,
      url: p.canonicalUrl,
      datePublished: p.publishedDate,
      dateModified: p.modifiedDate,
      author: {
        '@type': 'Person',
        name: p.author.name
      }
    }))
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 relative">
      <SEOMeta
        title="Technology, Engineering & AI Insights Blog | Nutcrackers"
        description="In-depth engineering guides, tech agency hiring frameworks, AI automation blueprints, and data analytics case studies by Nutcrackers."
        canonicalUrl="https://nutcrackers.tech/blog"
        schema={blogSchema}
      />

      <Breadcrumbs items={[{ name: 'Blog' }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ENGINEERING & DIGITAL STRATEGY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Playbooks, AI Blueprints & Strategy Guides
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Practical, in-depth architectural guides written by senior developers and technology strategists for founders, CTOs, and product leaders.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-between border-y border-white/[0.08] py-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D0E16] border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-2xl bg-[#0D0E16]/80 border border-white/[0.08] hover:border-purple-500/40 hover:bg-[#0D0E16] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-gray-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <a href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {post.title}
                  </h2>
                </a>

                <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <User className="w-3.5 h-3.5 text-brand-teal" />
                  <span className="truncate max-w-[140px] font-medium">{post.author.name}</span>
                </div>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-purple-400 group-hover:text-purple-300 font-semibold group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">
            No articles found matching "{searchQuery}". Try a different keyword or reset filters.
          </div>
        )}
      </section>
    </div>
  );
};
