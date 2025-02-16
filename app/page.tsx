import { BackgroundLines } from "@/components/ui/background-lines";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import LinkButtons from "@/components/LinkButtons";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import { TransitionLink } from "@/components/TransitionLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-20">
        <BackgroundLines />
      </div>

      <div className="fixed top-4 right-4 z-10">
        <ThemeSwitcher />
      </div>

      {/* Scrollable Content */}
      <div className="flex flex-col justify-center items-center min-h-screen overflow-auto">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto p-6 gap-4">
          <Avatar className="size-28 border">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl text-center font-bold">Aryan Shelke</h1>
          <h2 className="text-xl text-center text-bold">
            Full Stack Web Developer | M.S. Software Engineering @ SJSU
          </h2>
          <LinkButtons />
          <TransitionLink href="/portfolio">
            <Button
              size="lg"
              className="flex flex-row justify-center items-center gap-2 mt-8 px-12 transition duration-600 ease-in-out transform hover:scale-[1.05]"
            >
              <p>Open Portfolio</p>
              <ArrowRightCircle size={36} />
            </Button>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
