import React from "react";
import Head from "next/head";
import Navbar from "@/sections/Navbar";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Head>
        <title>Terms and Conditions :– Turf - Buddie</title>
        <meta
          name="description"
          content="Turf Buddie Terms and Conditions"
        />
      </Head>

      <div className="max-w-4xl mx-auto rounded-lg border border-white/20 overflow-hidden p-8 sm:p-10 bg-neutral-900/50 backdrop-blur-sm">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-lime-400 mb-4">
            📜 Terms and Conditions
          </h1>
          <p className="text-lg text-white/80">
            Welcome to Turfbuddie! These Terms govern your use of our platform.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-white/90 mb-8 text-center">
            These Terms and Conditions (&quot;Terms&quot;) govern your access
            and use of our online turf booking platform, available via our
            website and/or mobile application. By using Turfbuddie, you agree to
            comply with and be bound by these Terms. If you do not agree, please
            refrain from using our services.
          </p>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>📖</span> 1. Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>
                <span className="font-medium">Turfbuddie:</span> Refers to the
                online platform that facilitates turf bookings.
              </li>
              <li>
                <span className="font-medium">User:</span> Any individual or
                entity accessing and using the platform.
              </li>
              <li>
                <span className="font-medium">Turf Owner:</span> The entity that
                owns and manages a turf available for booking.
              </li>
              <li>
                <span className="font-medium">Booking:</span> A confirmed
                reservation of a turf through the platform.
              </li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>🖥️</span> 2. Platform Use
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>
                You must be at least 13 years old or have parental consent to
                use the platform.
              </li>
              <li>
                You agree to provide accurate and complete information when
                creating an account.
              </li>
              <li>
                You shall not misuse the platform for unlawful activities.
              </li>
              <li>
                Turfbuddie reserves the right to suspend or terminate accounts
                found violating these Terms.
              </li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>💳</span> 3. Booking and Payment
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>
                Users can browse and book available turfs via the platform.
              </li>
              <li>
                Payments must be made as per the options provided on the
                platform, and in advance to confirm the booking.
              </li>
              <li>
                Turfbuddie is not responsible for any disputes between users and
                turf owners regarding payments or refunds.
              </li>
              <li>
                Cancellations and refunds will be subject to the cancellation
                policy specified at the time of booking.
              </li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>↩️</span> 4. Cancellation &amp; Refund Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>
                <span className="font-medium">Full Refund:</span> If cancelled
                within 1 hour of payment, 100% refund.
              </li>
              <li>
                <span className="font-medium">Partial Refund:</span> After 1
                hour, 20% deduction, 80% refunded.
              </li>
              <li>
                <span className="font-medium">No Refund:</span> Cancellations
                made less than 2 hours before booking time.
              </li>
              <li>
                For turf unavailability, users get full refund or reschedule
                option.
              </li>
              <li>
                Turf owners may cancel due to unforeseen circumstances with user
                notification and refunds.
              </li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>👤</span> 5. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>Users must adhere to turf owner rules and regulations.</li>
              <li>
                Damage to property or equipment during booking is user&apos;s
                responsibility.
              </li>
              <li>Users should arrive on time and vacate as per schedule.</li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>⚠️</span> 6. Liability &amp; Disclaimer
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>
                Turfbuddie is an intermediary platform, not responsible for turf
                maintenance or quality.
              </li>
              <li>
                Users participate in sporting activities at their own risk.
              </li>
              <li>
                Turfbuddie not liable for injuries, damages, or losses at
                facilities.
              </li>
              <li>
                Platform may be unavailable for maintenance without liability.
              </li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>🔏</span> 7. Privacy Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>By using the platform, you agree to our Privacy Policy.</li>
              <li>
                Information shared only as necessary for bookings and payments.
              </li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>🔄</span> 8. Modification of Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>Turfbuddie may update these Terms at any time.</li>
              <li>Continued use after changes implies acceptance.</li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>⚖️</span> 9. Dispute Resolution
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90 marker:text-lime-400">
              <li>Disputes to be resolved amicably.</li>
              <li>
                Unresolved disputes subject to jurisdiction of applicable laws.
              </li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>📞</span> 10. Contact Information
            </h2>
            <div className="pl-6 space-y-2 text-white/90">
              <p>For any queries or concerns, contact us at:</p>
              <ul className="list-disc pl-6 marker:text-lime-400">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:turfbuddy11@gmail.com"
                    className="text-lime-400 hover:underline hover:text-lime-300 transition-colors"
                  >
                    turfbuddy11@gmail.com
                  </a>
                </li>
                <li>Phone: +91 80103 55203</li>
              </ul>
              <p className="pt-4 italic">
                By using Turfbuddie, you acknowledge that you have read,
                understood, and agreed to these Terms and Conditions.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-lime-400/30 text-sm text-gray-400 text-center">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
