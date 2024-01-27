const SubscribeNowSection = () => {
  return (
    <section
      id="contact"
      className=" w-[1280px] flex flex-row items-start justify-start pt-0 px-5 pb-20 box-border max-w-full shrink-0 text-center text-13xl text-white font-montserrat mq450:pb-[52px] mq450:box-border"
    >
      <div className="flex-1 rounded-mini bg-secondary flex flex-row flex-wrap items-center justify-start relative gap-[23px] max-w-full z-[1]">
        <div className="self-stretch w-[1240px] relative rounded-mini bg-secondary hidden max-w-full z-[0]" />
        <img
          className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
          alt=""
          src="/mask-group-2.svg"
        />
        <img
          className="h-[311px] w-[315px] relative object-contain min-h-[311px] z-[3]"
          alt=""
          src="/mask-group-3@2x.png"
        />
        <div className="flex-1 flex flex-col items-center justify-start py-5 px-0 box-border gap-[36px] min-w-[367px] max-w-full mq450:min-w-full mq750:gap-[18px]">
          <div className="w-[547px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[20px] max-w-full">
            <h1 className="m-0 h-[39px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[3] mq450:text-lgi mq1050:text-7xl">
              <span>{`Subscribe Our `}</span>
              <span className="text-primary">Newsletter</span>
            </h1>
            <div className="self-stretch relative text-base leading-[24px] font-open-sans z-[3]">
              Join Our Weekly Newsletter to get updated news about latest
              projects and campaigns.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
            <input
              className="w-full [border:none] [outline:none] bg-white h-14 flex-1 rounded-lg flex flex-row items-center justify-start py-[17px] px-6 box-border font-open-sans text-base text-darkgray min-w-[253px] max-w-full z-[3]"
              placeholder="Enter Your email address"
              type="text"
            />
            <button className="cursor-pointer [border:none] py-4 pr-[26px] pl-[30px] bg-primary rounded-3xs flex flex-row items-center justify-center whitespace-nowrap z-[3] hover:bg-darkgoldenrod">
              <b className="relative text-base leading-[24px] font-open-sans text-white text-left">
                Invest Now
              </b>
            </button>
          </div>
        </div>
        <img
          className="h-[311px] w-[315px] relative object-contain z-[3]"
          alt=""
          src="/mask-group-4@2x.png"
        />
      </div>
    </section>
  );
};

export default SubscribeNowSection;
