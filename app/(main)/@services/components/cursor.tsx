"use client";

import * as React from "react";
import { Instagram } from "dicons";
import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";
import { AppWindow, BrainCircuit, Smartphone } from "lucide-react";
import Image from "next/image";

import {
  HighlighterItem,
  HighlightGroup,
  Particles,
} from "@/components/ui/highligter";

export default function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 360, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 360, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 360, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative mx-auto  ">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border-2  border-[#f97316]/30 bg-background ">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                color={"#f97316"}
                quantity={200}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] rounded-lg md:flex-row">
                  <div
                    ref={scope}
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[450px] "
                  >
                    <Image
                      priority
                      alt="logo"
                      className="object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      height={55}
                      src="/logo/logo.png"
                      width={55}
                    />
                    <div
                      className="absolute bottom-12 left-14 rounded-3xl   text-xs opacity-50 "
                      id="next-js"
                    >
                      <motion.div
                        animate="visible"
                        className="inline-flex  items-center gap-1 px-3 py-2 rounded-full bg-background/[0.03] border "
                        custom={0}
                        initial="hidden"
                        variants={fadeUpVariants}
                      >
                        <BrainCircuit className="h-6 w-6 fill-green-500/60" />
                        <p className="text-sm font-medium text-white/80" />
                        <p className="bg-gradient-to-r font-bold from-green-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
                          {"AI"}
                        </p>
                      </motion.div>
                    </div>
                    <div
                      className="absolute left-2 top-20 rounded-3xl  text-xs opacity-50 "
                      id="react-js"
                    >
                      <motion.div
                        animate="visible"
                        className="inline-flex items-center gap-1 px-3 ml-2 py-2 rounded-full bg-background/[0.03] border border-white/[0.2] mb-2"
                        custom={0}
                        initial="hidden"
                        variants={fadeUpVariants}
                      >
                        <AppWindow className="h-3 w-3 md:h-6 md:w-6 fill-blue-500/60" />
                        <p className="bg-gradient-to-r text-xs md:text-lg font-bold from-blue-600  to-orange-400  text-transparent bg-clip-text">
                          {"Web Tasarım"}
                        </p>
                      </motion.div>
                    </div>
                    <div
                      className="absolute bottom-16 right-1 rounded-3xl  text-xs opacity-50 "
                      id="typescript"
                    >
                      <motion.div
                        animate="visible"
                        className="inline-flex items-center mr-2 gap-1 px-3 ml-2 py-2 rounded-full bg-background/[0.03] border border-white/[0.2] mb-2"
                        custom={0}
                        initial="hidden"
                        variants={fadeUpVariants}
                      >
                        <Smartphone className=" h-3 w-3 md:h-6 md:w-6  fill-orange-500/60" />
                        <p className="bg-gradient-to-r font-bold text-xs md:text-lg from-orange-600  to-green-400  text-transparent bg-clip-text">
                          {"Mobil Uygulama"}
                        </p>
                      </motion.div>
                    </div>
                    <div
                      className="absolute right-12 top-10 rounded-3xl  text-xs opacity-50 "
                      id="javascript"
                    >
                      <motion.div
                        animate="visible"
                        className="inline-flex items-center mr-2 gap-1 px-3 ml-1 py-2 rounded-full bg-background/[0.03] border border-white/[0.2] mb-2"
                        custom={0}
                        initial="hidden"
                        variants={fadeUpVariants}
                      >
                        <Instagram className=" h-3 w-3 md:h-6 md:w-6  fill-red-500/60" />
                        <p className="bg-gradient-to-r font-bold text-xs md:text-lg from-red-600  to-blue-400  text-transparent bg-clip-text">
                          {"Sosyal Medya"}
                        </p>
                      </motion.div>
                    </div>

                    <div className="absolute" id="pointer">
                      <svg
                        className="fill-red-500"
                        height="18.2"
                        stroke="white"
                        strokeWidth="1"
                        viewBox="0 0 12 13"
                        width="16.8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="bg-ali relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                        Ali
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}
