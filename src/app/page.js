import { Hero } from "@/components/Hero";
import TopNav from "@/components/TopNav";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Hero />
      <WorkList />
    </div>
  );
}
