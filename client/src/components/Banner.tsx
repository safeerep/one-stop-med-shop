const Banner = () => {
  return (
    <div className="lg:px-20 px-16">
      <section className="w-full flex flex-col-reverse items-start md:grid grid-cols-2 mt-5 relative overflow-hidden h-auto ">
        <section className=" h-96 flex flex-col gap-10">
          <div className="flex flex-col ">
            <div className="maintxt text-center text-6xl md:text-4xl lg:text-7xl font-bold leading-tight md:text-left">
              We are here,
              <br />
              for you <br />
            </div>
          </div>
          <div className="md:w-[100%] w-[100%] lg:w-[70%]">
            <p className="text-textPrimary ">
              Welcome to one stop medical shop, your dedicated online healthcare destination
              where we prioritize your well-being from the comfort of your own
              space. We understand that health is paramount, and our mission is
              to bring top-notch medical services directly to you, wherever you
              are. Access high-quality healthcare without the need to travel.
              Our online platform connects you with skilled professionals,
              ensuring you receive the care you deserve, conveniently.
            </p>
          </div>
        </section>
        <section className="flex justify-end relative">
          <div className="flex justify-end">
            <img src={`/med-banner.jpg`} className="rounded-md" alt="" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Banner;
