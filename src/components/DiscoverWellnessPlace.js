import { useMemo } from "react";

const DiscoverWellnessPlace = ({
  getStarted,
  propFlexDirection,
  propPadding,
  propPadding1,
}) => {
  const discoverWellnessPlaceStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      padding: propPadding,
    };
  }, [propFlexDirection, propPadding]);

  const groupButtonStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className="flex flex-col items-start justify-start pt-[2.63rem] px-[0rem] pb-[0rem]"
      style={discoverWellnessPlaceStyle}
    >
      <button
        className="cursor-pointer [border:none] pt-[1.38rem] pb-[1.31rem] pr-[2.25rem] pl-[2.31rem] bg-darkorchid-100 rounded-16xl shadow-[0px_20px_30px_-16px_rgba(103,_46,_188,_0.3)] flex flex-row items-start justify-start gap-[0.63rem] whitespace-nowrap z-[3] hover:bg-mediumslateblue"
        style={groupButtonStyle}
      >
        <div className="h-[4.38rem] w-[13.13rem] relative rounded-16xl bg-darkorchid-100 shadow-[0px_20px_30px_-16px_rgba(103,_46,_188,_0.3)] hidden" />
        <div className="h-[1.69rem] relative text-[1.13rem] tracking-[-0.01em] font-semibold font-poppins text-white text-right inline-block z-[1]">
          {getStarted}
        </div>
        <img
          className="h-[1.63rem] w-[1.63rem] relative object-contain z-[1]"
          alt=""
          src="/group-17379-2@2x.png"
        />
      </button>
    </div>
  );
};

export default DiscoverWellnessPlace;
