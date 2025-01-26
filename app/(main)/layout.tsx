import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { SparklesPreview } from "@/components/spark";

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
  database: React.ReactNode;
}

export default function MainLayout({
  hero,
  features,
  database,
}: MainLayoutProps) {
  return (
    <main className="container ">
      {hero}
      <SparklesPreview />
      {/* {features} */}
      {database}
    </main>
  );
}
