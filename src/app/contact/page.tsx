import React from "react";
import { Metadata } from "next";
import "dotenv/config";

import ContactForm from "@/app/components/contact/content/contactForm";
import WorldMapWrapper from "@/app/components/contact/content/worldMapWrapper";

export const metadata: Metadata = {
  title: "Contact - E-P.dev",
  description:
    "Get in touch with me through my contact page. I'm always open to discussing new projects, collaborations, or opportunities.",
  openGraph: {
    title: "Contact - E-P.dev",
    description:
      "Get in touch with me through my contact page. I'm always open to discussing new projects, collaborations, or opportunities.",
    url: "https://www.e-p.dev",
    siteName: "E-P.dev",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "E-P.dev - Contact Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-170px)] py-16">
        <div className="absolute inset-0 z-[-1] justify-center items-center flex overflow-clip">
          <WorldMapWrapper />
        </div>

        <div className="flex flex-col items-center justify-center sm:w-fit w-[90%] h-fit">
          <div className="relative">
            <svg className="w-full max-w-xs mx-auto" viewBox="0 0 300 80">
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                className="text-4xl font-light"
                fill="var(--color-base-content)"
                stroke="var(--color-base-100)"
                strokeWidth="3"
                paintOrder="stroke fill"
              >
                Contact
              </text>
            </svg>
          </div>
          <hr className="border-t-1 sm:max-w-none max-w-md w-[103%] self-center" />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
