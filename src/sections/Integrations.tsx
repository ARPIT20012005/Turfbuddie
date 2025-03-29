import Tag from "@/components/Tag";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "Rahul Kumar",
    description:
      "Turf Buddie made booking our weekly football matches so easy. The interface is clean and payments are seamless!",
  },
  {
    name: "Mukesh Agarwal",
    description:
      "As a turf owner, Turf Buddie has increased my bookings by 40%. The management dashboard is incredibly helpful.",
  },
  {
    name: "Soniya Sharma",
    description:
      "I love how quickly I can find and book turfs near me. The real-time availability feature saves so much time!",
  },
  {
    name: "Amit Verma",
    description:
      "The customer support team is fantastic. They helped me resolve a booking issue within minutes!",
  },
  {
    name: "Shubhum sharma",
    description:
      "Turf Buddie made booking our weekly football matches so easy. The interface is clean and payments are seamless!",
  },
  {
    name: "Ravi Singh",
    description:
      "As a turf owner, Turf Buddie has increased my bookings by 40%. The management dashboard is incredibly helpful.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Testimonials</Tag>

            <h2 className="text-6xl font-medium mt-6">
              Featured <span className="text-lime-400 px-2">Turfs</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Discover top-rated sports facilities in your area with Turf
              Buddie.
            </p>
          </div>

          <div>
            <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4 overflow-hidden mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
