import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 bg-navy flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light opacity-90" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
          Blog
        </h1>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-heading font-semibold text-primary mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-primary hover:underline font-medium">
                Read More »
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};



export default Blog;
