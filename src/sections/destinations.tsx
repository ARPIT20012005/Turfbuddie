"use client";
import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchTurfs } from "@/helpers/turfdata";
import { Turf } from "@/types";
import { motion } from "framer-motion";

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Features() {
  const [turfs, setTurfs] = useState<Turf[]>([]);

  useEffect(() => {
    const getTurfs = async () => {
      const data = await fetchTurfs();
      setTurfs(data);
    };
    getTurfs();
  }, []);

  const sportsTypes = [
    "Football",
    "Cricket",
    "Badminton",
    "Basketball",
    "Tennis",
    "Volleyball",
    "Multi-sport",
  ];

  return (
    <section className="py-16 md:py-24 bg-black px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <Tag className="bg-lime-400 text-black">Turfs</Tag>
        </div>

        <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where sports meets <span className="text-lime-400">excellence</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {turfs.slice(0, 3).map((turf, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/10"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={
                    turf.imageUrl && isValidUrl(turf.imageUrl)
                      ? turf.imageUrl
                      : "/default-turf.jpg"
                  }
                  alt={turf.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {turf.name}
                </h3>
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
                  <Link href={`/turfs`}>
                    <button className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-lime-400/20">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {sportsTypes.map((sport) => (
            <motion.div
              key={sport}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="bg-neutral-900 border border-neutral-800 inline-flex px-4 py-2 rounded-full gap-2 items-center
                        hover:bg-lime-400 hover:text-black transition-all duration-200 group cursor-pointer"
              >
                <span className="bg-lime-400 text-black size-6 rounded-full inline-flex items-center justify-center text-sm group-hover:bg-black group-hover:text-lime-400 transition-all duration-200">
                  {sport.charAt(0)}
                </span>
                <span className="font-medium text-sm md:text-base">
                  {sport}
                </span>
              </div>
            </motion.div>
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
