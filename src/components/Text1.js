import { useMemo } from "react";

const Text1 = ({
  rectangle68,
  catalyzeYourDreams,
  group1171276033,
  loremIpsumIsLeft,
  loremIpsumIsBackgroundImage,
  loremIpsumIsRight,
  display
}) => {
  const textStyle = useMemo(() => {
    return {
      left: loremIpsumIsLeft,
      backgroundImage: loremIpsumIsBackgroundImage,
      right: loremIpsumIsRight,
    };
  }, [loremIpsumIsLeft, loremIpsumIsBackgroundImage, loremIpsumIsRight]);

  return (
    <div
      className={`w-[440px] my-0 mx-[!important] absolute bottom-[-152px] left-[186px] mq750:left-0 rounded-mini ${display} flex-col items-start justify-start p-8 box-border gap-[32px] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-left text-5xl text-white font-montserrat`}
      style={textStyle}
    >
      <div className="w-[339px] flex flex-col items-start justify-start gap-[15px] max-w-full">
        <h3 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit z-[2] mq450:text-lgi mq450:leading-[26px]">
          {catalyzeYourDreams}
        </h3>
        <div className="self-stretch relative text-base leading-[24px] font-open-sans text-black-b10 z-[2]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is dummy text.
        </div>
      </div>
      <button className="cursor-pointer [border:none] text-white py-2 px-5 bg-secondary rounded-full flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-darkgoldenrod">
        <img
          className=" w-6 hover:w-7 z-[2]"
          loading="eager"
          alt=""
          src='/arrow.svg'
        />
      </button>
    </div>
  );
};

export default Text1;
