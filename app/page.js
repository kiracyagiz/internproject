import Image from "next/image";
import Header from "./components/Header";
import SelectableButton from "./components/Button/SelectableButton";
import HomeTab from "./components/Tab/HomeTab";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Blogs from "./components/Blogs/Blogs";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

export default function Home() {



  return (
   <div >
      <Header/>
      <HomeTab/>
      <div className="container   mx-auto px-4 md:px-8 lg:px-[120px]">
      <Hero/>
      <Categories/> 
      <Blogs/>

      </div>

      <div className="bg-gray-100">
     <Products/>
      </div>
      <Reviews/>
      <Footer/>
   </div>   
  );
}
