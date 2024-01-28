const LinkFrame = ({ imageFrame, techWall, buttonFrame, group1171276002 }) => {
  return (
    <div className="w-[400px] rounded-mini bg-white shadow-[0px_4px_60px_rgba(0,_0,_0,_0.1)] shrink-0 flex flex-col items-center justify-start pt-4 px-4 pb-6 box-border gap-[24px] z-[1] text-left text-sm text-secondary font-open-sans">
      <div className="w-[400px] h-[563px] relative rounded-mini bg-white shadow-[0px_4px_60px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
      <img
        className="self-stretch h-[238px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        loading="eager"
        alt=""
        src={imageFrame}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full text-5xl font-montserrat">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit z-[2] mq450:text-lgi mq450:leading-[26px]">
            {techWall}
          </h3>
          <div className="self-stretch relative text-base leading-[24px] font-open-sans text-black-b300 z-[2]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-primary-p20 flex flex-row items-center justify-between pt-[17px] pb-4 pr-[35px] pl-[31px] box-border gap-[20px] max-w-full z-[2] text-secondary-s100">
        <div className="h-[90px] w-[368px] relative rounded-3xs bg-primary-p20 hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[37px]">
          <div className="relative leading-[20px] z-[1]">Investors</div>
          <b className="relative text-xl leading-[20px] text-primary z-[1] mq450:text-base mq450:leading-[16px]">
            180+
          </b>
        </div>
        <div className="h-[58px] w-px relative box-border z-[1] border-r-[1px] border-solid border-primary-p40" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[36px]">
          <div className="relative leading-[20px] z-[1]">Raised</div>
          <b className="relative text-xl leading-[20px] text-primary z-[1] mq450:text-base mq450:leading-[16px]">
            $2.4M
          </b>
        </div>
        <div className="h-[58px] w-px relative box-border z-[1] border-r-[1px] border-solid border-primary-p40" />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative leading-[20px] z-[1]">Goal</div>
          <b className="relative text-xl leading-[20px] text-primary z-[1] mq450:text-base mq450:leading-[16px]">
            $3M
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-px gap-[20px] text-black-b100">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2]"
            alt=""
            src={buttonFrame}
          />
          <div className="relative leading-[20px] z-[2]">
            Min Investment: $500
          </div>
        </div>
        <button className="cursor-pointer [border:none] text-white py-2 px-5 bg-secondary rounded-full flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-darkgoldenrod">
          <img
            className=" w-6 hover:w-7  z-[2]"
            loading="eager"
            alt=""
            src='/arrow.svg'
          />
        </button>
      </div>
    </div>
  );
};

export default LinkFrame;
