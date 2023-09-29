import FutureProjects from "@/components/FutureProjects";
import { Hero } from "@/components/Hero";
import LikeSection from "@/components/LikeSection";
import SubscribeSection from "@/components/SubscribeSection";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkList />
      <LikeSection />
      <FutureProjects />
      <SubscribeSection />
    </div>
  );
}
