import BannerCards from "@/components/banner-cards";
import BannerCollections from "@/components/banner-colletions";
import ChooseCategory from "@/components/choose-category";
import DiscountCard from "@/components/discount-card";
import FeaturedProducs from "@/components/features-products";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div>
      <main>
        <BannerCards />
        <FeaturedProducs />
        <DiscountCard />
        <ChooseCategory />
        <BannerCollections />
      </main>
      <Toaster />
    </div>
  );
}
