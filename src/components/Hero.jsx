import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="">
        <div className="container mx-auto flex flex-col items-center px-4 py-48 lg:py-[120px] text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-5xl w-3/4 md:w-full font-bold leading-none sm:text-5xl">
            Welcome to
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient">
              {" "}
              ByteBlaze
            </span>
          </h1>
          <p className="lg:px-6 mt-8 mb-12 text-lg">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/blogs"
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>
            <Link
              to="/bookmarks"
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
