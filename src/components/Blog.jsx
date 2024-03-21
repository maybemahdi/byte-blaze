import { Link } from "react-router-dom";
import coverAlt from "../assets/404.jpg";

const Blog = ({ blog }) => {
  const { id, title, description, published_at, cover_image } = blog;
  return (
    <div className="bg-gray-900 rounded-md hover:scale-105 transition-all duration-300">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 rounded-md"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || coverAlt}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
