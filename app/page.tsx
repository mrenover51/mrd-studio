import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { Method } from "@/components/home/method";
import {
  Commitment,
  Comparison,
  Concepts,
  CreationProcess,
  Faq,
  FinalCta,
  Philosophy,
  Standards,
} from "@/components/home/homepage-sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Method />
        <Standards />
        <Concepts />
        <Comparison />
        <Commitment />
        <CreationProcess />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
