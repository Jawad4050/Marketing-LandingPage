import Image from "next/image";
import Link from "next/link";
import { BiSolidZap } from "react-icons/bi";
import { IoLogoInstagram } from 'react-icons/io';

const DJ = () => {
    return (
        <div className="lg:w-[65%] mx-auto">
            <div className="lg:flex lg:mt-[80px] mt-[40px] lg:px-0 px-[20px] items-center pb-[40px] border-b border-[#E4E1E9]">
                <div className="lg:w-[50%]">
                <span className="block px-[16px] py-[10px] mb-5 font-[600] text[15px] shadow-[0px_30px_30px_-18px_rgba(31,_9,_78,_50%)] bg-white border border-[#F1F1F1] text-transparent bg-clip-text bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-fit rounded-full">For DJ’s</span>
                    <h3 className="text-black lg:text-[46px] text-[36px] mb-[24px] font-[500] font-[AeonikProMedium]">10’000+ <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)]">House DJ’s</span><br />use  daily</h3>
                    <p className="mb-[24px] text-[20px] font-[500] text-[#686868]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <p className="mb-[24px] text-[20px] font-[500] text-[#686868]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <button className="border border-black rounded-full font-AeonikProMedium font-[500] px-[20px] py-[12px] bg-[linear-gradient(to_right,#373737,#171717)] flex items-center text-white lg:mb-0 mb-5"><BiSolidZap className="me-2" />Start 7 Day Free Trial</button>
                </div>
                <div className="lg:w-[50%]">
                    <div className="lg:w-[429px] w-full h-[429px] border-[8px] border-white rounded-[24px] overflow-hidden ms-auto shadow-[0px_32px_32px_-16px_rgba(31,_9,_78,_24%)]">
                        <Image src="/dj.svg" alt="" width={450} height={550} className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
            <div className="text-center py-[40px]">
                <h4 className="text-[24px] mb-[24px] text-black font-[600] font-AeonikProRegular tracking-[-0.7px]">Title for DJ’s</h4>
                <p className="text-[20px] mt-[24px] font-[400] text-[#686868]">Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit, sed do eiusmod tempor incididunt ut labore et</p>
                <div className="lg:flex items-center gap-[8px] mt-[40px]">
                    <div className="p-[24px] w-full rounded-[16px] bg-white border border-[#EFEBF2] shadow-[0px_32px_32px_-16px_rgba(31,_9,_78,_9%)]">
                        <div className="w-full text-start border border-[#E5E5E5] rounded-[16px] overflow-hidden">
                            <div className="bg-[#FBFBFB] p-[20px]">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="flex items-center">
                                            <div className="w-[35px] h-[35px]">
                                                <Image
                                                    src="/Avatar.svg"
                                                    alt="{name}"
                                                    className="object-cover w-[35px] h-[35px] rounded-full"
                                                    width={35}
                                                    height={35}
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <span className="block text-[#181818] font-[400] text-[13px] lg:whitespace-nowrap lg:max-w-[110px] max-w-full overflow-hidden">Saint Chopard</span>
                                                <span className="block text-[#696969] text-[13px] mt-[-2px]">
                                                    @saint.chopard
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[#696969] text-[18px]">
                                        <IoLogoInstagram />
                                    </div>
                                </div>
                                <span className="my-[12px] block text-[#181818] text-[13px]">Yanis Halaoui</span>
                                <div className="text-[13px] text-[#696969]">
                                    <Link className="text-[#0186C8] hover:underline" href={""}>
                                        Entrepreneuriat
                                    </Link>
                                    <span className="block">Paris / Genève / French Riviera</span>
                                    <span className="block">
                                        Private <Link className="text-[#0186C8] hover:underline" href={""}>
                                            @yanishalaoui
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="flex bg-white border-t border-[#E5E5E5]">
                                <div className="border-r border-[#E5E5E5] w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/image-icon.svg"} alt="" width={16} height={16} className="me-[6px]" /> 21
                                    </div>
                                    <span>Posts</span>
                                </div>
                                <div className="border-r border-[#E5E5E5] w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/followers.svg"} alt="" width={16} height={16} className="me-[6px]" /> 21
                                    </div>
                                    <span>Followers</span>
                                </div>
                                <div className="w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/following.svg"} alt="" width={16} height={16} className="me-[6px]" /> 23
                                    </div>
                                    <span>Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[24px] w-full rounded-[16px] bg-white border border-[#EFEBF2] shadow-[0px_32px_32px_-16px_rgba(31,_9,_78,_9%)]">
                        <div className="w-full text-start border border-[#E5E5E5] rounded-[16px] overflow-hidden">
                            <div className="bg-[#FBFBFB] p-[20px]">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="flex items-center">
                                            <div className="w-[35px] h-[35px]">
                                                <Image
                                                    src="/Avatar.svg"
                                                    alt="{name}"
                                                    className="object-cover w-[35px] h-[35px] rounded-full"
                                                    width={35}
                                                    height={35}
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <span className="block text-[#181818] text-[13px] lg:whitespace-nowrap lg:max-w-[110px] max-w-full overflow-hidden">Saint Chopard</span>
                                                <span className="block text-[#696969] text-[13px] mt-[-2px]">
                                                    @saint.chopard
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[#696969] text-[18px]">
                                        <IoLogoInstagram />
                                    </div>
                                </div>
                                <span className="my-[12px] block text-[#181818] text-[13px]">Yanis Halaoui</span>
                                <div className="text-[13px] text-[#696969]">
                                    <Link className="text-[#0186C8] hover:underline" href={""}>
                                        Entrepreneuriat
                                    </Link>
                                    <span className="block">Paris / Genève / French Riviera</span>
                                    <span className="block">
                                        Private <Link className="text-[#0186C8] hover:underline" href={""}>
                                            @yanishalaoui
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="flex bg-white border-t border-[#E5E5E5]">
                                <div className="border-r border-[#E5E5E5] w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/image-icon.svg"} alt="" width={16} height={16} className="me-[6px]" /> 21
                                    </div>
                                    <span>Posts</span>
                                </div>
                                <div className="border-r border-[#E5E5E5] w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/followers.svg"} alt="" width={16} height={16} className="me-[6px]" /> 21
                                    </div>
                                    <span>Followers</span>
                                </div>
                                <div className="w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/following.svg"} alt="" width={16} height={16} className="me-[6px]" /> 23
                                    </div>
                                    <span>Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[24px] w-full rounded-[16px] bg-white border border-[#EFEBF2] shadow-[0px_32px_32px_-16px_rgba(31,_9,_78,_9%)]">
                        <div className="w-full text-start border border-[#E5E5E5] rounded-[16px] overflow-hidden">
                            <div className="bg-[#FBFBFB] p-[20px]">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="flex items-center">
                                            <div className="w-[35px] h-[35px]">
                                                <Image
                                                    src="/Avatar.svg"
                                                    alt="{name}"
                                                    className="object-cover w-[35px] h-[35px] rounded-full"
                                                    width={35}
                                                    height={35}
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <span className="block text-[#181818] text-[13px] lg:whitespace-nowrap lg:max-w-[110px] max-w-full overflow-hidden">Saint Chopard</span>
                                                <span className="block text-[#696969] text-[13px] mt-[-2px]">
                                                    @saint.chopard
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[#696969] text-[18px]">
                                        <IoLogoInstagram />
                                    </div>
                                </div>
                                <span className="my-[12px] block text-[#181818] text-[13px]">Yanis Halaoui</span>
                                <div className="text-[13px] text-[#696969]">
                                    <Link className="text-[#0186C8] hover:underline" href={""}>
                                        Entrepreneuriat
                                    </Link>
                                    <span className="block">Paris / Genève / French Riviera</span>
                                    <span className="block">
                                        Private <Link className="text-[#0186C8] hover:underline" href={""}>
                                            @yanishalaoui
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="flex bg-white border-t border-[#E5E5E5]">
                                <div className="border-r border-[#E5E5E5] w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/image-icon.svg"} alt="" width={16} height={16} className="me-[6px]" /> 21
                                    </div>
                                    <span>Posts</span>
                                </div>
                                <div className="border-r border-[#E5E5E5] w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/followers.svg"} alt="" width={16} height={16} className="me-[6px]" /> 21
                                    </div>
                                    <span>Followers</span>
                                </div>
                                <div className="w-full text-[#696969] text-[13px] py-[11px] text-center">
                                    <div className="flex justify-center text-[#000]">
                                        <Image src={"/following.svg"} alt="" width={16} height={16} className="me-[6px]" /> 23
                                    </div>
                                    <span>Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DJ;