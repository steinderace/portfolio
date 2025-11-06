import { nithyaRanjana } from "@/ui/fonts";

export default function Header() {
  return (
    <header className="w-full flex justify-center mt-16">
      <div className="flex flex-row items-center">
        {/* Title */}
        <div className={`${nithyaRanjana.className} text-5xl`}>
          सुशोभन शाक्य
        </div>

        {/* Space for buttons */}
        <div className="flex gap-4">Language changer buttons go here</div>
      </div>
    </header>
  );
}
