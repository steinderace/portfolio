import { nithyaRanjana } from "@/ui/fonts";
import DarkModeButton from "@/components/DarkModeButton";

export default function Header() {
  return (
    <header className="w-full flex justify-center mt-16">
      <div className="flex flex-row items-center gap-128">
        {/* Title */}
        <div className={`${nithyaRanjana.className} text-5xl`}>
          सुशोभन शाक्य
        </div>

        {/* Space for buttons */}
        <div className="flex gap-4">
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
}
