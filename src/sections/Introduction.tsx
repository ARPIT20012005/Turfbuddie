"use client";
import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Turf Buddie enables users to find and book sports turfs easily with real-time availability and online payments`;
const words = text.split(" ");
// we are spliting each words
// and we would render each word as a span tag
export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  // meaning of 'start end', 'end end' is until when the start of that div reaches the end of the page,
  // and until when the end of that div reaches the end of the page

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  //meaning as we scroll from 0-1 on the scrollProgress, we also want to scroll from 0 to the words.length,
  // telling us which word is highlighted

  useEffect(() => {
    wordIndex.on("change", (latest) => setCurrentWord(latest));
  }, [wordIndex]);
  // useMotionValueEvent(scrollYProgress, 'change', (latest)=> console.log('Latest', latest))

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-24 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing TurfBuddie</Tag>
          </div>

          <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-10">
            <span className="text-white/50 block">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    wordIndex < currentWord && "text-white"
                  )}
                >{`${word} `}</span>
                // we rendered each word as a span tag
              ))}
            </span>
            <span className="text-lime-400">
              {" "}
              That&apos;s why we built Turf Buddie.
            </span>
          </div>
        </div>

        <div
          className="h-[150vh]"
          ref={scrollTarget}
        ></div>
      </div>
    </section>
  );
}
