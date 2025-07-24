import Image from "next/image";
import { BiSolidZap } from "react-icons/bi";

const CallToAction = () => {
    return (
        <div className="lg:w-[65%] w-[90%] mx-auto">
            <div className="rounded-[24px] bg-[url('/calltoaction-bg.png')] lg:p-[73px] p-5 bg-center bg-cover overflow-hidden">
                <h3 className="lg:text-[66px] text-[36px] mb-[24px]  font-AeonikProMedium font-[500] tracking-[-0.5px] lg:leading-[52.9px] text-[#ffffff] lg:text-center">Call to Action</h3>
                <p className="text-[18px] text-[rgb(255,255,255,75%)] lg:text-center mt-[24px] mb-[40px]">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor</p>
                <div className="mx-auto flex items-center lg:justify-center my-[35px]">
                    <div className='flex items-center'>
                    <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full border border-black object-cover' />
                    <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full border border-black object-cover ms-[-12px]' />
                    <Image src="../Avatar-2.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full border border-black object-cover ms-[-12px]' />
                    <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full border border-black object-cover ms-[-12px]' />
                    <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full border border-black object-cover ms-[-12px]' />
                    </div>
                    <div className="ms-4">
                        <span className='text-[16px] text-white block text-start font-AeonikProMedium font-[500] tracking-[-0px]'>+25’000 Creators<br/>use  daily</span>
                    </div>
                </div>
                <button className="rounded-full lg:w-fit font-AeonikProMedium font-[500] tracking-[-0.1px] w-full px-[20px] py-[12px] flex items-center justify-center mx-auto mt-[24px] text-center bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] text-white"><BiSolidZap className="me-2" />Start 7 Day Free Trial</button>
            </div>
        </div>
    );
};

export default CallToAction;