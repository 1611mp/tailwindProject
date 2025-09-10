import Blog from "@/components/Blog";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import FishSlider from "@/components/Carousel";
import SideVideos from "@/components/SideVideos";
import FeatureBadges from "@/components/FeatureBadges";


export default function Home() {
  return (
    <main className="w-full bg-white">
      <Hero />
       <section className="w-full bg-gradient-to-b from-blue-200 to-blue-900 py-10">
  <div className="max-w-7xl mx-auto px-4">
    {/* SideVideos with FishSlider inside */}
    <SideVideos>
      <FishSlider />
    </SideVideos>
  </div>
</section>

       <section className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <Blog />
    </div>
  </section>



      <FeatureBadges />

      <section>
        <Form />
      </section>
    </main>
  );
}
