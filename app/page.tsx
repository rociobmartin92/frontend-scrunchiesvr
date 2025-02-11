import BannerCards from "@/components/banner-cards";
import BannerImages from "@/components/banner-images";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
      {/* <BannerImages /> */}
      <BannerCards />
      </main>
    </div>
  );
}
