import GroupComponent from "./GroupComponent";
import Accordion from "./accordion";

const ProjectAccessFrame = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[370px] max-w-full text-left text-lg text-secondary font-montserrat mq450:min-w-full">
      <Accordion summary="What are the benefits I would get?" />
      <Accordion summary="How do I know if a project is legitimate and trustworthy?" />
      <Accordion summary="Do you provide any resources or guidance for campaign creators?" />
      <Accordion summary="How this technology works?" />
    </div>
  );
};

export default ProjectAccessFrame;
