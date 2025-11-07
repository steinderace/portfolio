// Component for business-card like portfolio intro section
import { saira } from "@/ui/fonts";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="rounded-2xl shadow-lg bg-[#FFE4E1] dark:bg-[#AED6FF] mt-32 w-180 h-100 p-4">
        <div className={`${saira.className} mt-4 ml-4 text-[#333]`}>
          <div className="text-3xl">Sushovan Shakya</div>
          <div className="mt-2 text-xl">Full Stack Developer</div>
          <div className="mt-2 text-lg">Kathmandu, Nepal</div>
          <div className="mt-48">{""}</div>
          <div className="mt-4 flex flex-row gap-2">
            <Link
              href="mailto:reach.sushovan@gmail.com"
              className="p-2 rounded-full transition duration-300 text-[#333] hover:bg-white active:bg-white"
            >
              <Mail />
            </Link>
            <Link
              href="https://github.com/steinderace"
              target="_blank"
              className="p-2 rounded-full transition duration-300 text-[#333] hover:text-white hover:bg-[#24292e] active:bg-[#24292e]"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/steinderace/"
              target="_blank"
              className="p-2 rounded-full transition duration-300 text-[#333] hover:text-white hover:bg-[#0077b5] active:bg-[#0077b5]"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
