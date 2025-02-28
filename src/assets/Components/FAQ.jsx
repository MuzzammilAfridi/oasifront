import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of furniture do you offer?",
      answer: "We offer a wide range of furniture, including modern, classic, and custom pieces for homes and offices.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we provide international shipping to select countries. Additional shipping charges may apply.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase, provided the item is in its original condition.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, UPI, and net banking.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-[20px] leading-[24.2px] font-semibold text-[#2e2f33] mb-8">We have got the answers to your questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 flex justify-between items-center"
            >
              <span className="text-[16px] font-medium text-[#2e2f33]">{faq.question}</span>
              <span className="ml-4">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="pl-4 pb-4 font-normal text-[13px] leading-[15.73px]  text-[#5f6980]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
