import { Hero } from "@/components/Hero";
import LikeSection from "@/components/LikeSection";
import TopNav from "@/components/TopNav";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Hero />
      <WorkList />
      <LikeSection />
    </div>
  );
}
