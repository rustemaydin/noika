"use client";

import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallel-floating";

const exampleImages = [
  {
    url: "/icons/tailwindcss.svg",
    title: "nextjs",
  },
  {
    url: "/icons/mongodb.svg",
    title: "mongdb",
  },
  {
    url: "/icons/react.svg",
    title: "react",
  },
  {
    url: "/icons/supabase.svg",
    title: "Supabase",
  },
  {
    url: "/icons/nextjs.svg",
    title: "tailwind",
  },
  {
    url: "/icons/postgresql.svg",
    title: "postgres",
  },
];

export default function HeroPage() {
  return (
    <section className="w-full h-[600px] lg:h-screen pb-24 overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[25%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-contain hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-contain hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[64%] left-[6%] md:top-[60%] md:left-[78%]"
        >
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-24 h-24  md:w-40 md:h-40  object-contain -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-contain hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[50%] md:top-[44%] md:left-[4%]"
        >
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-32 h-32 md:w-24 md:h-24  object-contain hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[24%] left-[83%] md:top-[24%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[5].url}
            alt={exampleImages[5].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-10 pointer-events-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-calendas tracking-tight space-y-1 md:space-y-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Haydi🔥</span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <TextRotate
                texts={[
                  "kurumsal",
                  "e-ticaret",
                  "blog ♥",
                  "haber",
                  "sosyal-medya",
                  "eğitim",
                  "Portföy",
                  "SaaS🚀",
                  "ai ✨",
                ]}
                mainClassName="overflow-hidden pr-3 text-[#f97316] py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
              <motion.span
                layout
                className="flex whitespace-pre"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                web
              </motion.span>
            </motion.span>
          </LayoutGroup>
          <span>sitesi yapalım </span>
        </motion.h1>
        <motion.p
          className="text-md sm:text-lg md:text-xl lg:text-2xl text-center font-overusedGrotesk pt-4 sm:pt-8 md:pt-10 lg:pt-12"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Özgün, hızlı ve ölçeklenebilir web siteleri tasarlıyor ve
          geliştiriyorum. Kurumsal, e-ticaret, blog, portföy ve dinamik web
          projeleri için profesyonel çözümler sunuyorum. Haydi başlayalım! 🚀
        </motion.p>
      </div>
    </section>
  );
}
