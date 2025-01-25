import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};
interface MainLayoutProps {
  children: React.ReactNode;
  hero: React.ReactNode;
  features: React.ReactNode;
}

export default function MainLayout({ hero, features }: MainLayoutProps) {
  return (
    <main className="container ">
      {hero}
      {/* {features} */}
    </main>
  );
}
