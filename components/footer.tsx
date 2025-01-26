import React from "react";

import { Integrations } from "./ui/integrations";

const Footer = () => {
  return (
    <div className="relative  items-center justify-center z-10 mb-16 h-[400px] w-full overflow-hidden rounded-lg border-2 bg-background border-[#f97316]/30">
      <Integrations />
    </div>
  );
};

export default Footer;
