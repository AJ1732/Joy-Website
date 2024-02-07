import { useMemo } from "react";

const ContactUsBlog = ({
  newsletterSponsoringConta,
  organicPlantBasedSuperfoo,
  ourLoyalCompanionsDeserve,
  propHeight,
}) => {
  const organicPlantBasedSuperfoodStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-left text-[1.5rem] text-gray-100 font-poppins">
      <div className="self-stretch rounded-3xs bg-cornsilk shadow-[0px_60px_80px_-32px_rgba(0,_0,_0,_0.06)] flex flex-row items-end justify-center pt-[1.25rem] px-[0rem] pb-[0rem] box-border max-w-full z-[2]">
        <div className="h-[15.63rem] w-[21.88rem] relative rounded-3xs bg-cornsilk shadow-[0px_60px_80px_-32px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
        <img
          className="h-[14.38rem] w-[19.38rem] relative rounded-t-md rounded-b-none object-cover z-[3]"
          loading="eager"
          alt=""
          src={newsletterSponsoringConta}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.94rem]">
        <b
          className="self-stretch relative tracking-[-0.01em] leading-[2.13rem] z-[2] mq450:text-[1.19rem] mq450:leading-[1.69rem]"
          style={organicPlantBasedSuperfoodStyle}
        >
          {organicPlantBasedSuperfoo}
        </b>
        <div className="w-[20rem] h-[6rem] relative text-[1.13rem] tracking-[-0.01em] leading-[2rem] font-medium text-slategray inline-block z-[2]">
          {ourLoyalCompanionsDeserve}
        </div>
      </div>
    </div>
  );
};

export default ContactUsBlog;
