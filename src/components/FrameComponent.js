const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[3.13rem] max-w-full text-left text-[1.38rem] text-midnightblue font-poppins mq750:gap-[3.13rem]">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="w-[67.94rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1025:flex-wrap">
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[3.5rem] pl-[0rem] gap-[1.69rem] text-[2.75rem] text-gray-100 mq450:pr-[1.25rem] mq450:box-border">
            <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[3.38rem] font-bold font-inherit z-[2] mq450:text-[1.63rem] mq450:leading-[2rem] mq1025:text-[2.19rem] mq1025:leading-[2.69rem]">
              Let's Talk!
            </h1>
            <div className="flex flex-col items-start justify-start text-center text-[1.5rem] text-darkorchid-100">
              <b className="h-[2.25rem] relative tracking-[-0.01em] uppercase inline-block z-[3] mq450:text-[1.19rem]">
                Closer.
              </b>
              <div className="h-[6rem] relative text-[1.13rem] tracking-[-0.01em] leading-[2rem] font-medium text-slategray text-left inline-block z-[2]">
                <p className="m-0">closerpage@email.com</p>
                <p className="m-0">12 Hilton St, Manchester M1 1JF</p>
                <p className="m-0">+44 012 34 5678</p>
              </div>
            </div>
          </div>
          <div className="w-[22.06rem] flex flex-row items-start justify-start gap-[6.25rem] max-w-full mq450:flex-wrap mq450:gap-[6.25rem]">
            <div className="flex flex-col items-start justify-start gap-[2rem] min-w-[9.38rem] mq450:flex-1">
              <div className="h-[2.06rem] relative tracking-[-0.01em] font-semibold inline-block z-[2] mq450:text-[1.13rem]">
                WHAT WE DO
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.94rem] text-[1rem] text-slategray">
                <div className="h-[1.5rem] relative tracking-[-0.01em] font-medium inline-block z-[2]">
                  The Studio
                </div>
                <div className="relative tracking-[-0.01em] font-medium z-[2]">
                  Sponsoring
                </div>
                <div className="h-[1.5rem] relative tracking-[-0.01em] font-medium inline-block z-[2]">
                  Newsletter
                </div>
                <div className="h-[1.5rem] relative tracking-[-0.01em] font-medium inline-block z-[2]">
                  Contact Us
                </div>
                <div className="relative tracking-[-0.01em] font-medium z-[2]">
                  Blog
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[2rem] min-w-[6.44rem] mq450:flex-1">
              <div className="h-[2.06rem] relative tracking-[-0.01em] font-semibold inline-block z-[2] mq450:text-[1.13rem]">
                NEWS
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.94rem] text-[1rem] text-slategray">
                <div className="h-[1.5rem] relative tracking-[-0.01em] font-medium inline-block z-[2]">
                  Hot Stuff
                </div>
                <div className="h-[1.5rem] relative tracking-[-0.01em] font-medium inline-block z-[2]">
                  Perfect Place
                </div>
                <div className="relative tracking-[-0.01em] font-medium z-[2]">
                  Vintage
                </div>
                <div className="h-[1.5rem] relative tracking-[-0.01em] font-medium inline-block z-[2]">
                  Products
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <div className="h-[2.06rem] relative tracking-[-0.01em] font-semibold inline-block z-[2] mq450:text-[1.13rem]">
              FASHION
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.94rem] text-[1rem] text-slategray">
              <div className="relative tracking-[-0.01em] font-medium z-[2]">
                Style
              </div>
              <div className="h-[1.5rem] relative tracking-[-0.01em] font-medium inline-block z-[2]">
                Health
              </div>
              <div className="relative tracking-[-0.01em] font-medium z-[2]">
                Relationship
              </div>
              <div className="relative tracking-[-0.01em] font-medium z-[2]">{`Legal & Privacy`}</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 z-[2]"
        loading="eager"
        alt=""
        src="/vector-241.svg"
      />
      <div className="flex flex-col items-center justify-start gap-[1.25rem] max-w-full shrink-0 text-center text-[1.13rem] text-slategray">
        <div className="flex flex-row items-start justify-start gap-[1.25rem]">
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem] z-[2]"
            loading="eager"
            alt=""
            src="/002facebook.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem] z-[2]"
            loading="eager"
            alt=""
            src="/003instagram.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem] z-[2]"
            loading="eager"
            alt=""
            src="/004twitter.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem] z-[2]"
            loading="eager"
            alt=""
          />
        </div>
        <div className="relative tracking-[-0.01em] font-medium z-[2]">
          All rights reserved by © Besnik creative 2021
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
