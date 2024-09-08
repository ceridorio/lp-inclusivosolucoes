import { Header } from "@/components";
import * as Section from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header
        className="bg-hero-bg"
        title="Transformando sonhos em lucros"
        hasButtons
        hasToggle
      />
      <Section.Hero />
    </>
  );
}
