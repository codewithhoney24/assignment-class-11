import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Responsive Div Section */}
      <div className="flex sm:flex-col  xl:h-screen   lg:flex-col   w-full  h-screen    ">

        {/* Div 1 (Full width and height relative to the container) */}
        <div className="w-full sm:h-1/2 bg-purple-400 text-center text-white flex items-center justify-center font-bold">
          Assignment - 6
        </div>

        {/* Div 2 and Div 3 (Row for 1440px and above) */}
        <div className="flex w-full  sm:h-full sm:flex-col md:flex-row lg:flex-col xl:flex-row 2xl:flex-row">

          {/* Div 2 (Dynamic height based on container) */}
          <div className="    w-full sm:h-full bg-fuchsia-500 text-center text-white flex items-center justify-center font-bold">
          Div -   2
          </div>

          {/* Div 3 (Dynamic height based on container) */}
          <div className="sm:h-full   w-full  bg-blue-400 text-center text-white flex items-center justify-center font-bold">
          Div  -   3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
