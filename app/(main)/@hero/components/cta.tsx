"use client";

import { motion } from "framer-motion";
import { DIcons } from "dicons";
import Image from "next/image";
import { useTheme } from "next-themes";

import MarqueeComp from "./marquee-badges";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Glow } from "@/components/ui/glow";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  src = "/logo/logo.png",
}: {
  className?: string;
  src?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      className={cn("absolute", className)}
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        className={"relative"}
        style={{
          width,
          height,
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className={className}>
          <Image alt={"android"} height={height} src={src} width={width} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric() {
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
  const { theme } = useTheme();
  const ollama =
    theme === "light" ? "/icons/ollama.svg" : "/icons/ollama_dark.svg";

  const apple =
    theme === "light" ? "/icons/apple.svg" : "/icons/apple_dark.svg";

  return (
    <div className="relative min-h-screen w-full  flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          className="left-[50%] z-40 object-contain hidden md:block  md:left-[5%] top-[10%] md:top-[10%]"
          delay={0.3}
          height={20}
          rotate={12}
          src="/icons/nextjs.svg"
          width={50}
        />

        <ElegantShape
          className="right-[-5%] md:right-[0%] top-[70%]  md:top-[70%]"
          delay={0.5}
          height={120}
          rotate={-15}
          src={ollama}
          width={150}
        />

        <ElegantShape
          className="left-[5%] z-40 md:left-[50%] bottom-[25%] md:bottom-[25%]"
          delay={0.4}
          height={80}
          rotate={-8}
          src="/icons/android.svg"
          width={100}
        />
        <ElegantShape
          className="left-[5%] z-40 hidden md:block md:right-[80%] bottom-[25%] md:bottom-[30%]"
          delay={0.4}
          height={80}
          rotate={-8}
          src="/icons/flutter.svg"
          width={75}
        />

        <ElegantShape
          className="right-[15%] h-auto w-24 md:right-[30%] top-[10%] md:top-[10%]"
          delay={0.6}
          height={90}
          rotate={20}
          src="/icons/react.svg"
          width={130}
        />

        <ElegantShape
          className="left-[50%] z-40 object-contain hidden md:block  md:left-[5%] top-[10%] md:top-[40%]"
          delay={0.6}
          height={60}
          rotate={20}
          src="/icons/mongodb.svg"
          width={40}
        />
        <ElegantShape
          className="left-[20%] h-24 w-12  md:left-[25%] top-[5%] md:top-[10%]"
          delay={0.7}
          height={40}
          rotate={-25}
          src={apple}
          width={75}
        />
      </div>

      <div className="relative z-10 items-center justify-center container mx-auto px-4 md:px-6">
        <div className="max-w-6xl justify-center items-center my-auto md:h-[650px] mx-auto text-center">
          <motion.div
            animate="visible"
            custom={2}
            initial="hidden"
            variants={fadeUpVariants}
          >
            <div className="border-ali relative mx-auto h-full   border p-4 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-36">
              <MarqueeComp />

              <h1 className="flex z-20  select-none flex-col  px-3 py-6  text-center text-4xl font-semibold leading-none tracking-tight md:flex-col md:text-5xl lg:flex-row ">
                <DotPattern
                  className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
                  )}
                  cr={1}
                  cx={1}
                  cy={1}
                  height={20}
                  width={20}
                />
                <DIcons.Plus
                  className="text-ali absolute -left-5 -top-5 h-10 w-10"
                  strokeWidth={4}
                />
                <DIcons.Plus
                  className="text-ali absolute -bottom-5 -left-5 h-10 w-10"
                  strokeWidth={4}
                />
                <DIcons.Plus
                  className="text-ali absolute -right-5 -top-5 h-10 w-10"
                  strokeWidth={4}
                />
                <DIcons.Plus
                  className="text-ali absolute -bottom-5 -right-5 h-10 w-10"
                  strokeWidth={4}
                />
                Modern Teknolojilerle Yapay Zeka Destekli, Hızlı, Etkili ve
                Ölçeklenebilir Web ve Mobil Çözümler
                <Glow
                  className="animate-appear-zoom z-40 delay-300"
                  variant="bottom"
                />
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <TextShimmer className="font-mono text-sm" duration={3}>
                  Generating code...
                </TextShimmer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { HeroGeometric };
