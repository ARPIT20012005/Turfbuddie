"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Tag from "@/components/Tag";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Turfs", href: "/turfs" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/turfbuddie",
  },
  { label: "X", href: "https://x.com/TurfBuddie?s=08" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const apkFilePath = "/app-release.apk";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = apkFilePath;
    link.download = "Turfbuddie.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl ">
          <div className="border border-white/15 rounded-[27px] md:rounded-full backdrop-blur">
            <div className="grid grid-cols-2  lg:grid-cols-3   px-4 md:mr-2 py-2 items-center bg-neutral-950/70 rounded-[27px] md:rounded-full">
              <div>
                <Image
                  src={logoImage}
                  alt="Layers logo"
                  className="h-8 md:h-8 w-auto"
                />
              </div>

              <div className="hidden lg:flex justify-center items-center gap-8">
                <nav className="flex items-center gap-8 font-medium text-white">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="hover:text-lime-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="flex justify-end gap-4">
                  <Tag onClick={handleDownload}>Download</Tag>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left  transition duration-200",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge(
                      " transition duration-200",
                      isOpen && "opacity-0"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left  transition duration-200",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        href={link.href}
                        key={link.label}
                        className=""
                      >
                        {link.label}
                      </a>
                    ))}
                    <div className="flex justify-end gap-4">
                      <Tag onClick={handleDownload}>Download</Tag>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px]"></div>
    </>
  );
}
