"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

const highlights = [
  {
    title: "A clear next step",
    description: "Turn priorities into focused, doable work without the noise.",
  },
  {
    title: "One shared rhythm",
    description: "Give every project a simple home your whole team understands.",
  },
  {
    title: "Progress you can feel",
    description: "See momentum build with thoughtful views and lightweight rituals.",
  },
];

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const decorationY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [74, -74]
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      aria-labelledby="features-title"
      className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#edf1ff_100%)] py-20 sm:py-28"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">A calmer operating system</div>
          </div>
          <h2 id="features-title" className="section-title mt-5">
            The full picture, without the busywork.
          </h2>
          <p className="section-description mt-5">
            Bring plans, project context, and the work that matters into a
            focused space that makes moving forward feel natural.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-[1120px] sm:mt-16">
          <div className="relative overflow-hidden rounded-[22px] border border-[#18224d]/10 bg-[#e6ebff] p-1 shadow-[0_35px_70px_-35px_rgba(38,52,121,0.55)] sm:rounded-[28px] sm:p-2">
            <Image
              src={productImage}
              alt="Pathway workspace showing project progress, tasks, and a team timeline"
              sizes="(max-width: 767px) calc(100vw - 40px), 1120px"
              className="h-auto w-full rounded-[18px] sm:rounded-[22px]"
            />
          </div>
          <motion.div
            aria-hidden="true"
            className="absolute -right-24 -top-20 hidden w-44 md:block lg:-right-32 lg:w-56"
            style={{ y: decorationY }}
          >
            <Image
              src={pyramidImage}
              alt=""
              sizes="224px"
              className="h-auto w-full select-none"
            />
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-12 -left-20 hidden w-40 md:block lg:-left-28 lg:w-52"
            style={{ y: decorationY }}
          >
            <Image
              src={tubeImage}
              alt=""
              sizes="208px"
              className="h-auto w-full select-none"
            />
          </motion.div>
        </div>

        <dl className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3 sm:gap-5">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-2xl border border-[#18224d]/10 bg-white/70 p-5 shadow-[0_12px_28px_-25px_rgba(38,52,121,0.5)] backdrop-blur-sm"
            >
              <dt className="text-base font-bold tracking-tight text-[#172047]">
                {highlight.title}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[#59658f]">
                {highlight.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
