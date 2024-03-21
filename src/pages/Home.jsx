import Hero from "../components/Hero";
import wave from "../assets/wave.svg"
const Home = () => {
  return (
    <div className="min-h-[calc(100vh-142px)]">
      <Hero/>
        <img className="absolute bottom-[50px] w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;
