import Blog from "@/components/Blog";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import FishSlider from "@/components/Carousel";
import SideVideos from "@/components/SideVideos";

export default function Home() {
  return (

    <main className="w-full bg-white">
      <><Hero /><Blog />
       <section className="flex justify-center items-center min-h-[600px] bg-white">
        <SideVideos>
        <FishSlider/>
        </SideVideos>
        </section>
        <Form/>
        </>

    </main>




    );
}
