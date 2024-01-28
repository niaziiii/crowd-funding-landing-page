import React from 'react'
import GroupComponent from "./GroupComponent";
const HowToStart = () => {
  const [isDetailVisible, setIsDetailVisible] = React.useState(false);

  const handleImageClick = () => {
    setIsDetailVisible((prev) => !prev);
  };
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[370px] max-w-full text-left text-lg text-secondary font-montserrat mq450:min-w-full">
      <div className="self-stretch rounded-lg bg-secondary-s20 flex flex-col items-center justify-start  px-6 pb-6 box-border gap-[10px] max-w-full">

        <div className="self-stretch flex flex-row items-start justify-start py-6 px-1.5 box-border gap-[60px] max-w-full mq750:flex-wrap mq750:gap-[30px]">
          <div className="h-[60px] flex-1 relative leading-[30px] font-semibold inline-block min-w-[265px] max-w-full z-[1]">
            What is crowdfunding, and how does it work?
          </div>
          <div
            className="h-[42px] w-[42px] relative rounded-lg bg-secondary-s30 z-[1] cursor-pointer"
            onClick={handleImageClick}
          >
            <div className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-secondary-s30 ${isDetailVisible ? '' : 'hidden'}`} />
            {isDetailVisible ?
              <img
                className="absolute h-[4.76%] w-[42.86%] top-[47.62%] right-[28.57%] bottom-[47.62%] left-[28.57%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="eager"
                alt=""
                src={"/group-36810.svg"}
              /> :
              <img
                className="h-[42px] w-[42px] relative z-[1]"
                alt=""
                src="/group-1171275759-1.svg"
              />

            }
          </div>
        </div>
        {isDetailVisible && (
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-black-b300 font-open-sans">
            <div className="w-[439px] relative leading-[28px] inline-block shrink-0 max-w-full z-[1]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </div>
          </div>
        )}
      </div>
      <GroupComponent
        howCanIStartACrowdfunding="How can I start a crowdfunding campaign on your platform?"
        group1171275759="/group-1171275759.svg"
      />
      <div className="self-stretch rounded-lg bg-secondary-s20 flex flex-row items-center justify-between p-[30px] box-border gap-[20px] max-w-full mq750:flex-wrap">
        <div className="h-[102px] w-[570px] relative rounded-lg bg-secondary-s20 hidden max-w-full" />
        <input
          className="w-[365px] [border:none] [outline:none] font-semibold font-montserrat text-lg bg-[transparent] h-[30px] relative leading-[30px] text-secondary text-left inline-block max-w-full z-[1]"
          placeholder="What payment methods are accepted?"
          type="text"
        />
        <img
          className="h-[42px] w-[42px] relative z-[1] cursor-pointer"
          alt=""
          src="/group-1171275759-1.svg"
        />
      </div>
    </div>
  );
};

export default HowToStart;
