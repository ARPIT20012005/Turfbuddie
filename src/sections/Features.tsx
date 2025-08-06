"use client";
import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import { fetchTurfs } from "@/helpers/turfdata";
import { Turf } from "@/types";
import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";

const sportsTypes = [
  "The zion - multisports turf",
  "Shree balaji turf",
  "Cc turf ram nagar hill top",
  "Game on sports turf",
  "Run bhumi turf",
  "Sf multisports rooftop turf",
];

export default function Features() {
  const [turfs, setTurfs] = useState<Turf[]>([]);

  useEffect(() => {
    const getTurfs = async () => {
      try {
        const data = await fetchTurfs();
        setTurfs(data);
      } catch (error) {
        console.error("Failed to fetch turfs:", error);
      }
    };
    getTurfs();
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="flex justify-center">
          <Tag className="bg-lime-400 text-black">Turfs</Tag>
        </div>

        <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where sports meets <span className="text-lime-400">excellence</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {turfs.slice(0, 3).map((turf, index) => (
            <FeatureCard
              key={`${turf.id}-${index}`}
              title={turf.name}
              className="md:col-span-2 lg:col-span-1 group"
              description={""}
            >
              <Image
                src="https://i.pinimg.com/736x/d0/d8/c7/d0d8c74090e438ac7c2b4703841b1993.jpg"
                alt={turf.name}
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(turf.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-neutral-400 text-sm ml-2">
                  ({turf.rating})
                </span>
              </div>
              <p className="text-neutral-300 text-sm mb-4 line-clamp-2">
                {turf.info}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lime-400 font-bold text-lg">
                  ₹{turf.price}/hr
                </span>
                <Link href={`/book`}>
                  <button className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-lime-400/20">
                    Book Now
                  </button>
                </Link>
              </div>
            </FeatureCard>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {sportsTypes.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-2 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center
                        hover:scale-105 transition duration-500 group"
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/turfs">
            <motion.button
              className="bg-transparent border-2 border-lime-400 text-lime-400 px-8 py-3 rounded-full font-bold hover:bg-lime-400 hover:text-black transition-all duration-200 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Turfs
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
