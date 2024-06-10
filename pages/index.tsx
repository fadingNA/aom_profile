import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import BackgroundVideo from "@/src/feature/header_home";

export default function Home() {
  return (
    <>
      <BackgroundVideo />
    </>
  );
}
