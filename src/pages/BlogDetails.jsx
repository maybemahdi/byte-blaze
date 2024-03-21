import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blogDetail = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const {
    comments_count,
    title,
    reading_time_minutes,
    public_reactions_count,
    published_at,
  } = blogDetail;
  return (
    <div className="min-h-[calc(100vh-142px)]">
      <div className="px-6 py-16 mx-auto space-y-12 w-full lg:w-[60%]">
        <article className="space-y-8 text-black">
          <div className="space-y-6">
            <h1 className="text-4xl text-black font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-black">
              <div className="flex items-center md:space-x-2">
                <p>{reading_time_minutes} min read</p>
                <p className="text-sm">
                  • {new Date(published_at).toLocaleString()}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments • {public_reactions_count} views
              </p>
            </div>
            <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
              <Link
                to=""
                onClick={() => setTabIndex(0)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 0 ? "border border-b-0" : "border-b"
                } border-gray-400 text-gray-400`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              <Link
                to="author"
                onClick={() => setTabIndex(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 1 ? "border border-b-0" : "border-b"
                } border-gray-400 text-gray-400`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Author</span>
              </Link>
            </div>
          </div>
          <Outlet />
        </article>
        <div></div>
      </div>
    </div>
  );
};

export default BlogDetails;
