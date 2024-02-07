import ContactUsBlog from "./ContactUsBlog";

const CommunityMedicine = () => {
  return (
    <div className="w-[70.63rem] flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[5.56rem] box-border gap-[3.75rem] max-w-full text-center text-[2.75rem] text-gray-100 font-poppins mq1125:gap-[3.75rem]">
      <div className="w-[31.19rem] flex flex-col items-center justify-start gap-[0.63rem] max-w-full">
        <h1 className="m-0 self-stretch h-[6.75rem] relative text-inherit tracking-[-0.01em] leading-[3.38rem] font-bold font-inherit inline-block z-[2] mq450:text-[1.63rem] mq450:leading-[2rem] mq1025:text-[2.19rem] mq1025:leading-[2.69rem]">
          Explore the end of life collective
        </h1>
        <div className="w-[28.69rem] h-[4rem] relative text-[1.13rem] tracking-[-0.01em] leading-[2rem] font-medium text-slategray inline-block max-w-full z-[2]">
          A community of care givers and seekers to help you and your family
          through one of life.
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.63rem] box-border gap-[2.5rem] max-w-full grid-cols-[repeat(3,_minmax(262px,_1fr))] text-left text-[1.5rem] mq750:gap-[2.5rem] mq750:grid-cols-[minmax(262px,_1fr)] mq1025:justify-center mq1025:grid-cols-[repeat(2,_minmax(262px,_455px))]">
        <ContactUsBlog
          newsletterSponsoringConta="/rectangle-3480@2x.png"
          organicPlantBasedSuperfoo="Organic, Plant-Based Superfoods"
          ourLoyalCompanionsDeserve="Our loyal companions deserve the best. That’s why we’ve created treats with natural certified organic."
        />
        <ContactUsBlog
          newsletterSponsoringConta="/rectangle-3480-1@2x.png"
          organicPlantBasedSuperfoo="From one dog lover to another"
          ourLoyalCompanionsDeserve="Fetching Fields began when our founder noticed a clear lack in healthful and socially responsible."
          propHeight="4.25rem"
        />
        <ContactUsBlog
          newsletterSponsoringConta="/rectangle-3480-2@2x.png"
          organicPlantBasedSuperfoo="Dig through our human grade wellness and activity"
          ourLoyalCompanionsDeserve="Based treat products to keep your pup happy and healthy. Our loyal companions deserve the best."
          propHeight="unset"
        />
      </div>
      <button className="cursor-pointer [border:none] pt-[1.38rem] pb-[1.31rem] pr-[2.31rem] pl-[2.38rem] bg-darkorchid-100 rounded-16xl shadow-[0px_20px_30px_-16px_rgba(103,_46,_188,_0.3)] flex flex-row items-start justify-start gap-[0.63rem] whitespace-nowrap z-[2] hover:bg-mediumslateblue">
        <div className="h-[4.38rem] w-[13.13rem] relative rounded-16xl bg-darkorchid-100 shadow-[0px_20px_30px_-16px_rgba(103,_46,_188,_0.3)] hidden" />
        <div className="h-[1.69rem] relative text-[1.13rem] tracking-[-0.01em] font-semibold font-poppins text-white text-right inline-block z-[1]">
          Read more
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

export default CommunityMedicine;
