import React from 'react'
import GroupComponent from "./GroupComponent";
import Accordion from './accordion';
const HowToStart = () => {

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[370px] max-w-full text-left text-lg text-secondary font-montserrat mq450:min-w-full">

      <Accordion summary="What is crowdfunding, and how does it work?" />
      <Accordion summary="How can I start a crowdfunding campaign on your platform?" />
      <Accordion summary="What payment methods are accepted?" />
    </div>
  );
};

export default HowToStart;
