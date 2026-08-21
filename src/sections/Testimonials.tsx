import type { CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

type Testimonial = {
  quote: string;
  image: StaticImageData;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Pathway gives our planning process just enough structure without turning every conversation into a status meeting.",
    image: avatar1,
    name: "Jamie Rivera",
    role: "Product designer",
  },
  {
    quote:
      "Our team has more space to do deep work because everyone can see what matters next at a glance.",
    image: avatar2,
    name: "Josh Smith",
    role: "Operations lead",
  },
  {
    quote:
      "I finally have a project view that feels as clear and intentional as the work we're trying to make.",
    image: avatar3,
    name: "Morgan Lee",
    role: "Creative director",
  },
  {
    quote:
      "The rollout was effortless. It clicked for the team on day one, and our weekly planning is much lighter now.",
    image: avatar4,
    name: "Casey Jordan",
    role: "Program manager",
  },
  {
    quote:
      "Pathway keeps all the moving pieces visible without asking people to spend their day updating a complicated system.",
    image: avatar5,
    name: "Taylor Kim",
    role: "Events strategist",
  },
  {
    quote:
      "The thoughtful details make a real difference: less hunting for context, more time actually moving work forward.",
    image: avatar6,
    name: "Riley Smith",
    role: "Engineering manager",
  },
  {
    quote:
      "We've replaced scattered check-ins with a shared rhythm that feels human, calm, and genuinely useful.",
    image: avatar7,
    name: "Jordan Patel",
    role: "Founder, Kindred Studio",
  },
  {
    quote:
      "I can assign work, see progress, and give teammates clarity without adding another noisy channel to their day.",
    image: avatar8,
    name: "Sam Dawson",
    role: "Client services lead",
  },
  {
    quote:
      "It balances a friendly interface with the depth we need as our projects and team keep growing.",
    image: avatar9,
    name: "Casey Harper",
    role: "Head of marketing",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCard = ({
  testimonial,
  isDuplicate = false,
}: {
  testimonial: Testimonial;
  isDuplicate?: boolean;
}) => (
  <article className="testimonial-card" aria-hidden={isDuplicate || undefined}>
    <blockquote>
      <p>“{testimonial.quote}”</p>
    </blockquote>
    <div className="mt-5 flex items-center gap-3">
      <Image
        src={testimonial.image}
        alt={isDuplicate ? "" : testimonial.name}
        width={42}
        height={42}
        sizes="42px"
        className="h-[42px] w-[42px] rounded-full object-cover"
      />
      <div>
        <p className="font-bold tracking-tight text-[#202951]">{testimonial.name}</p>
        <p className="text-xs text-[#6c769d]">{testimonial.role}</p>
      </div>
    </div>
  </article>
);

const TestimonialsColumn = ({
  testimonials: columnTestimonials,
  className = "",
  duration,
  direction,
}: {
  testimonials: Testimonial[];
  className?: string;
  duration: number;
  direction?: "up" | "down";
}) => {
  const style = {
    "--testimonial-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <div className={`w-full max-w-[360px] ${className}`}>
      <div
        className="testimonial-track flex flex-col"
        style={style}
        data-direction={direction === "down" ? "down" : undefined}
      >
        <div className="flex flex-col gap-5 pb-5">
          {columnTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex flex-col gap-5 pb-5" aria-hidden="true">
          {columnTestimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.name}-duplicate`}
              testimonial={testimonial}
              isDuplicate
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-white pb-20 pt-6 sm:pb-28"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Loved by focused teams</div>
          </div>
          <h2 id="testimonials-title" className="section-title mt-5">
            Work feels better when the system does too.
          </h2>
          <p className="section-description mt-5">
            From the first plan to the final handoff, teams use Pathway to keep
            the work clear, connected, and moving.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-h-[660px] max-w-[1120px] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_9%,black_91%,transparent)] sm:mt-14 sm:gap-6">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={23}
            direction="down"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
};
