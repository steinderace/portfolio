// import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center gap-8">
        <Card />
      </div>

      <Footer />
    </>
  );
}
