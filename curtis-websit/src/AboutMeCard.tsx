import React from "react";

function AboutMeCard({ children }) {
  return (
    <div className="flex justify-center p-4 font-bold align-middle bg-green-500 border-4 border-black basis-1/2 text-1xl text-black-950 rounded-3xl">
      {children}
    </div>
  );
}

export default AboutMeCard;
