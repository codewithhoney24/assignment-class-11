import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className="bg-fuchsia-950 h-72 text-center text-white p-6">
  <h1 className="text-4xl font-bold">Welcome to My Responsive App</h1>
  <p className="mt-4">This app is responsive and adjusts to different screen sizes.</p>
</section>

<div className="flex w-full h-72">
  {/* First Div */}
  <div className="w-1/2 font-bold bg-purple-400 text-center text-white flex items-center justify-center">
   CLASSS - 11   ASSIGNMENT -6 
  </div>

  {/* Second Div */}
  <div className="w-1/2 bg-fuchsia-500  font-bold text-center text-white flex items-center justify-center">
  CLASSS - 11   ASSIGNMENT -6
  </div>
</div>
</div>
  )
}


export default Home;
