import { useMemo } from "react";

const DesignerFreedom = ({
  mEDITATION,
  theDesignerWhoFreedThe,
  nUTRITION,
  wereAwareAchievingThat,
  propPadding,
  propWidth,
  propRight,
  propWidth1,
  propPadding1,
  propWidth2,
  propRight1,
  propHeight,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const nutritionWeightLossStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding1,
    };
  }, [propWidth1, propPadding1]);

  const vintageHotStuffStyle = useMemo(() => {
    return {
      width: propWidth2,
      right: propRight1,
    };
  }, [propWidth2, propRight1]);

  const wereAwareAchievingStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[3.75rem] text-center text-[0.88rem] text-darkorchid-100 font-poppins mq750:flex-wrap mq750:gap-[3.75rem]">
      <div className="flex-1 rounded-3xs bg-white shadow-[0px_60px_80px_-32px_rgba(0,_0,_0,_0.06)] flex flex-col items-center justify-start pt-[1.13rem] px-[1.13rem] pb-[1.31rem] box-border gap-[1.25rem] min-w-[10.56rem] z-[3]">
        <div className="w-[16.25rem] h-[11.25rem] relative rounded-3xs bg-white shadow-[0px_60px_80px_-32px_rgba(0,_0,_0,_0.06)] hidden" />
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.25rem] gap-[0.38rem]">
          <div
            className="flex flex-row items-center justify-center pt-[0.19rem] px-[0.5rem] pb-[0.13rem] relative z-[1]"
            style={groupDivStyle}
          >
            <div
              className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0.06rem] bottom-[0rem] left-[0rem] rounded bg-darkorchid-200"
              style={nutritionWeightLossStyle}
            />
            <div className="h-[1.31rem] relative tracking-[-0.01em] font-semibold inline-block z-[1]">
              {mEDITATION}
            </div>
          </div>
          <b className="self-stretch h-[4.25rem] relative text-[1.5rem] tracking-[-0.01em] leading-[2.13rem] inline-block text-gray-100 text-left z-[1] mq450:text-[1.19rem] mq450:leading-[1.69rem]">
            {theDesignerWhoFreedThe}
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.25rem] text-left text-slategray">
          <div className="relative tracking-[-0.01em] font-medium z-[1]">
            OCT 04, 2021
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-3xs bg-white shadow-[0px_60px_80px_-32px_rgba(0,_0,_0,_0.06)] flex flex-col items-center justify-start pt-[1.13rem] px-[1.13rem] pb-[1.31rem] box-border gap-[1.25rem] min-w-[10.56rem] z-[3]">
        <div className="w-[16.25rem] h-[11.25rem] relative rounded-3xs bg-white shadow-[0px_60px_80px_-32px_rgba(0,_0,_0,_0.06)] hidden" />
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.25rem] gap-[0.38rem]">
          <div
            className="w-[5.63rem] flex flex-row items-center justify-center pt-[0.19rem] px-[0.13rem] pb-[0.13rem] box-border relative z-[1]"
            style={groupDiv1Style}
          >
            <div
              className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-darkorchid-200"
              style={vintageHotStuffStyle}
            />
            <div className="h-[1.31rem] relative tracking-[-0.01em] font-semibold inline-block z-[1]">
              {nUTRITION}
            </div>
          </div>
          <b
            className="self-stretch h-[4.25rem] relative text-[1.5rem] tracking-[-0.01em] leading-[2.13rem] inline-block text-gray-100 text-left z-[1] mq450:text-[1.19rem] mq450:leading-[1.69rem]"
            style={wereAwareAchievingStyle}
          >
            {wereAwareAchievingThat}
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.25rem] text-left text-slategray">
          <div className="relative tracking-[-0.01em] font-medium z-[1]">
            OCT 04, 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerFreedom;
