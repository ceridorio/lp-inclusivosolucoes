import { Header } from "@/components";
import * as Section from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Section.Hero />
        <Section.Intro />
        <Section.Mobile />
        <Section.Finance />
        <Section.Social />
      </div>
    </>
  );
}
