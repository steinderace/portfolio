import { alegreyaSans } from "@/ui/fonts";

export default function Footer() {
  return (
    <footer className="py-6 flex justify-center">
      <div className="flex flex-col justify-center items-center max-w-4xl w-full">
        {/* Divider */}
        <div className="w-4/5 h-[1px] bg-gray-600 mt-6"></div>

        {/* Name, year, copyright */}
        <div
          className={`${alegreyaSans.className} mx-auto w-1/2 text-center mt-2`}
        >
          &copy; {new Date().getFullYear()}. Sushovan Shakya. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
