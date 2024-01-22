import GroupComponent from "./GroupComponent";

const ProjectAccessFrame = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[370px] max-w-full text-left text-lg text-secondary font-montserrat mq450:min-w-full">
      <div className="self-stretch rounded-lg bg-secondary-s20 flex flex-row items-center justify-between p-[30px] box-border gap-[20px] max-w-full mq750:flex-wrap">
        <div className="h-[102px] w-[570px] relative rounded-lg bg-secondary-s20 hidden max-w-full" />
        <input
          className="w-[323px] [border:none] [outline:none] font-semibold font-montserrat text-lg bg-[transparent] h-[30px] relative leading-[30px] text-secondary text-left inline-block max-w-full z-[1]"
          placeholder="What are the benefits I would get?"
          type="text"
        />
        <img
          className="h-[42px] w-[42px] relative z-[1]"
          alt=""
          src="/group-1171275759-1.svg"
        />
      </div>
      <GroupComponent
        howCanIStartACrowdfunding="How do I know if a project is legitimate and trustworthy?"
        group1171275759="/group-1171275759.svg"
      />
      <GroupComponent
        howCanIStartACrowdfunding="Do you provide any resources or guidance for campaign creators?"
        group1171275759="/group-1171275759-1.svg"
      />
      <div className="self-stretch rounded-lg bg-secondary-s20 flex flex-row items-center justify-between p-[30px] box-border gap-[20px] max-w-full z-[1] mq450:flex-wrap">
        <div className="h-[102px] w-[570px] relative rounded-lg bg-secondary-s20 hidden max-w-full" />
        <div className="relative leading-[30px] font-semibold z-[1]">
          How this technology works?
        </div>
        <img
          className="h-[42px] w-[42px] relative z-[1]"
          alt=""
          src="/group-1171275759-1.svg"
        />
      </div>
    </div>
  );
};

export default ProjectAccessFrame;
