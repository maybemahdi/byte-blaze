import { ScaleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-[calc(100vh-142px)]">
      <ScaleLoader size={100} color="#f92fd3" />
    </div>
  );
};

export default Loader;
