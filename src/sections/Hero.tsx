"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { ArrowRightIcon } from "@/components/Icons";

export const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const decorationY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [72, -72]
  );

  return (
    <section
      id="top"
      ref={heroRef}
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_115%_100%_at_88%_8%,#dce4ff_0%,#eef2ff_42%,#f6f8ff_74%)] pb-16 pt-12 sm:pb-20 md:pb-12 md:pt-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6272d7]/30 to-transparent"
      />
      <div className="container relative">
        <div className="items-center md:flex">
          <div className="relative z-10 max-w-[560px] md:w-[49%]">
            <div className="tag">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1] shadow-[0_0_0_4px_rgba(99,102,241,0.13)]" />
              New: Pathway 2.0
            </div>
            <h1
              id="hero-title"
              className="mt-6 max-w-[620px] text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-[#111936] sm:text-6xl md:text-[72px]"
            >
              Make meaningful progress every day.
            </h1>
            <p className="mt-6 max-w-[510px] text-lg leading-8 tracking-tight text-[#3e4a78] sm:text-xl">
              Pathway brings plans, focus, and momentum into one calm workspace
              so your team can move important work forward.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a className="btn btn-primary" href="#pricing">
                Explore plans
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a className="btn btn-secondary" href="#features">
                See how it works
              </a>
            </div>
            <div className="mt-9 flex items-center gap-3 text-sm text-[#53608f]">
              <span className="inline-flex -space-x-1.5" aria-hidden="true">
                <span className="h-6 w-6 rounded-full border-2 border-[#f6f8ff] bg-[#f5b9c7]" />
                <span className="h-6 w-6 rounded-full border-2 border-[#f6f8ff] bg-[#a9d5dc]" />
                <span className="h-6 w-6 rounded-full border-2 border-[#f6f8ff] bg-[#cbb8ec]" />
              </span>
              <span>Designed for teams that value focused work.</span>
            </div>
          </div>

          <div
            className="relative mt-12 min-h-[350px] flex-1 sm:min-h-[440px] md:mt-0 md:min-h-[610px]"
            aria-hidden="true"
          >
            <motion.div
              className="relative z-10 mx-auto w-full max-w-[460px] md:absolute md:-left-5 md:top-0 md:h-full md:max-w-none lg:left-0"
              animate={
                shouldReduceMotion
                  ? { y: 0 }
                  : {
                      y: [-12, 12],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 4.5,
                      ease: "easeInOut",
                    }
              }
            >
              <Image
                src={cogImage}
                alt=""
                priority
                sizes="(max-width: 767px) min(100vw - 40px, 460px), 680px"
                className="h-auto w-full select-none md:h-full md:w-auto md:max-w-none"
              />
            </motion.div>
            <motion.div
              className="absolute -left-8 top-0 hidden w-36 md:block lg:-left-24 lg:top-4 lg:w-48"
              style={{ y: decorationY }}
            >
              <Image
                src={cylinderImage}
                alt=""
                sizes="192px"
                className="h-auto w-full select-none"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-[-24px] hidden w-40 rotate-[28deg] lg:block"
              style={{ y: decorationY }}
            >
              <Image
                src={noodleImage}
                alt=""
                sizes="160px"
                className="h-auto w-full select-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
