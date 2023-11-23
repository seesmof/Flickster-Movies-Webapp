const PageContainer = ({ className, children }) => {
  return (
    <div
      className={`${className} max-w-7xl mx-auto p-4 grid text-neutral-200 pb-20 md:pb-12`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
