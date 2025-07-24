import Image from "next/image";

const Benefits = () => {
    return (
        <div className="lg:w-[65%] lg:px-0 px-[20px] mx-auto">
            <span className="block px-[16px] py-[10px] lg:mx-auto font-[600] text[15px] shadow-[0px_30px_30px_-18px_rgba(31,_9,_78,_50%)] bg-white border border-[#F1F1F1] text-transparent bg-clip-text bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-fit rounded-full">Benefits</span>
            <h4 className="lg:text-[46px] text-[36px] font-AeonikProMedium font-[500] tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] lg:text-center mt-[32px]">Engage <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)]">leads</span> with any<br/> type of content</h4>
            <p className="text-[20px] font-[500] text-[#686868] lg:text-center mt-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod tempor incididunt ut labore et</p>
            <Image src="/benefits.webp" alt="" width={1000} height={400} className="w-full mt-[40px] lg:block hidden" />
            <Image src="/mobile-benefits.webp" alt="" width={1000} height={400} className="w-full mt-[40px] lg:hidden block " />
        </div>
    );
};

export default Benefits;