import DesignerFreedom from "./DesignerFreedom";

const GroupLines = () => {
  return (
    <div className="self-stretch flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[0.63rem] box-border gap-[3.75rem] max-w-full text-center text-[0.88rem] text-darkorchid-100 font-poppins mq750:gap-[3.75rem] mq1025:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start min-w-[23.13rem] min-h-[50.13rem] max-w-full mq450:min-w-full mq1025:min-h-[auto]">
        <img
          className="self-stretch h-[42.19rem] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover z-[2]"
          loading="eager"
          alt=""
          src="/rectangle-17-4@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[15.38rem] min-w-[23.56rem] max-w-full mq450:gap-[15.38rem] mq450:min-w-full mq750:gap-[15.38rem]">
        <DesignerFreedom
          mEDITATION="MEDITATION"
          theDesignerWhoFreedThe="The Designer Who Freed the"
          nUTRITION="NUTRITION"
          wereAwareAchievingThat="We’re aware achieving that"
        />
        <DesignerFreedom
          mEDITATION="HEALTH"
          theDesignerWhoFreedThe="We believe that health is much "
          nUTRITION="WEIGHT LOSS"
          wereAwareAchievingThat="Whether your goal is a straight"
          propPadding="0.19rem 0.13rem 0.13rem"
          propWidth="4.75rem"
          propRight="0rem"
          propWidth1="unset"
          propPadding1="0.19rem 0.5rem 0.13rem"
          propWidth2="calc(100% - 5px)"
          propRight1="0.31rem"
          propHeight="unset"
        />
      </div>
    </div>
  );
};

export default GroupLines;
