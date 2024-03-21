import { useLoaderData } from "react-router-dom";
import coverAlt from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blogContent = useLoaderData();
  const { title, cover_image, tags, body_html } = blogContent;
  return (
    <div>
      <div className="w-full border border-gray-200 mx-auto group hover:no-underline focus:no-underline rounded-md">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || coverAlt}
        />
        <div className="flex flex-wrap px-5 py-6 gap-2 border-t border-dashed border-gray-400">
          {tags.map((tag) => (
            <a
              key={tag}
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <div className="flex flex-col overflow-hidden items-center flex-wrap justify-center">
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
