import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const HeroHeader = () => {
    return (
      <div>
        <div className="relative ">
          <div className="py-[47px] lg:px-0 px-[20px] lg:text-center mx-auto border-x border-[#24252A] lg:w-[65%] bg-[url('/bg-herosection.svg')] bg-cover bg-center relative">
            <div className="w-[5px] h-[5px] rounded-full lg:block hidden border border-[#5F5F5F] bg-[#363639] absolute left-[-3px] z-[9999] top-[-3px]"></div>
            <div className="w-[5px] h-[5px] rounded-full lg:block hidden border border-[#5F5F5F] bg-[#363639] absolute right-[-3px] z-[9999] top-[-3px]"></div>
            <div className="w-[5px] h-[5px] rounded-full lg:block hidden border border-[#5F5F5F] bg-[#363639] absolute left-[-3px] z-[9999] bottom-[-3px]"></div>
            <div className="w-[5px] h-[5px] rounded-full lg:block hidden border border-[#5F5F5F] bg-[#363639] absolute right-[-3px] z-[9999] bottom-[-3px]"></div>
            <h1 className="lg:text-[66px] text-[30px] lg:flex lg:justify-center items-center mb-0 font-BrittiSansSemiBold font-[400] tracking-[1px] lg:leading-[80px]">Real and Qualified <Image src="insta-header.svg" alt="" width={61} height={61} className="ms-[20px] lg:block hidden" /></h1>
            <h1 className="lg:text-[66px] text-[30px] flex lg:justify-center items-center mb-0 font-BrittiSansSemiBold font-[500] tracking-[1px] lg:leading-[80px]">Instagram Followers</h1>
            <p className="lg:text-[18px] text-[14px] font-[300] font-[400] mt-[16px] text-[#ADB0B9]">Sed ut perspiciatis <span className="text-white">unde omnis iste</span> natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
            <div className="mx-auto flex items-center lg:justify-center my-[35px]">
              <div className='flex items-center'>
                <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover' />
                <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                <Image src="../Avatar-2.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
              </div>
              <div className="ms-4">
                <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                  <IoStar className="text-[#D174CD]" />
                  <IoStar className="text-[#D174CD]" />
                  <IoStar className="text-[#D174CD]" />
                  <IoStar className="text-[#D174CD]" />
                  <IoStar className="text-[#D174CD]" />
                </div>
                <span className='text-[16px] font-[500] text-white block text-start'>+25’000 users</span>
              </div>
            </div>
            <Link href="" className="text-[16px]  font-AeonikProMedium font-[500] tracking-[-0.1px] rounded-full bg-white text-black block w-fit lg:mx-auto mt-4 px-[20px] py-[10px] hover:bg-[#FFF2F2] flex items-center justify-center" >Start 7 Day Free Trial<FaAngleRight className="ms-[5px]" /></Link>
          </div>
          <div className="absolute w-full bottom-0 left-0 h-[1px] bg-[#1d1c1f] bg-[linear-gradient(to_right,rgb(36,37,42,0%),#24252A,#24252A,#24252A,rgb(36,37,42,0%))]"></div>
        </div>
        <div className="relative ">
          <div className="bg-[#242429] lg:w-[65%] mx-auto p-[24px] border-x border-[#24252A] relative">

            <div className="w-[5px] h-[5px] rounded-full lg:block hidden border border-[#5F5F5F] bg-[#363639] absolute left-[-3px] z-[9999] bottom-[-3px]"></div>
            <div className="w-[5px] h-[5px] rounded-full lg:block hidden border border-[#5F5F5F] bg-[#363639] absolute right-[-3px] z-[9999] bottom-[-3px]"></div>
            <div className="h-[450px] w-full rounded-[24px] bg-[#424242]"></div>
          </div>
          <div className="absolute w-full bottom-0 left-0 h-[1px] bg-[#1d1c1f] bg-[linear-gradient(to_right,rgb(36,37,42,0%),#24252A,#24252A,#24252A,rgb(36,37,42,0%))]"></div>
        </div>
        <div className="relative ">
          <div className="lg:w-[65%] lg:flex items-center mx-auto border-x border-[#24252A]">
            <div className="flex items-center w-full">
              <div className="w-full py-[24px] text-center border-r-[0.1px] border-[#3D3D41] relative">
                <span className="block text-[18px] font-[400] text-[#999999]">Stats</span>
                <span className="block text-[33px] font-BrittiSansSemiBold font-[500] mt-[12px]">960</span>
                <div className="w-[5px] h-[5px] rounded-full lg:block hidden border border-[#5F5F5F] bg-[#363639] absolute left-[-3px] z-[9999] bottom-[-3px]"></div>
                
              </div>
              <div className="w-full py-[24px] text-center border-r-[0.1px] border-[#3D3D41]">
                <span className="block text-[18px] font-[400] text-[#999999]">Stats</span>
                <span className="block text-[33px] font-BrittiSansSemiBold font-[500] mt-[12px]">960</span>
              </div>
            </div>
            <div className="absolute w-full top-1/2 lg:hidden block left-0 h-[1px] bg-[#1d1c1f] bg-[linear-gradient(to_right,rgb(36,37,42,0%),#24252A,#24252A,#24252A,rgb(36,37,42,0%))]"></div>
            <div className="flex items-center w-full">
              <div className="w-full py-[24px] text-center border-r-[0.1px] border-[#3D3D41]">
                <span className="block text-[18px] font-[400] text-[#999999]">Stats</span>
                <span className="block text-[33px] font-BrittiSansSemiBold font-[500] mt-[12px]">960</span>
              </div>
              <div className="w-full py-[24px] text-center relative">
                <span className="block text-[18px] font-[400] text-[#999999]">Stats</span>
                <span className="block text-[33px] font-BrittiSansSemiBold font-[500] mt-[12px]">100+</span>
                <div className="w-[5px] h-[5px] rounded-full lg:block hidden border border-[#5F5F5F] bg-[#363639] absolute right-[-3px] z-[9999] bottom-[-3px]"></div>
              </div>
            </div>
          </div>
          <div className="absolute w-full bottom-0 lg:block hidden left-0 h-[1px] bg-[#1d1c1f] bg-[linear-gradient(to_right,rgb(36,37,42,0%),#24252A,#24252A,#24252A,rgb(36,37,42,0%))]"></div>
        </div>
      </div>
    );
  };
  
  export default HeroHeader;