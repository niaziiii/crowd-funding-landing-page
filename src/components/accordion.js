import React from 'react'

const Accordion = ({ summary }) => {
    const [isDetailVisible, setIsDetailVisible] = React.useState(false);

    const handleImageClick = () => {
        setIsDetailVisible((prev) => !prev);
    };
    return (
        <>  <div className="self-stretch rounded-lg bg-secondary-s20 flex flex-col items-center justify-start  px-6 pb-6 box-border gap-[10px] max-w-full">

            <div className="self-stretch flex flex-row items-start justify-start py-6 px-1.5 box-border gap-[60px] max-w-full mq750:flex-wrap mq750:gap-[30px]">
                <div className="h-[60px] flex-1 relative leading-[30px] font-semibold inline-block min-w-[265px] max-w-full z-[1]">
                    {summary}
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
        </div></>
    )
}

export default Accordion