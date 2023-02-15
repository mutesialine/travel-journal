
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return(
    <div className="w-full m-36 mx-auto max-w-[550px] shadow-md rounded-md pb-12">
    <Navbar/>
    <Hero/>
    </div>
  )
}