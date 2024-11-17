import { motion } from "framer-motion";
import Image from "next/image";

export default function LinkTree() {
  const links = [
    {
      href: "https://www.instagram.com/aomgoodgurl",
      label: "Instagram",
      img: "/ig-instagram-icon.png",
    }, // Add image path for Instagram
    {
      href: "https://www.tiktok.com/@aomgoodgurl",
      label: "aomgoodgurl",
      img: "/tiktok-square-color-icon.png",
    },
    {
      href: "https://twitch.tv/porrutair",
      label: "Twitch",
      img: "/twitch-color-icon.png",
    },
    {
      href: "https://www.tiktok.com/@lifestylewithnp",
      label: "liftstylewithnp",
      img: "/tiktok-square-color-icon.png",
    },

  ];

  const bounceTransition = {
    repeat: Infinity,
    repeatType: "mirror" as const,
    duration: 0.9,
    ease: "easeInOut" as const,
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-4 bg-stone-100 bg-opacity-30 rounded-lg shadow-lg font-mono">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          className="relative md:min-w-[500px] min-w-[300px] px-6 py-3 font-medium text-black group text-center flex items-center justify-center"
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          animate={link.label === "aomgoodgurl" ? { y: [0, -20, 10] } : undefined}
          transition={
            link.label === "aomgoodgurl"
              ? bounceTransition
              : {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }
          }
        >
          <span className="absolute inset-0 rounded-lg w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-rose-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-2 rounded-md border-white"></span>
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
