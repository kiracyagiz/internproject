import Image from "next/image";
import Header from "./components/Header";
import SelectableButton from "./components/Button/SelectableButton";
import HomeTab from "./components/Tab/HomeTab";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";

export default function Home() {



  return (
   <div >
      <Header/>
      <HomeTab/>
      <div className="container   mx-auto px-4 md:px-8 lg:px-[120px]">
      <Hero/>
      <Categories/> 

      </div>
   </div> 
  );
}
