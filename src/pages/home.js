import HeroSection from "../components/HeroSection";
import ProjectLegitimacy from "../components/ProjectLegitimacy";
import FrameComponent3 from "../components/FrameComponent3";
import InvestSection from "../components/InvestSection";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import HowToStart from "../components/HowToStart";
import ProjectAccessFrame from "../components/ProjectAccessFrame";
import SubscribeNowSection from "../components/SubscribeNowSection";
import Footer from "../components/footer";


const HomePage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[29px] box-border tracking-[normal]">
      <img
        className="w-[368px] h-[412.7px] my-0 mx-[!important] absolute right-[-218px] bottom-[523.3px] object-contain opacity-[0.05]"
        loading="eager"
        alt=""
        src="/frame-1171275836@2x.png"
      />
      <img
        className="w-[411px] h-[426.2px] my-0 mx-[!important] absolute top-[1778px] left-[-267px] object-contain opacity-[0.06]"
        alt=""
        src="/group@2x.png"
      />

      <HeroSection />
      <ProjectLegitimacy />
      <FrameComponent3 />
      <InvestSection />
      <FrameComponent1 />
      <section className="w-[1144px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[116px] min-h-[707px] max-w-full shrink-0 text-center text-21xl text-secondary font-montserrat lg:gap-[58px] mq750:gap-[29px]">
        <div className="w-[495px] flex flex-col items-center justify-start gap-[16px] max-w-full">
          <h1 className="m-0 w-[472px] h-[98px] relative text-inherit leading-[49px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[39px]">
            <span>{`What Our `}</span>
            <span className="text-primary">Customers</span>
            <span> Say</span>
          </h1>
          <div className="self-stretch relative text-lg leading-[28px] font-open-sans text-black-b300">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full">
          <FrameComponent
            group1171275689="/group-1171275689.svg"
            group283="/group-283.svg"
            group288="/group-288.svg"
            propLeft="-36px"
            propLeft1="11px"
          />
          <FrameComponent
            group1171275689="/group-1171276024.svg"
            group283="/group-283.svg"
            group288="/group-287.svg"
            propLeft="unset"
            propRight="-28px"
            propLeft1="-11px"
          />
        </div>
      </section>
      <section className="w-[1200px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[50px] min-h-[834px] max-w-full shrink-0 text-center text-21xl text-secondary font-montserrat mq750:gap-[25px]">
        <div className="w-[495px] flex flex-col items-center justify-start gap-[16px] max-w-full">
          <h1 className="m-0 w-[472px] h-[98px] relative text-inherit leading-[49px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[39px]">
            <span>{`Frequently Asked `}</span>
            <span className="text-primary">Questions</span>
          </h1>
          <div className="self-stretch relative text-lg leading-[28px] font-open-sans text-black-b300">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
          <HowToStart />
          <ProjectAccessFrame />
        </div>
      </section>
      {/* <SubscribeNowSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
