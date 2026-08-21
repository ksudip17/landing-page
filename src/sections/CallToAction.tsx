import Image from "next/image";

import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import { ArrowRightIcon } from "@/components/Icons";

export const CallToAction = () => {
  return (
    <section
      id="get-started"
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_85%_100%_at_50%_100%,#cbd7ff_0%,#e8edff_43%,#ffffff_78%)] py-20 sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none">
        <Image
          src={starImage}
          alt=""
          sizes="360px"
          className="absolute -left-[210px] top-12 hidden w-[310px] select-none md:block lg:-left-[120px] lg:top-4 lg:w-[390px]"
        />
        <Image
          src={springImage}
          alt=""
          sizes="360px"
          className="absolute -right-[230px] top-4 hidden w-[330px] select-none md:block lg:-right-[125px] lg:-top-2 lg:w-[390px]"
        />
      </div>
      <div className="container relative">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">A more focused week starts here</div>
          </div>
          <h2 id="cta-title" className="section-title mt-5">
            Make room for work that moves you forward.
          </h2>
          <p className="section-description mt-5">
            Start with the plan that fits today, then shape Pathway around the
            way your team does its best work.
          </p>
        </div>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a className="btn btn-primary" href="#pricing">
            Compare plans
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a className="btn btn-secondary" href="#features">
            Take the product tour
          </a>
        </div>
        <p className="mt-5 text-center text-sm text-[#66719b]">
          Start free. Upgrade only when your team needs more room to grow.
        </p>
      </div>
    </section>
  );
};
