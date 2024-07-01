
import {Hero} from "@/components/custom/Hero";
import {About} from "@/components/custom/About";
import {HomeMenu} from "@/components/custom/HomeMenu";
import {Testimonials} from "@/components/custom/Testimonials";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
          <Hero/>
          <HomeMenu/>
          <About/>
          <Testimonials/>
      </main>
  );
}
