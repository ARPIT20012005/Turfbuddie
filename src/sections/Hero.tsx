"use client";
import Button from "@/components/Button";
import coursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${coursorYouImage.src}), auto` }}
    >
      <div className="container relative">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Welcome to Turf Buddie
        </h1>
        <p className="text-center max-w-2xl text-white/50 text-xl mt-8 mx-auto">
          Turf Buddie offers easy turf booking with live availability.
        </p>
      </div>
    </section>
  );
}
