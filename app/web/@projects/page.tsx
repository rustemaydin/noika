import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  {
    step: "Step 1",
    title: "Noika.dev",
    content:
      "Modern web geliştirme teknikleriyle Nextjs kullanılarak geliştirildi.",
    image: "/icons/react.svg",
  },
  //   {
  //     step: "Step 2",
  //     title: "Deep Dive",
  //     content:
  //       "Dive deep into blockchain fundamentals and smart contract development.",
  //     image: "/icons/react.svg",
  //   },
  //   {
  //     step: "Step 3",
  //     title: "Build Projects",
  //     content:
  //       "Graduate with hands-on Web3 experience through building decentralized applications.",
  //     image: "/icons/react.svg",
  //   },
];

export default function PrjectsPage() {
  return (
    <FeatureSteps
      features={features}
      title="Bazı  Projelerimiz"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  );
}
