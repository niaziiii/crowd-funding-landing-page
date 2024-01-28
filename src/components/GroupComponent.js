const GroupComponent = ({ howCanIStartACrowdfunding, group1171275759 }) => {
  return (
    <div className="self-stretch rounded-lg bg-secondary-s20 flex flex-row items-center justify-start p-[30px] box-border gap-[73px] max-w-full text-left text-lg text-secondary font-montserrat mq450:gap-[18px] mq750:flex-wrap mq750:gap-[36px]">
      <div className="h-[120px] w-[570px] relative rounded-lg bg-secondary-s20 hidden max-w-full" />
      <div className="h-[60px] flex-1 relative leading-[30px] font-semibold inline-block min-w-[257px] max-w-full z-[1]">
        {howCanIStartACrowdfunding}
      </div>
      <img
        className="h-[42px] w-[42px] relative z-[1] cursor-pointer"
        loading="eager"
        alt=""
        src={group1171275759}
      />
    </div>
  );
};

export default GroupComponent;
