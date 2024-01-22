const ProjectLegitimacy = () => {
  return (
    <section className="self-stretch bg-secondary-s10 flex flex-row items-center justify-start pt-[212px] pb-[78px] pr-[120px] pl-[154px] box-border gap-[172px] max-w-full shrink-0 text-left text-21xl text-secondary font-montserrat lg:flex-wrap lg:gap-[86px] lg:pl-[77px] lg:pr-[60px] lg:box-border mq450:gap-[21px] mq450:pt-[90px] mq450:pb-[33px] mq450:box-border mq1050:pt-[138px] mq1050:pb-[51px] mq1050:box-border mq750:gap-[43px] mq750:pl-[38px] mq750:pr-[30px] mq750:box-border">
      <div className="h-[777px] w-[1440px] relative bg-secondary-s10 hidden max-w-full" />
      <div className="w-[490px] flex flex-col items-start justify-start gap-[36px] min-w-[490px] max-w-full lg:flex-1 mq1050:min-w-full mq750:gap-[18px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <h1 className="m-0 w-[422px] h-[147px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-5xl mq1050:text-13xl">
            <span>{`On a way to Craft a `}</span>
            <span className="text-primary">Crowdfunding</span>
            <span>{` Revolution `}</span>
          </h1>
          <div className="self-stretch relative text-base leading-[26px] font-open-sans text-black-b300 z-[1]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-base text-primary font-open-sans">
          <div className="relative [text-decoration:underline] leading-[24px] font-semibold z-[1]">
            Learn more about us
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
            alt=""
            src="/frame-1.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[328px] max-w-full text-lg text-primary">
        <img
          className="h-[487.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="eager"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="my-0 mx-[!important] absolute bottom-[59px] left-[-119px] rounded-31xl bg-white shadow-[0px_4px_45px_rgba(0,_0,_0,_0.06)] flex flex-row items-center justify-start py-1.5 pr-[37px] pl-1.5 box-border gap-[12px] max-w-full z-[2] mq450:flex-wrap">
          <div className="h-20 w-[328px] relative rounded-31xl bg-white shadow-[0px_4px_45px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[68px] flex flex-row items-center justify-center">
            <div className="h-[68px] flex-1 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-secondary w-full h-full z-[1]" />
              <img
                className="absolute top-[18px] left-[18px] w-8 h-8 overflow-hidden z-[2]"
                alt=""
                src="/frame-2.svg"
              />
            </div>
          </button>
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <b className="relative z-[1]">500+</b>
            <div className="relative text-base font-open-sans text-black-b500 z-[1]">
              Investments Internationally
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLegitimacy;
