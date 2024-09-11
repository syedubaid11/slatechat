import { BackgroundLines } from "./components/ui/background";
import { HomeHero } from "./components/ui/home";

export default function Home() {
  return (
    <div>
    <BackgroundLines className="w-1/2">
      <div className="flex flex-row justify-center items-center h-screen">
        <HomeHero/>
      </div>
    </BackgroundLines>
    </div>
  );
}
