const PosterCardSkeleton = () => {
  return (
    <>
      <div className="grid gap-2">
        <div className="w-96 rounded-xl overflow-hidden aspect-square bg-transparent"></div>
        <div className="flex flex-col">
          <div className="rounded-xl bg-neutral-700 animate-pulse w-12 h-3"></div>
          <div className="rounded-xl bg-neutral-700 animate-pulse w-36 h-6 mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default PosterCardSkeleton;
