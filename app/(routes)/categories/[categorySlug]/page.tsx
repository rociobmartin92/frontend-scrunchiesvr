"use client";

import useGetProducts from "@/services/useGetProducts";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const params = useParams();
  const slug = params.categorySlug;

  const { result, error, loading } = useGetProducts({ category: { slug: slug } });

  console.log("slug", slug)

  console.log("result", result)

  return <>from page category</>;
};

export default Page;
