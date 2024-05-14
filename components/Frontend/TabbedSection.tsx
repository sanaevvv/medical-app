import TabbedItems from './TabbedItems';

const TabbedSection = () => {
  return (
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px] scroll-m-20 pb-2 tracking-tight first:mt-0">
              Browse your doctors By.
            </h2>
            <p className="dark:text-dark-6 text-gray-500 py-2 leading-7 [&:not(:first-child)]:mt-6">
              Choose from thousands of providers at every day affordable prices.
              Book online today.
            </p>
          </div>
        </div>
      </div>
      {/* TABS */}
      <div className="mx-auto max-w-6xl">
        <TabbedItems />
      </div>
    </div>
  );
};

export default TabbedSection;
