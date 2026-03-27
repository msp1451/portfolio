import React, { memo, useMemo } from "react";
import { BookOpen, ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BLOG_POSTS = [
  {
    title: "Coming Soon: My First Blog Post",
    excerpt:
      "Stay tuned! I'll be sharing my thoughts on technology, projects, and lessons learned along the way.",
    date: "2026-04-01",
    readTime: "5 min read",
    tags: ["Announcement"],
  },
];

const BlogCard = memo(({ post }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-200"
  >
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
      <span className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        {post.date}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        {post.readTime}
      </span>
    </div>
    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
      {post.title}
    </h3>
    <p className="text-base text-muted-foreground mb-4 flex-grow">
      {post.excerpt}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {post.tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
        >
          {tag}
        </span>
      ))}
    </div>
    <button
      className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline transition-colors duration-200 cursor-pointer"
      disabled
    >
      Read More <ArrowRight className="w-4 h-4" />
    </button>
  </motion.div>
));
BlogCard.displayName = "BlogCard";

function BlogComponent() {
  const posts = useMemo(() => BLOG_POSTS, []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <BookOpen className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            Thoughts, tutorials, and insights on technology, problem-solving,
            and my journey as a developer. More posts coming soon!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(BlogComponent);
