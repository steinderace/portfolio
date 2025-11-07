// Component for business-card like portfolio intro section
import { saira } from "@/ui/fonts";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="rounded-2xl shadow-lg bg-[#FFE4E1] dark:bg-[#AED6FF] mt-32 w-180 h-100 p-4">
        <div className={`${saira.className} mt-4 ml-4 text-[#333]`}>
          <div className="text-2xl">Sushovan Shakya</div>
          <div className="mt-2 text-xl">Full Stack Developer</div>
          <div className="mt-2 text-lg">Kathmandu, Nepal</div>
          <div className="mt-32">{""}</div>
          <div className="mt-2">Contact Me</div>
          <div className="mt-4 flex flex-row gap-4">
            <Link href="https://github.com/steinderace">
              <Github className="text-[#333] transition duration-300 hover:text-[#222]" />
            </Link>
            <Link href="https://www.linkedin.com/in/steinderace/">
              <Linkedin className="text-[#333] transition duration-300 hover:text-[#222]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
