import BannerCards from "@/components/banner-cards";
import BannerCollections from "@/components/banner-colletions";
import BestSellers from "@/components/best-sellers";
import ChooseCategory from "@/components/choose-category";
import DiscountCard from "@/components/discount-card";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div>
      <main>
        <BannerCards />
        <BestSellers />
        <ChooseCategory />
        <BannerCollections />
        <DiscountCard />
      </main>
      <Toaster />
    </div>
  );
}
