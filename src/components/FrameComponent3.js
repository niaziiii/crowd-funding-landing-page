const FrameComponent3 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[110px] box-border max-w-full text-center text-21xl text-white font-montserrat">
      <div className="flex-1 bg-secondary flex flex-row items-end justify-center pt-[71px] px-5 pb-[66px] box-border relative gap-[6px] max-w-full z-[1]">
        <div className="h-[221px] w-[1440px] relative bg-secondary hidden max-w-full z-[0]" />
        <b className="w-0 relative inline-block z-[1] mq450:text-5xl mq1050:text-13xl" />
        <img
          className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
          alt=""
          src="/mask-group-1.svg"
        />
        <div className="w-[771px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-[calc(100%_-_6px)] text-left text-primary">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[3] mq750:flex-wrap mq750:justify-center">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="h-[49px] relative inline-block mq450:text-5xl mq1050:text-13xl">
                $12M+
              </b>
              <div className="h-[22px] relative text-base font-open-sans text-white inline-block">
                Investments
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="h-[49px] relative inline-block mq450:text-5xl mq1050:text-13xl">
                10+
              </b>
              <div className="relative text-base font-open-sans text-white">
                Years of Experience
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="h-[49px] relative inline-block mq450:text-5xl mq1050:text-13xl">
                120+
              </b>
              <div className="relative text-base font-open-sans text-white">
                Active Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
