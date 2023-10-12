import { Header } from "./components/Header";
import { WhyUs } from "./components/WhyUs";
import { Posluga } from "./components/Posluga";
import { LeadMagnet } from "./components/LeadMagnet";
import { ContactUs } from "./components/ContactUs";
import { PortfolioItem } from "./components/Portfolio";
import { FAQ } from "./components/Faq";
import { Social } from "./components/Social";
import { Roulette } from "./components/Roulete";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <div className="relative">
      <div className="background-image">
        <Header />
        <WhyUs />
      </div>
      <Posluga />
      <LeadMagnet />
      <ContactUs />
      <PortfolioItem />
      <FAQ />
      <Social />

      <Testimonials />
      <Roulette />
    </div>
  );
}
