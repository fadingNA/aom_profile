import { motion } from "framer-motion";
import Image from "next/image";

export default function LinkTree() {
  const links = [
    {
      href: "https://example1.com",
      label: "Instagram",
      img: "/ig-instagram-icon.png",
    }, // Add image path for Instagram
    {
      href: "https://example3.com",
      label: "Tiktok",
      img: "/tiktok-square-color-icon.png",
    },
    {
      href: "https://twitch.tv/porrutair",
      label: "Twitch",
      img: "/twitch-color-icon.png",
    },
    {
      href: "https://ngl.link/aomgoodgal",
      label: "not gonna lie",
      img: "/ngl-logo.png",
    },
  ];

  const bounceTransition = {
    repeat: Infinity,
    repeatType: "mirror" as const,
    duration: 0.9,
    ease: "easeInOut" as const,
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8 bg-stone-300 bg-opacity-70 rounded-lg shadow-lg">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          className="relative md:min-w-[500px] min-w-[300px] px-6 py-3 font-bold text-black group text-center flex items-center justify-center"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          animate={link.label === "Tiktok" ? { y: [0, -20, 0] } : undefined}
          transition={
            link.label === "Tiktok"
              ? bounceTransition
              : {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }
          }
        >
          <span className="absolute inset-0 rounded-lg w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-rose-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          {link.img && (
            <Image
              src={link.img}
              alt={link.label}
              width={50}
              height={50}
              className="relative z-10"
            />
          )}
          <span className="relative z-10 ml-2">{link.label}</span>
        </motion.a>
      ))}
    </div>
  );
}
