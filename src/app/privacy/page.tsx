import React from "react";
import Head from "next/head";
import Navbar from "@/sections/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Head>
        <title>Privacy Policy – Turf Buddie</title>
        <meta
          name="description"
          content="Turf Buddie Privacy Policy"
        />
      </Head>

      <div className="max-w-4xl mx-auto rounded-lg border border-white/20 overflow-hidden p-8 sm:p-10 bg-neutral-900/50 backdrop-blur-sm">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-lime-400 mb-4">
            🔒 Privacy Policy
          </h1>
          <p className="text-lg text-white/80">
            Your privacy is important to us at Turf Buddie.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>📊</span> Information Collection &amp; Use
            </h2>
            <p className="text-white/90 mb-4">
              The Turf Buddie app (&quot;Application&quot;) collects:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white/90 marker:text-lime-400">
              <li>IP address, visited pages, usage time, and OS details</li>
              <li>Location data for personalized services and analytics</li>
              <li>Anonymized data may be shared with third-party services</li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>🤝</span> Third-Party Services
            </h2>
            <p className="text-white/90 mb-4">
              The Application uses third-party services like:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white/90 marker:text-lime-400">
              <li>Firebase Crashlytics</li>
              <li>Google Maps</li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>🚫</span> Opt-Out & Data Retention
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-white/90 marker:text-lime-400">
              <li>Uninstalling the Application stops data collection</li>
              <li>
                Data is retained while using the app; request deletion via{" "}
                <a
                  href="mailto:turfbuddy11@gmail.com"
                  className="text-lime-400 hover:underline hover:text-lime-300 transition-colors"
                >
                  turfbuddy11@gmail.com
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>🧒</span> Children
            </h2>
            <p className="text-white/90">
              No data is knowingly collected from children under 13. Contact us
              for removal if necessary.
            </p>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>🛡️</span> Security
            </h2>
            <p className="text-white/90">
              We implement safeguards to protect user data.
            </p>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>🔄</span> Changes
            </h2>
            <p className="text-white/90">
              Policy updates may occur; continued use implies acceptance.
            </p>
          </section>

          <section className="bg-black/30 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4 border-b border-lime-400/30 pb-2 flex items-center gap-2">
              <span>📧</span> Contact
            </h2>
            <p className="text-white/90">
              For privacy concerns, email{" "}
              <a
                href="mailto:turfbuddy11@gmail.com"
                className="text-lime-400 hover:underline hover:text-lime-300 transition-colors"
              >
                turfbuddy11@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-lime-400/30 text-sm text-gray-400 text-center">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
