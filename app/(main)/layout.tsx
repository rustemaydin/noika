import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { SparklesPreview } from "@/components/spark";
import Footer from "@/components/footer";

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
  services: React.ReactNode;
}

export default function MainLayout({
  hero,
  features,
  services,
  database,
}: MainLayoutProps) {
  return (
    <main className="container ">
      {hero}
      <SparklesPreview />
      {/* {features} */}
      {database}
      {services}
      <Footer />
    </main>
  );
}
