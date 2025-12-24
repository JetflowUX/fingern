import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.id === Number(id));

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                    <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Banner */}
            <section className="relative h-64 md:h-80 bg-navy flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light opacity-90" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-primary-foreground/80 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        {post.author && (
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                            </div>
                        )}
                        {post.category && (
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4" />
                                <span>{post.category}</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Button
                    variant="ghost"
                    className="mb-8 pl-0 hover:bg-transparent hover:text-primary"
                    onClick={() => navigate("/blog")}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Button>

                <div
                    className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
                />
            </article>

            <Footer />
        </div>
    );
};

export default BlogDetail;
