import LinkTree from "../linktree/linktree";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function BackgroundVideo() {
  return (
    <div
      className={`relative w-full h-screen rounded-sm overflow-hidden flex flex-col lg:flex-row ${roboto.className}`}
    >
      <div className="w-full md:w-1/2 h-full relative hidden md:block">
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
      <div className="w-full md:w-1/2 h-full relative ">
        <img
          src="/aom_bg_jjpg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
          hi there 😘
        </h1>
        <a
          href="https://www.instagram.com/aomgoodgal/"
          target="_blank"
          className="mt-4 text-lg lg:text-2xl text-rose-200 text-center"
        >
          @aomgoodgurl
        </a>
        <div className="mt-8">
          <LinkTree />
        </div>
      </div>
    </div>
  );
}
