"use client";

import { useState } from "react";

import { CheckIcon } from "@/components/Icons";

type BillingCycle = "monthly" | "yearly";

type PricingTier = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  buttonText: string;
  popular?: boolean;
  inverse?: boolean;
  features: string[];
};

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "For individuals getting their rhythm in place.",
    buttonText: "Choose Free",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2 GB workspace storage",
      "Essential integrations",
      "Community support",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 9,
    yearlyPrice: 7,
    description: "For growing teams that want more momentum.",
    buttonText: "Choose Pro",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50 GB workspace storage",
      "Advanced integrations",
      "Priority support",
      "Exports and custom views",
    ],
  },
  {
    name: "Business",
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: "For teams operating at a larger scale.",
    buttonText: "Choose Business",
    features: [
      "Unlimited project members",
      "200 GB workspace storage",
      "Dedicated success partner",
      "Advanced analytics",
      "API access and SSO",
      "Enterprise-grade controls",
    ],
  },
];

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const isYearly = billingCycle === "yearly";

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Simple, transparent pricing</div>
          </div>
          <h2 id="pricing-title" className="section-title mt-5">
            Start small. Scale when it matters.
          </h2>
          <p className="section-description mt-5">
            Begin for free, then unlock more space, support, and control as
            your team grows.
          </p>
        </div>

        <div
          className="mx-auto mt-8 inline-flex w-full items-center justify-center gap-1 rounded-xl border border-[#18224d]/10 bg-[#f1f3ff] p-1 sm:mt-10"
          role="group"
          aria-label="Billing frequency"
        >
          <button
            type="button"
            className={`min-h-10 rounded-lg px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] ${
              !isYearly
                ? "bg-white text-[#111936] shadow-sm"
                : "text-[#58638c] hover:text-[#172047]"
            }`}
            aria-pressed={!isYearly}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`min-h-10 rounded-lg px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] ${
              isYearly
                ? "bg-white text-[#111936] shadow-sm"
                : "text-[#58638c] hover:text-[#172047]"
            }`}
            aria-pressed={isYearly}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
          <span className="mr-1 rounded-md bg-[#dcfce7] px-2 py-1 text-[11px] font-bold text-[#17733b]">
            Save 20%
          </span>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {pricingTiers.map((tier) => {
            const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
            const isInverse = tier.inverse === true;

            return (
              <article
                key={tier.name}
                className={`pricing-card mx-auto ${
                  isInverse
                    ? "border-[#111936] bg-[#111936] text-white shadow-[0_24px_55px_-28px_rgba(17,25,54,0.9)] lg:-translate-y-3"
                    : "text-[#172047]"
                }`}
              >
                {tier.popular && (
                  <div className="mb-5 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-[#dcf2ff]">
                    Most popular
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`text-xl font-bold tracking-tight ${
                        isInverse ? "text-white" : "text-[#172047]"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`mt-2 min-h-10 text-sm leading-5 ${
                        isInverse ? "text-white/65" : "text-[#657097]"
                      }`}
                    >
                      {tier.description}
                    </p>
                  </div>
                </div>

                <div className="mt-7" aria-live="polite">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold leading-none tracking-[-0.06em]">
                      ${price}
                    </span>
                    <span
                      className={`mb-1 text-sm font-semibold ${
                        isInverse ? "text-white/60" : "text-[#657097]"
                      }`}
                    >
                      / month
                    </span>
                  </div>
                  <p
                    className={`mt-2 min-h-5 text-xs ${
                      isInverse ? "text-white/55" : "text-[#7480a8]"
                    }`}
                  >
                    {isYearly && price > 0
                      ? "Billed annually"
                      : price === 0
                        ? "Free to use, no card required"
                        : "Billed monthly"}
                  </p>
                </div>

                <a
                  href="#get-started"
                  className={`btn mt-7 w-full ${
                    isInverse ? "bg-white text-[#111936] hover:bg-[#eef1ff]" : "btn-primary"
                  }`}
                  aria-label={`${tier.buttonText} plan`}
                >
                  {tier.buttonText}
                </a>

                <ul
                  className={`mt-8 flex flex-col gap-4 border-t pt-7 ${
                    isInverse ? "border-white/10" : "border-[#172047]/10"
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-5">
                      <CheckIcon
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          isInverse ? "text-[#aeb9ff]" : "text-[#5965d0]"
                        }`}
                      />
                      <span className={isInverse ? "text-white/80" : "text-[#3f4a72]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-[#6c769d]">
          Every plan includes a 14-day trial of Pro features. Change or cancel
          whenever you need.
        </p>
      </div>
    </section>
  );
};
