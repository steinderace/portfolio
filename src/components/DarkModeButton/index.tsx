import { Sun, Moon } from "lucide-react";

export default function DarkModeButton() {
  return (
    <button className="rounded-2xl border-2 border-bg-primary-dark bg-bg-primary px-2 py-2 transition-colors duration-500 hover:bg-bg-primary-dark hover:border-bg-primary">
      <Moon className="w-5 h-5 text-bg-primary-dark transition-colors duration-500 hover:text-bg-primary" />
    </button>
  );
}
