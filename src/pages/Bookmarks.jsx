import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { deleteBlog, getBlogs } from "../components/local";
import EmptyMesssage from "../components/EmptyMesssage";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if (blogs.length < 1) {
    return <EmptyMesssage />;
  }
  return (
    <div className="min-h-[calc(100vh-142px)] container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 rounded-md">
      <div className="grid justify-center text-white my-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            handleDelete={handleDelete}
            deletable={true}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
