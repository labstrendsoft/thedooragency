import { Skeleton } from '@shadcnui/skeleton';

export default function LoaderTrabajo() {
  return (
    <div className="mx-auto max-w-[1000px] px-6 text-white lg:px-0">
      <div className="space-y-10 pt-10">
        {/* First Project Skeleton */}
        <div className="grid items-center justify-center gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {/* Project Title */}
            <Skeleton className="h-8 w-80 bg-gray-700/40" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-2.5 rounded-full bg-gray-700/40"
                  style={{ width: `${Math.random() * 40 + 80}px` }}
                />
              ))}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Skeleton className="h-2.5 w-full bg-gray-700/40" />
              <Skeleton className="h-2.5 w-full bg-gray-700/40" />
              <Skeleton className="h-2.5 w-4/5 bg-gray-700/40" />
              <Skeleton className="h-2.5 w-3/4 bg-gray-700/40" />
            </div>

            {/* Button */}
            <Skeleton className="h-12 w-32 rounded-full bg-gray-700/40" />
          </div>

          {/* Project Image */}
          <div className="relative ml-auto aspect-auto w-full max-w-[450px]">
            <Skeleton className="aspect-square w-full rounded-2xl bg-gray-700/40" />
          </div>
        </div>

        {/* Second Project Skeleton */}
        <div className="grid items-center justify-center gap-6 lg:grid-cols-2">
          {/* Project Image */}
          <div className="relative mr-auto aspect-auto w-full max-w-[450px] lg:order-1">
            <Skeleton className="aspect-square w-full rounded-2xl bg-gray-700/40" />
          </div>

          <div className="space-y-6 lg:order-2">
            {/* Project Title */}
            <Skeleton className="h-8 w-64 bg-gray-700/40" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-6 rounded-full bg-gray-700/40"
                  style={{ width: `${Math.random() * 50 + 70}px` }}
                />
              ))}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Skeleton className="h-2.5 w-full bg-gray-700/40" />
              <Skeleton className="h-2.5 w-full bg-gray-700/40" />
              <Skeleton className="h-2.5 w-5/6 bg-gray-700/40" />
              <Skeleton className="h-2.5 w-2/3 bg-gray-700/40" />
            </div>

            {/* Button */}
            <Skeleton className="h-12 w-32 rounded-full bg-gray-700/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
