import React from 'react';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3.5fr_1.7fr] items-center gap-x-8 gap-y-4">
      {/* Left part (3.5/5 width on larger screens) */}
      <div className="col-span-1 md:col-span-1">
        <img src="https://via.placeholder.com/800x400" alt="Eagle Illustration" className="w-full h-auto object-cover" />
      </div>
      
      {/* Right part (1.5/5 width on larger screens) */}
      <div className="col-span-1 md:col-span-1 flex flex-col gap-y-4">
        {/* Two images side by side */}
        <img src="https://via.placeholder.com/800x400" alt="Placeholder Right 1" className="w-full object-cover" />
        <img src="https://via.placeholder.com/800x400" alt="Placeholder Right 2" className="w-full object-cover" />
      </div>
    </div>
  );
}

export default Hero;
