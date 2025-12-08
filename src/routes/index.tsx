import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import UseCases from "../components/home/use-cases";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/home/testimonials";
import InteractionModel from "@/components/home/interaction-model";
import CoreValue from "@/components/home/core_value";
import BuiltForScale from "@/components/home/built-for-scale";
import GlobalCTA from "@/components/home/global-cta";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <InteractionModel />
        <CoreValue />
        <BuiltForScale />
        <UseCases />
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
