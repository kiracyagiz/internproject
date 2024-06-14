import Image from "next/image";
import Header from "./components/Header";
import SelectableButton from "./components/Button/SelectableButton";
import HomeTab from "./components/Tab/HomeTab";
import Hero from "./components/Hero/Hero";

export default function Home() {



  return (
   <div >
      <Header/>
      <HomeTab/>
      <div className="container  gap-x-16 mx-auto px-4 md:px-8 lg:px-[120px]">
      <Hero/>
      

      </div>
   </div> 
  );
}
