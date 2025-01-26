import React from "react";
import { motion } from "framer-motion";
import { AppWindow, BrainCircuit, Instagram, Smartphone } from "lucide-react";

import Marquee from "@/components/ui/marquee";

const MarqueeComp = () => {
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
    <div>
      <Marquee pauseOnHover className="[--duration:20s] ">
        <motion.div
          animate="visible"
          className="inline-flex items-center gap-1 px-3 ml-1 py-2 rounded-full bg-background/[0.03] border border-white/[0.2] mb-2"
          custom={0}
          initial="hidden"
          variants={fadeUpVariants}
        >
          <AppWindow className="h-3 w-3 md:h-6 md:w-6 fill-blue-500/60" />
          <p className="bg-gradient-to-r text-xs md:text-lg font-bold from-blue-600  to-orange-400  text-transparent bg-clip-text">
            {"Web Tasarım"}
          </p>
        </motion.div>
        <motion.div
          animate="visible"
          className="inline-flex items-center mr-2 gap-1 px-3 ml-1 py-2 rounded-full bg-background/[0.03] border border-white/[0.2] mb-2"
          custom={0}
          initial="hidden"
          variants={fadeUpVariants}
        >
          <Smartphone className=" h-3 w-3 md:h-6 md:w-6  fill-orange-500/60" />
          <p className="bg-gradient-to-r font-bold text-xs md:text-lg from-orange-600  to-green-400  text-transparent bg-clip-text">
            {"Mobil Uygulama"}
          </p>
        </motion.div>

        <motion.div
          animate="visible"
          className="inline-flex ml-1  items-center gap-1 px-3 py-2 rounded-full bg-background/[0.03] border border-white/[0.2] mb-2"
          custom={0}
          initial="hidden"
          variants={fadeUpVariants}
        >
          <BrainCircuit className="h-6 w-6 fill-green-500/60" />
          <p className="text-sm font-medium text-white/80" />
          <p className="bg-gradient-to-r font-bold from-green-600 via-green-500 to-red-400  text-transparent bg-clip-text">
            {"AI"}
          </p>
        </motion.div>
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
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0  w-1/3 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
    </div>
  );
};

export default MarqueeComp;
