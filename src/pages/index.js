import Aboutus from "@/components/Aboutus";
import FeatureProject from "@/components/FeatureProject";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1.1";


export default function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
        <Hero1 />
        <Aboutus />
        <FeatureProject />
      </div>

    </>
  )
}
