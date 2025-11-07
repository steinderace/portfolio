// Component for business-card like portfolio intro section
import { saira } from "@/ui/fonts";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="rounded-2xl shadow-lg bg-[#FFE4E1] dark:bg-[#AED6FF] mt-32 mx-4 md:mx-auto p-6 md:p-8 w-90 h-90 md:w-180 md:h-100">
        <div className={`${saira.className} text-[#333]`}>
          {/* Text content - centered on mobile, left-aligned on desktop */}
          <div className="text-center md:text-left md:ml-2">
            <div className="mt-4 text-3xl md:text-4xl">Sushovan Shakya</div>
            <div className="mt-2 text-xl md:text-2xl">Full Stack Developer</div>
            <div className="mt-2 text-lg md:text-xl">Kathmandu, Nepal</div>
          </div>

          {/* Social icons - centered on mobile, left-aligned on desktop */}
          <div className="mt-40 md:ml-2 flex flex-row gap-2 justify-center md:justify-start">
            <Link
              href="mailto:reach.sushovan@gmail.com"
              className="p-2 rounded-full transition duration-300 text-[#333] hover:bg-white active:bg-white"
              aria-label="Email"
            >
              <Mail />
            </Link>
            <Link
              href="https://github.com/steinderace"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition duration-300 text-[#333] hover:text-white hover:bg-[#24292e] active:bg-[#24292e]"
              aria-label="GitHub"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/steinderace/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition duration-300 text-[#333] hover:text-white hover:bg-[#0077b5] active:bg-[#0077b5]"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
