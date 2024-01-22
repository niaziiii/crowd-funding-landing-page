import { useMemo } from "react";

const FrameComponent = ({
  group1171275689,
  group283,
  group288,
  propLeft,
  propRight,
  propLeft1,
}) => {
  const wrapperGroup288Style = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  const groupIconStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className="flex-1 flex flex-row items-start justify-start relative min-w-[352px] max-w-full text-left text-base text-black-b100 font-open-sans mq450:min-w-full">
      <div className="h-[92px] w-[92px] absolute my-0 mx-[!important] top-[-48px] left-[calc(50%_-_46px)] z-[1] flex items-center justify-center">
        <img
          className="h-full w-full z-[1] object-contain absolute left-[0px] top-[4px] [transform:scale(2.478)]"
          loading="eager"
          alt=""
          src={group1171275689}
        />
      </div>
      <div className="flex-1 rounded-xl bg-white shadow-[0px_5px_100px_rgba(0,_0,_0,_0.07)] flex flex-col items-center justify-start pt-[70px] pb-7 pr-[42px] pl-[52px] box-border gap-[24px] max-w-full mq750:pl-[26px] mq750:pr-[21px] mq750:box-border">
        <div className="w-[542px] h-[311px] relative rounded-xl bg-white shadow-[0px_5px_100px_rgba(0,_0,_0,_0.07)] hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border max-w-full">
          <div className="flex-1 relative leading-[24px] inline-block max-w-full z-[1]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xl text-primary font-montserrat mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <b className="relative z-[1] mq450:text-base">Luke Shaw</b>
            <div className="relative text-sm leading-[116.5%] font-open-sans text-black-b90 z-[1]">
              Customer
            </div>
          </div>
          <img
            className="h-[22px] w-[126px] relative z-[1]"
            loading="eager"
            alt=""
            src={group283}
          />
        </div>
      </div>
      <div
        className="h-[45px] w-[45px] absolute my-0 mx-[!important] top-[calc(50%_-_24.5px)] left-[-36px] z-[1] flex items-center justify-center"
        style={wrapperGroup288Style}
      >
        <img
          className="h-full w-full z-[1] object-contain absolute left-[11px] top-[0px] [transform:scale(2.733)]"
          loading="eager"
          alt=""
          src={group288}
          style={groupIconStyle}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
