import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <>
      <div
        className={`flex justify-center items-center bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] bg-opacity-0  font-mono`}
      >
        <span className="ml-3 text-[1.5rem] md:text-[2rem] text-gray-500 text-center">
          aomgoodgurl
        </span>
      </div>
    </>
  );
};

export default Navbar;


//from-cyan-200 via-rose-200 to-slate-800