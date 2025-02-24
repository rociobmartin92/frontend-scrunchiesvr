import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonProps {
  grid: number;
}

function SkeletonSchema({ grid }: SkeletonProps) {
  return Array.from(Array(grid).keys()).map((item, index) => (
    <div className="flex flex-col space-y-3" key={index}>
      <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-500" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ));
}

export default SkeletonSchema;
