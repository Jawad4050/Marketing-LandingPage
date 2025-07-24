"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const Price = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const monthlyPrice = "124.99€";
  const annualPrice = "1249.99€";

  const handlePricingToggle = (type: string) => {
    if (type === "monthly") {
      setIsMonthly(true);
    } else {
      setIsMonthly(false);
    }
  };

  return (
    <div className="bg-[url('/price-bg.png')] bg-center bg-cover lg:py-[80px] py-[40px] lg:px-0 p-[20px]">
      <div className="lg:w-[65%] mx-auto">
        <span className="block px-[16px] py-[10px] lg:mx-auto font-[600] text[15px] shadow-[0px_30px_30px_-18px_rgba(31,_9,_78,_50%)] bg-white border border-[#F1F1F1] text-transparent bg-clip-text bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-fit rounded-full">
          Pricing
        </span>
        <h4 className="text-[46px] font-AeonikProMedium font-[500] tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] lg:text-center mt-[32px]">Our Pricing</h4>
        <p className="text-[20px] text-[#686868] lg:text-center mt-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit, sed do eiusmod tempor incididunt ut labore et</p>
        <div className="lg:mx-auto flex items-center lg:justify-center my-[35px]">
          <div className="flex items-center">
            <Image
              src="../Avatar.svg"
              alt=""
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full border border-black object-cover"
            />
            <Image
              src="../Avatar-1.svg"
              alt=""
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full border border-black object-cover ms-[-12px]"
            />
            <Image
              src="../Avatar-2.svg"
              alt=""
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full border border-black object-cover ms-[-12px]"
            />
            <Image
              src="../Avatar.svg"
              alt=""
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full border border-black object-cover ms-[-12px]"
            />
            <Image
              src="../Avatar-1.svg"
              alt=""
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full border border-black object-cover ms-[-12px]"
            />
          </div>
          <div className="ms-4">
            <span className="text-[16px] text-black block text-start">
              +25’000 Creators<br />use Upstar daily
            </span>
          </div>
        </div>
        <div className="bg-[#242429] rounded-full text-white text-[16px] p-[4px] lg:w-fit w-full mx-auto">
          <button
            className={`px-[16px] py-[8px] w-[50%] rounded-full ${isMonthly ? "bg-[linear-gradient(to_right,#D174CD,#FF76AF,#FD918F,#FCAB73)]" : ""}`}
            onClick={() => handlePricingToggle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-[16px] py-[8px] w-[50%] rounded-full ${!isMonthly ? "bg-[linear-gradient(to_right,#D174CD,#FF76AF,#FD918F,#FCAB73)]" : ""}`}
            onClick={() => handlePricingToggle("annual")}
          >
            Annual
          </button>
        </div>
        <div className="lg:flex items-center gap-[8px] mt-[40px]">
          <div className="w-full rounded-[24px] bg-white p-[4px]">
            <div className="bg-[#FBFBFB] border border-[#E5E5E5] p-[24px] rounded-[24px]">
              <h5 className="mb-[10px] text-[#000000] text-[20px] font-AeonikProMedium font-[500] tracking-[-0.5px]">Premium</h5>
              <p className="text-[#242429] text-[13px]">
                Découvrez les performances de notre<br />
                multitude de services.
              </p>
            </div>
            <div className="p-[24px]">
              <span className="text-[32px] text-[#242429] font-AeonikProMedium font-[500] tracking-[-0.5px] leading-[52.9px] ">
                {isMonthly ? monthlyPrice : annualPrice}
              </span>
              <span className="text-[#242429] text-[13px]"> / {isMonthly ? "mois" : "an"}</span>
              <div className="mt-[24px]">
                <ul>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    1 Compte Instagram
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    25'000 actions / jour
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Mass vues de stories
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Mass likes de stories
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Interactions avec les sondages
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Ciblage avec IA
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Rapports journaliers
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Conseiller dédié sur whatsapp
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[400] text-[13px]'>
                    <span className='block w-[16px] h-[16px] text-black text-[14px] flex items-center justify-center rounded-full me-2'>
                      <IoMdClose />
                    </span>
                    Follow / Unfollow
                  </li>
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[400] text-[13px]'>
                    <span className='block w-[16px] h-[16px] text-black text-[14px] flex items-center justify-center rounded-full me-2'>
                      <IoMdClose />
                    </span>
                    Welcome DM
                  </li>
                </ul>
              </div>
              <button className="rounded-full w-full py-[12px] mt-[24px] flex items-center justify-center text-center bg-black text-white">
                Start 7 Day Free Trial<FaArrowRightLong className="ms-2" />
              </button>
            </div>
          </div>
          <div className="w-full lg:mt-0 mt-[12px] rounded-[24px] bg-[#242429] p-[4px]">
            <div className="bg-[#161518] border border-[rgb(255,255,255,10%)] p-[24px] rounded-[24px]">
              <h5 className="mb-[10px] text-[#ffffff] text-[20px] font-AeonikProMedium font-[500] tracking-[-0.5px]">Expert</h5>
              <p className="text-[#8B8B8B] text-[13px]">
                Découvrez les performances de notre<br />
                multitude de services.
              </p>
            </div>
            <div className="p-[24px]">
              <span className="text-[32px] text-[#ffffff] font-AeonikProMedium font-[500] tracking-[-0.5px]">
                {isMonthly ? monthlyPrice : annualPrice}
              </span>
              <span className="text-[#C6C6C6] text-[13px]"> / {isMonthly ? "mois" : "an"}</span>
              <div className="mt-[24px]">
                <ul>
                  <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    1 Compte Instagram
                  </li>
                  <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    25'000 actions / jour
                  </li>
                  <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Mass vues de stories
                  </li>
                  <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Mass likes de stories
                  </li>
                  <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Interactions avec les sondages
                  </li>
                  <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Ciblage avec IA
                  </li>
                  <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Rapports journaliers
                  </li>
                  <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                      <FaCheck />
                    </span>
                    Conseiller dédié sur whatsapp
                  </li>
                  <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[13px]'>
                    <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                      <IoMdClose />
                    </span>
                    Follow / Unfollow
                  </li>
                  <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[13px]'>
                    <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                      <IoMdClose />
                    </span>
                    Welcome DM
                  </li>
                </ul>
              </div>
              <button className="rounded-full w-full py-[12px] mt-[24px] flex items-center justify-center font-AeonikProMedium font-[500] tracking-[0px] text-center bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] text-white">
                Start 7 Day Free Trial <FaArrowRightLong className="ms-2" />

              </button>
            </div>
          </div>
        </div>
        <div className="p-[24px] rounded-[24px] bg-white mt-[12px] shadow-[0px_30px_30px_-18px_rgba(31,_9,_78,_14%)]">
          <span className="text-[20px] block mb-[24px] text-[#000000]  font-AeonikProMedium font-[500] tracking-[-0.5px]">Consulting & Campaigns</span>
          <span className='block h-[1px] w-full border border-dashed border-[#E5E5E5] my-[30px]'></span>
          <p className="text-[13px] text-[#242429] mb-[24px]">Découvrez les performances de notre multitude de services.</p>
          <div className="lg:flex">
            <div>
              <div className="lg:flex items-center mt-[12px]">
                  <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Offres multi comptes
                  </li>
                  <li className='text-[#181818] lg:ms-2 font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Stratégies virales
                  </li>
                  <li className='text-[#181818] lg:ms-2 font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Mediace : mass dm
                  </li>
              </div>
              <div className="lg:flex items-center">
                  <li className='text-[#181818] font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Mediace : mother / slave
                  </li>
                  <li className='text-[#181818] lg:ms-2 font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Mediace : scraping
                  </li>
                  <li className='text-[#181818] lg:ms-2 font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Chatbot
                  </li>
              </div>
            </div>
            <div className="mt-auto ms-auto">
              <Link href="" className="bg-[#242429] hover:bg-[#242429]  font-AeonikProMedium font-[500] tracking-[-0.5px] lg:w-fit w-full text-center justify-center flex items-center rounded-full px-[18px] py-[12.5px]">Book a Call<FaAngleRight className="ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
