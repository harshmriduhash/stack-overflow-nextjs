import { Skeleton } from "@/components/ui/skeleton";

const LoadingTagsPage = () => {
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>
      <div className="mb-12 mt-11 flex flex-wrap gap-5">
        <Skeleton className="h-14 flex-1" />
        <Skeleton className="h-14 w-44 max-sm:w-full" />
      </div>

      <div className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Skeleton
            key={item}
            className="flex h-36 w-full flex-grow rounded-2xl max-xs:min-w-full sm:w-[250px]"
          />
        ))}
      </div>
    </section>
  );
};

export default LoadingTagsPage;
