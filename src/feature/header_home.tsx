import LinkTree from "../linktree/linktree";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function BackgroundVideo() {
  return (
    <div
      className={`relative w-full h-screen rounded-sm overflow-hidden flex flex-col lg:flex-row ${roboto.className}`}
    >
      <div className="w-full md:w-1/1 h-full relative hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/aom_bg_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full md:w-1/1 h-full relative ">
        <Image
          src="/aom_forest.jpg"
          alt="Background"
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start md:justify-center w-full h-full bg-black bg-opacity-50 pt-10 sm:pt-14 md:pt-0">
        <h1 className="text-4xl lg:text-6xl font-bold text-white text-center font-mono">
          hi there 😘
        </h1>
        <a
          href="https://www.instagram.com/theitsummer?"
          target="_blank"
          className="mt-1 text-lg lg:text-2xl text-rose-200 text-center font-mono hover:underline hover:scale-105 transition-all ease-in-out duration-300"
        >
          @theitsummer
        </a>
        <div className="mt-2">
          <LinkTree />
        </div>
      </div>
    </div>
  );
}
