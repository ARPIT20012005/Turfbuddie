"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { fetchTurfs } from "@/helpers/turfdata"; // 🟢 using your existing helper
import { Turf } from "@/types";

const BookingPage = () => {
  const searchParams = useSearchParams();
  const turfId = searchParams.get("id");
  const turfNameParam = searchParams.get("name");

  const [turf, setTurf] = useState<Turf | null>(null);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date();
    const dateList = Array.from({ length: 7 }, (_, i) => {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      return futureDate.toDateString();
    });
    setDates(dateList);
  }, []);

  useEffect(() => {
    const getTurf = async () => {
      try {
        const allTurfs = await fetchTurfs();
        let foundTurf: Turf | undefined;

    if (turfId) {
        foundTurf = allTurfs.find((t) => t?.id?.toString() === turfId);
    } else if (turfNameParam) {
    foundTurf = allTurfs.find(
        (t) => t?.name?.toLowerCase() === turfNameParam.toLowerCase()
    );
    }


        if (foundTurf) {
          setTurf(foundTurf);
        }
      } catch (error) {
        console.error("Error fetching turf:", error);
      }
    };

    getTurf();
  }, [turfId, turfNameParam]);

  const timeSlots = [
    "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM",
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
    "8:00 PM", "9:00 PM", "10:00 PM",
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neonGreen mb-4 text-center">
          Book Turf
        </h1>
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-md border border-zinc-700">
          <h2 className="text-2xl font-semibold text-neonGreen mb-1">
            {turf?.name || "Loading..."}
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            {turf?.address || "Fetching address..."}
          </p>

          {/* Date Picker */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Select Date</h3>
            <div className="flex flex-wrap gap-3">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-2 rounded-lg border text-sm md:text-base font-semibold transition-all
                    ${
                      selectedDate === date
                        ? "bg-neonGreen text-black"
                        : "bg-zinc-800 text-white hover:bg-neonGreen hover:text-black"
                    }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Time Picker */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-white">Select Time Slot</h3>
            <div className="flex flex-wrap gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-lg border text-sm md:text-base font-semibold transition-all
                    ${
                      selectedTime === time
                        ? "bg-neonGreen text-black"
                        : "bg-zinc-800 text-white hover:bg-neonGreen hover:text-black"
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Summary */}
          {selectedDate && selectedTime && (
            <div className="mt-8 text-center">
              <p className="text-lg">
                ✅ You selected <span className="text-neonGreen">{selectedDate}</span> at{" "}
                <span className="text-neonGreen">{selectedTime}</span>
              </p>
              <button className="mt-4 px-6 py-3 bg-neonGreen text-black font-bold rounded-xl hover:opacity-90 transition-all">
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom Tailwind Styles */}
      <style jsx>{`
        .text-neonGreen {
          color: #39ff14;
        }
        .bg-neonGreen {
          background-color: #39ff14;
        }
        .border-neonGreen {
          border-color: #39ff14;
        }
      `}</style>
    </div>
  );
};

export default BookingPage;
