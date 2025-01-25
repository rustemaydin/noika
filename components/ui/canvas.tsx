// this is a client component
import { DIcons } from "dicons";

import DotPattern from "./dot-pattern";
import { TextShimmer } from "./text-shimmer";

import { cn } from "@/lib/utils";

export function Canvas() {
  return (
    <div className="grid grid-cols-1">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
        <div className="animation-delay-8 animate-fadeIn  flex  flex-col items-center justify-center px-4 text-center ">
          <div className="mb-10  ">
            <div className="px-2">
              <div className="border-ali relative mx-auto h-full max-w-7xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
                <h1 className="flex  select-none flex-col  px-3 py-2 text-center text-xl font-semibold leading-none tracking-tight md:flex-col md:text-5xl lg:flex-row ">
                  <DotPattern
                    className={cn(
                      "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
