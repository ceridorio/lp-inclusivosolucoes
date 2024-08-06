import * as Section from "@/components/Sections";

export default function Home() {
  return (
    <div className="container">
      <Section.Hero />
      <Section.Intro />
      <Section.Mobile />
      <Section.Finance />
    </div>
  );
}
