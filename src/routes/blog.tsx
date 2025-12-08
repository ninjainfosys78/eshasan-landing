import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import { type Blog } from "@/services/pocketbase";
import { blogService } from "@/services/blogService";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const Route = createFileRoute('/blog' as any)({
  component: BlogDetail,
});

function BlogDetail() {
  const search = useSearch({ from: '/blog' } as any);
  const id = (search as any).id;
  
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const record = await blogService.getBlogById(id);
        setBlog(record);
      } catch (error: any) {
        setError(error?.message || "Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    } else {
      setError("No blog ID provided");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white py-16">
          <div className="mx-auto max-w-[1000px] px-4">
            <p className="text-center text-[#072235]">Loading blog...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white py-16">
          <div className="mx-auto max-w-[1000px] px-4">
            <button
              onClick={() => navigate({ to: '/resources' })}
              className="inline-flex items-center text-[14px] text-[#003893] hover:underline mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </button>
            <p className="text-center text-red-600">
              {error || "Blog not found"}
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white py-16">
        <div className="mx-auto max-w-[1000px] px-4">
          <button
            onClick={() => navigate({ to: '/resources' })}
            className="inline-flex items-center text-[14px] text-[#003893] hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </button>

          <div className="mb-8">
            <img
              src={blogService.getImageUrl(blog)}
              alt={blog.Title}
              className="w-full h-[350px] object-cover"
            />
          </div>

          <h1 className="text-[32px] md:text-[40px] font-bold text-[#072235] mb-4">
            {blog.Title}
          </h1>

          <p className="text-[14px] text-[rgba(7,34,53,0.7)] mb-8">
            {new Date(blog.Published_Date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>

          <div className="prose prose-lg max-w-none">
            <div
              className="text-[16px] text-[#072235] leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: blog.Content || "" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
