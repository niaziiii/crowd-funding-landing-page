import LinkFrame from "./LinkFrame";

const FrameComponent2 = () => {
  return (
    <section className="w-[1280px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[56px] min-h-[827px] max-w-full shrink-0 text-left text-21xl text-secondary font-montserrat mq750:gap-[28px]">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq750:flex-wrap">
        <h1 className="m-0 h-[98px] w-[449px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-5xl mq1050:text-13xl">
          <span>{`Invest in Tomorrow `}</span>
          <span className="text-primary">Success Stories</span>
        </h1>
        <button className="cursor-pointer [border:none] py-4 pr-[26px] pl-[30px] bg-primary rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkgoldenrod">
          <b className="relative text-base leading-[24px] font-open-sans text-white text-left">
            Invest Now
          </b>
        </button>
      </div>
      <div className="w-[1240px] overflow-x-auto flex flex-row items-start justify-start gap-[20px] max-w-full text-sm font-open-sans">
        <LinkFrame
          imageFrame="/rectangle-57@2x.png"
          techWall="TechWall"
          buttonFrame="/frame-3.svg"
          group1171276002="/group-1171276033@2x.png"
        />
        <LinkFrame
          imageFrame="/rectangle-65@2x.png"
          techWall="AI Industry"
          buttonFrame="/frame-4.svg"
          group1171276002="/group-1171276033@2x.png"
        />
        <LinkFrame
          imageFrame="/rectangle-67@2x.png"
          techWall="Real Estate"
          buttonFrame="/frame-5.svg"
          group1171276002="/group-1171276033@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
