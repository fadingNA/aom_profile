// app/components/LinkTree.tsx (or wherever you like)
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type BaseProps = {
  label: string;
  img?: string;
  bounce?: boolean;
  className?: string;
  children?: ReactNode;
  mirror?: boolean; // enable reflection
};

type AsAnchor = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, "children"> & {
    as?: "a";
  };

type AsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "children"> & {
    as: "button";
  };

type LinkTileProps = AsAnchor | AsButton;

const bounceTransition = {
  repeat: Infinity,
  repeatType: "mirror" as const,
  duration: 0.1,
  ease: "easeInOut" as const,
};

function LinkTile(props: LinkTileProps) {
  const {
    as = "a",
    label,
    img,
    bounce,
    mirror = true,
    className = "",
    ...rest
  } = props as any;

  const core = (
    <motion.div
      className={[
        "relative mx-auto max-w-[95%] w-[350px] sm:max-w-[420px] md:w-[500px] h-10",
        "px-6 py-3 font-medium text-black group text-center",
        "flex items-center justify-center rounded-lg whitespace-nowrap",
        "shadow-lg bg-stone-100/70 backdrop-blur",
        "transition-transform",
        className,
      ].join(" ")}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      animate={bounce ? { y: [0, -20, 10] } : undefined}
      transition={
        bounce
          ? (bounceTransition as any)
          : { type: "spring", stiffness: 300, damping: 5 }
      }
      // reflection
      style={
        mirror
          ? {
            WebkitBoxReflect:
              "below 0px linear-gradient(transparent, rgba(0,0,0,0.15))",
          }
          : undefined
      }
    >
      {/* soft offset layer */}
      <span className="absolute inset-0 rounded-lg  w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-rose-300/80 group-hover:translate-x-0 group-hover:translate-y-0" />
      {/* border */}
      <span className="absolute inset-0 w-full  h-full border-2 rounded-lg border-white/80" />

      <span className="relative z-10 flex items-center justify-center gap-3 w-full">
        {/* Icon or placeholder */}
        <div className="w-[22px] flex-shrink-0">
          {img ? (
            <Image
              src={img}
              alt=""
              width={22}
              height={22}
              className="pointer-events-none select-none"
              priority={false}
            />
          ) : (
            <div className="w-[22px]" /> // invisible spacer
          )}
        </div>
        <span className="flex-1 text-center truncate -ml-[25px]">{label}</span>
      </span>


    </motion.div>
  );

  if (as === "button") {
    const { onClick, type = "button", ...buttonRest } = rest as ComponentPropsWithoutRef<"button">;
    return (
      <button
        type={type}
        onClick={onClick}
        {...buttonRest}
        className="outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-xl"
      >
        {core}
      </button>
    );
  }

  // default: anchor
  const { href = "#", target = "_blank", rel, ...anchorRest } = rest as ComponentPropsWithoutRef<"a">;
  const safeRel =
    target === "_blank"
      ? rel
        ? rel
        : "noopener noreferrer"
      : rel;

  // If internal link -> Next.js <Link>, else plain <a>
  const isInternal = typeof href === "string" && href.startsWith("/");
  if (isInternal) {
    return (
      <Link
        href={href}
        {...(anchorRest as any)}
        className="outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-xl"
      >
        {core}
      </Link>
    );
  }

  return (
    <a
      href={href as string}
      target={target}
      rel={safeRel}
      {...anchorRest}
      className="outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-xl"
    >
      {core}
    </a>
  );
}

interface LinkProp {
  href: string;
  label: string;
  img?: string;
  bounce?: boolean;
}



export default function LinkTree() {
  const links: LinkProp[] = [
    { href: "https://porrucia.ca", label: "Porrucia" },
    {
      href: "https://www.instagram.com/aomgoodgurl",
      label: "Instagram",
      img: "/ig-instagram-icon.png",
    },
    {
      href: "https://www.tiktok.com/@aomgoodgurl",
      label: "aomgoodgurl",
      img: "/tiktok-square-color-icon.png",
      bounce: false,
    },
    {
      href: "https://www.tiktok.com/@aomgoodgal",
      label: "aomgoodgal",
      img: "/tiktok-square-color-icon.png",
    },
    {
      href: "https://twitch.tv/porrutair",
      label: "Twitch",
      img: "/twitch-color-icon.png",
    },
  ]

  return (
    <div className="flex flex-col items-center gap-4 justify-center p-6">
      {/* Links as <a> tiles */}
      <div className="flex flex-col gap-7"> {/* increased from gap-4 to gap-6 */}
        {links.map((l, i) => (
          <LinkTile
            key={i}
            as="a"
            href={l.href}
            label={l.label}
            img={l.img}
            bounce={l.bounce}
            mirror
          />
        ))}
      </div>



    </div>
  );
}