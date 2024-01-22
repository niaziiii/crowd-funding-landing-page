const MainHeader = () => {
  return (
    <footer className="w-[1280px] flex flex-row items-start justify-start py-0 px-5 box-border relative max-w-full shrink-0 text-left text-xl text-secondary font-montserrat">
      <img
        className="h-[504px] w-[257px] my-0 mx-[!important] absolute bottom-[-133px] left-[-97px] object-contain opacity-[0.03]"
        alt=""
        src="/frame-1171275837@2x.png"
      />
      <img
        className="h-[504px] w-[257px] my-0 mx-[!important] absolute right-[-97px] bottom-[-133px] object-contain opacity-[0.03]"
        loading="eager"
        alt=""
        src="/frame-1171275837@2x.png"
      />
      <div className="flex-1 flex flex-col items-center justify-start gap-[50px] max-w-full z-[1] mq750:gap-[25px]">
        <div className="w-[1161px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
          <div className="w-[391px] flex flex-col items-start justify-start gap-[10px] max-w-full text-5xl text-primary">
            <h3 className="m-0 relative text-inherit leading-[24px] font-bold font-inherit mq450:text-lgi mq450:leading-[19px]">
              Youniit.Y
            </h3>
            <div className="self-stretch relative text-base leading-[26px] font-open-sans text-black-b300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[35px]">
            <div className="relative font-semibold mq450:text-base">
              Quick Access
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-mini text-black-b300 font-open-sans">
              <div className="relative leading-[24px]">Home</div>
              <div className="relative leading-[24px]">Who we are?</div>
              <div className="relative leading-[24px]">Invest Noe</div>
              <div className="relative leading-[24px]">Contact Us</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[35px]">
            <div className="relative font-semibold mq450:text-base">
              Who we are?
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-mini text-black-b300 font-open-sans">
              <div className="relative leading-[24px]">Lorem Ipsum</div>
              <div className="relative leading-[24px]">Lorem Ipsum</div>
              <div className="relative leading-[24px]">Lorem Ipsum</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[35px]">
            <div className="relative font-semibold mq450:text-base">
              Contact Me
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-mini text-black-b300 font-open-sans">
              <div className="relative leading-[24px]">+(123)-456-6789</div>
              <div className="relative leading-[24px] whitespace-nowrap">
                youraddress@hotmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[59px] flex flex-col items-center justify-start gap-[25px] text-base mq750:h-auto">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/shape.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-[13px] gap-[20px] mq750:flex-wrap">
            <div className="relative leading-[24px] font-medium">
              Copyright © 2024 All rights reserved.
            </div>
            <img
              className="h-[34px] w-[190px] relative"
              alt=""
              src="/group-705.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainHeader;
