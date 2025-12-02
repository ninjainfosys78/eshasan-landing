import { ArrowRight } from "lucide-react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { resourceTranslations } from "@/i18n/resource-translation";
import { useEffect, useState } from "react";
import { pb, type Blog } from "@/services/pocketbase";
import { blogService } from "@/services/blogService";
import { useNavigate } from "@tanstack/react-router";

export default function Insights() {
  const { language } = useLanguageStore();
  const t = resourceTranslations[language].insights;
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBlogs = async () => {
      try {
        const items = await blogService.getBlogs(3);
        if (!abortController.signal.aborted) {
          setBlogs(items);
        }
      } catch (error: any) {
        if (!abortController.signal.aborted) {
          setError(error?.message || "Failed to fetch blogs");
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchBlogs();

    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) {
    return (
      <section
        aria-label="Insights & Updates"
        className="w-full bg-[#E6EBF4] py-14 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-4">
          <p className="text-center text-[#072235]">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        aria-label="Insights & Updates"
        className="w-full bg-[#E6EBF4] py-14 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-4">
          <p className="text-center text-red-600">Error: {error}</p>
          <p className="text-center text-sm text-gray-600 mt-2">
            Please check if PocketBase is accessible at: {pb.baseURL}
          </p>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section
        aria-label="Insights & Updates"
        className="w-full bg-[#E6EBF4] py-14 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="mb-8">
            <h2 className="text-center text-[28px] font-bold text-[#000000]">
              {t.heading}
            </h2>
          </div>
          <p className="text-center text-[#072235]">No blogs found</p>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Insights & Updates"
      className="w-full bg-[#E6EBF4] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-8">
          <h2 className="text-center text-[28px] font-bold text-[#000000]">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col overflow-hidden"
            >
              <div className="relative w-full bg-black">
                <img
                  src={blogService.getImageUrl(post)}
                  alt={post.Title}
                  className="h-[220px] w-full object-cover"
                />
              </div>

              <CardContent className="flex flex-col flex-1 px-4 py-5">
                <CardTitle className="text-[15px] sm:text-[16px] text-[#072235] leading-snug mb-4">
                  {post.Title}
                </CardTitle>

                <p className="text-[12px] text-[rgba(7,34,53,0.7)] mb-4">
                  {new Date(post.Published_Date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => navigate({ to: '/blog' as any, search: { id: post.id } as any})}
                    className="inline-flex items-center text-[13px] font-medium text-[#003893] no-underline hover:underline cursor-pointer"
                  >
                    {t.readMore}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
