import React from 'react'
import SelectableButton from '../Button/SelectableButton';

const HomeTab = () => {

    const categories = [
        {
          title: "BODY LEWELERY",
          icon: "",
          selectable: true,
        },
        {
          title: "PIERCING",
          icon: "",
          selectable: true,
        },
        {
          title: "TATTOO",
          icon: "",
          selectable: true,
        },
        {
          title: "MEDICAL",
          icon: "",
          selectable: true,
        },
        {
          title: "STUDIO",
          icon: "",
          selectable: true,
        },
        {
          title: "PERMANENT MAKEUP",
          icon: "",
          selectable: true,
        },
     
      ];
  return (
    <div>
        <div className="container hidden md:hidden lg:flex flex-row gap-x-16 mx-auto px-4 md:px-8 lg:px-[120px]">
       
       <div className="flex flex-row  items-center">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjuWzLTeJFoaI21w7cY7n6mzft-vhXyy7vQ&s"
       className="w-14 h-14"
       ></img>
        
        <p className="text-blue-400 text-lg font-bold italic ">PainfulPleasures</p>
       </div>

       {categories.map((dt, i) => (
           <SelectableButton
             icon={dt.icon}
             title={dt.title}
             key={i}
             selectable={dt.selectable}
             isCategory={true}
           />
         ))}

         
     </div> 
     <hr class=" hidden lg:flex my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    </div>
  )
}

export default HomeTab
