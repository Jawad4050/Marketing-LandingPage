"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAndAnswers: FAQItem[] = [
    {
      question: "Question 1",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 2",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 3",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 4",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 5",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 6",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
  ];

  return (
    <div className="lg:w-[65%] mx-auto py-[80px] lg:px-0 px-[20px]">
      <span className="block px-[16px] py-[10px] lg:mx-auto font-[600] text[15px] shadow-[0px_30px_30px_-18px_rgba(31,_9,_78,_50%)] bg-white border border-[#F1F1F1] text-transparent bg-clip-text bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)] w-fit rounded-full">FAQ</span>
      <h4 className="lg:text-[46px] text-[36px] font-AeonikProMedium font-[500] tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] lg:text-center mt-[32px]">Your Questions - Our <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A06DF6,#D174CD,#FF76AF,#FD918F,#FCAB73)]">Answers</span></h4>
      <p className="text-[20px] text-[#686868] font-[500] lg:text-center mt-[24px] mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit, sed do eiusmod tempor incididunt ut labore et</p>
      <div>
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="bg-white text-[#020816] rounded-[16px] shadow-[0px_30px_30px_-18px_rgba(31,_9,_78,_6%)] mb-[8px] p-[24px] text-[15.25px]">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(index)}>
              <span className="block font-[400]">{item.question}</span>
              <span className="block text-[20px]">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-5">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
