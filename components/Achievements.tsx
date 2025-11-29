"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { gsap } from "gsap";

function Achievements() {
  const projectCompleteRef = useRef<HTMLHeadingElement>(null);
  const clientsRef = useRef<HTMLHeadingElement>(null);
  const designAwardRef = useRef<HTMLHeadingElement>(null);
  const campaignRef = useRef<HTMLHeadingElement>(null);
  const yearsExcellenceRef = useRef<HTMLHeadingElement>(null);
  const companiesTrackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // تعطيل animations الثقيلة في الموبايل
    const isMobile = window.innerWidth < 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = [
              {
                ref: projectCompleteRef,
                endValue: 35,
                duration: isMobile ? 1 : 2,
              },
              { ref: clientsRef, endValue: 43, duration: isMobile ? 1.2 : 2.5 },
              {
                ref: designAwardRef,
                endValue: 12,
                duration: isMobile ? 1 : 2.2,
              },
              {
                ref: campaignRef,
                endValue: 16,
                duration: isMobile ? 1.3 : 2.7,
              },
              {
                ref: yearsExcellenceRef,
                endValue: 3,
                duration: isMobile ? 0.8 : 1.5,
              },
            ];

            counters.forEach(({ ref, endValue, duration }) => {
              if (ref.current) {
                gsap.fromTo(
                  ref.current,
                  { innerText: 0 },
                  {
                    innerText: endValue,
                    duration: duration,
                    snap: { innerText: 1 },
                    ease: "power2.out",
                  }
                );
              }
            });

            // تبسيط marquee animation في الموبايل
            if (companiesTrackRef.current) {
              const track = companiesTrackRef.current;
              const trackWidth = track.scrollWidth / 2;

              gsap.to(track, {
                x: -trackWidth,
                duration: isMobile ? 30 : 25, // أبطأ قليلاً في الموبايل لتقليل الحمل
                ease: "none",
                repeat: -1,
              });
            }

            observer.unobserve(section);
          }
        });
      },
      { threshold: isMobile ? 0.1 : 0.3 } // threshold أقل في الموبايل
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-auto px-4 md:px-10 mt-14">
      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3 md:gap-5 px-5 py-10">
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/icons/circaleorange.svg"
            alt="Svg"
            width={20}
            height={20}
          />
          <b className="text-2xl md:text-3xl text-gray-300">Our Achievements</b>
        </div>
        <p className="text-4xl hidden md:block">|</p>
        <p className="text-gray-800 text-sm md:text-base">
          metrics & milestones
        </p>
      </div>

      {/* Br */}
      <hr className="border-[#333336] w-full border container m-auto" />

      {/* Second Part */}
      <div className="flex justify-center md:justify-start items-center mt-12 mb-20">
        <div className="flex justify-center items-start flex-col gap-7 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold">
            Behind every statistic pulses a <br /> human story
          </h2>
          <p className="text-2xl text-gray-800">
            Transforming industries, pixel by perfect pixel
          </p>
        </div>
      </div>

      {/* Third Part */}
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10 mb-20">
        <div className="relative inline-block">
          <Image
            src="/imges/bgfour.avif"
            alt="Work"
            width={800}
            height={800}
            className="rounded-3xl object-cover"
          />

          <button
            className="absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      px-10 py-6 text-4xl font-bold text-white
      backdrop-blur-md bg-white/10  rounded-2xl
      transition-all duration-300 cursor-pointer
      hover:bg-orange-500 hover:text-white hover:border-orange-500"
          >
            Watch real
          </button>
        </div>

        <div className="flex justify-center flex-col items-start gap-4 text-center lg:text-left">
          <div className="flex justify-center items-center gap-1 m-auto lg:m-0">
            <Image
              src="/icons/circaleorange.svg"
              alt="Svg"
              width={15}
              height={15}
            />
            <p>Best Integrated Campaign 2025</p>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold ">
            Boreal VR Campaign
          </h3>
          <p className="max-w-2xl text-sm text-gray-300">
            Arpeggio is thrilled to announce our triumph at the Canned <br />
            Lynx, winning the award for our dynamic campaign with the <br />
            renowned VR brand, Boreal.
          </p>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="font-bold self-center lg:self-start"
          >
            View Projects
          </Button>
        </div>

        <div className="flex gap-2 justify-center lg:justify-start">
          <div className="text-3xl text-white hidden lg:block">|</div>
          <div className="flex justify-center items-center flex-col gap-5">
            <div className="flex justify-center items-center flex-col">
              <p className="text-gray-800 text-[16px]">Customer Satisfaction</p>
              <h4 className="text-4xl font-bold text-gray-300">35%</h4>
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="text-gray-800 text-[16px]">Positive Reviews</p>
              <h4 className="text-4xl font-bold text-gray-300">24%</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Four Part - Performance Metrics */}
      <div className="mb-20">
        <h2 className="uppercase text-gray-300 text-center mb-14 text-2xl font-semibold">
          Performance Snapshot
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <div className="flex justify-center items-center flex-col p-6 min-w-[150px]">
            <p className="text-gray-400 text-sm mb-2 text-center">
              Projects Completed
            </p>
            <h4
              ref={projectCompleteRef}
              className="lg:text-6xl text-4xl font-bold text-white"
            >
              0
            </h4>
          </div>

          <div className="hidden lg:block text-3xl text-gray-600">|</div>

          <div className="flex justify-center items-center flex-col p-6 min-w-[150px]">
            <p className="text-gray-400 text-sm mb-2 text-center">
              Satisfied Clients
            </p>
            <h4
              ref={clientsRef}
              className="lg:text-6xl text-4xl font-bold text-white"
            >
              0
            </h4>
          </div>

          <div className="hidden lg:block text-3xl text-gray-600">|</div>

          <div className="flex justify-center items-center flex-col p-6 min-w-[150px]">
            <p className="text-gray-400 text-sm mb-2 text-center">
              Design Awards
            </p>
            <h4
              ref={designAwardRef}
              className="lg:text-6xl text-4xl font-bold text-white"
            >
              0
            </h4>
          </div>

          <div className="hidden lg:block text-3xl text-gray-600">|</div>

          <div className="flex justify-center items-center flex-col p-6 min-w-[150px]">
            <p className="text-gray-400 text-sm mb-2 text-center">
              Successful Campaigns
            </p>
            <h4
              ref={campaignRef}
              className="lg:text-6xl text-4xl font-bold text-white"
            >
              0
            </h4>
          </div>

          <div className="hidden lg:block text-3xl text-gray-600">|</div>

          <div className="flex justify-center items-center flex-col p-6 min-w-[150px]">
            <p className="text-gray-400 text-sm mb-2 text-center">
              Years of Excellence
            </p>
            <h4
              ref={yearsExcellenceRef}
              className="lg:text-6xl text-4xl font-bold text-white"
            >
              0
            </h4>
          </div>
        </div>
      </div>

      {/* Companies Marquee Section */}
      <div className="py-16 mb-20 overflow-hidden">
        <h3 className="text-center text-2xl text-gray-300 mb-12 font-semibold">
          Trusted by Industry Leaders
        </h3>

        <div className="relative overflow-hidden">
          <div ref={companiesTrackRef} className="flex whitespace-nowrap py-4">
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 px-8">
                <div className="flex items-center gap-16">
                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="text-white font-bold text-xl mb-2">
                      Adobe
                    </div>
                    <p className="text-gray-400 text-sm">Design Partner</p>
                  </div>

                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="text-white font-bold text-xl mb-2">
                      Figma
                    </div>
                    <p className="text-gray-400 text-sm">UI/UX Tools</p>
                  </div>

                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="text-white font-bold text-xl mb-2">
                      Shopify
                    </div>
                    <p className="text-gray-400 text-sm">E-commerce</p>
                  </div>

                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="text-white font-bold text-xl mb-2">
                      Webflow
                    </div>
                    <p className="text-gray-400 text-sm">Web Platform</p>
                  </div>

                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="text-white font-bold text-xl mb-2">
                      InVision
                    </div>
                    <p className="text-gray-400 text-sm">Prototyping</p>
                  </div>

                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="text-white font-bold text-xl mb-2">
                      Sketch
                    </div>
                    <p className="text-gray-400 text-sm">Design Tool</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          Collaborating with the best in the industry to deliver exceptional
          results
        </p>
      </div>
    </section>
  );
}

export default Achievements;
