// app/dashboard/questions/page.js
"use client"; // Mark this file as a Client Component

import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

const questionsData = [
  {
    id: 1,
    question: "What is the purpose of this product?",
    answer: "This product helps users improve their interviewing skills through mock interviews and constructive feedback. It is designed to build confidence and prepare candidates for real-life interview scenarios.",
  },
  {
    id: 2,
    question: "How many mock interviews can I create?",
    answer: "With the Free plan, you can create up to 3 mock interviews. If you subscribe to the Monthly plan, you can create unlimited interviews, providing ample opportunities to practice and refine your skills.",
  },
  {
    id: 3,
    question: "Is there any support available?",
    answer: "Yes, users on the Monthly plan have access to email support and exclusive app features, ensuring you have the assistance you need whenever you encounter any issues or have questions about your progress.",
  },
  {
    id: 4,
    question: "Can I retake interviews?",
    answer: "Absolutely! All users can retake interviews as many times as they wish. This allows you to practice and improve your performance based on the feedback received from previous sessions.",
  },
  {
    id: 5,
    question: "How does the pricing work?",
    answer: "The Free plan is available at no cost, allowing users to experience the core features. The Monthly plan, priced at ₹799 per month, offers additional benefits such as unlimited mock interviews and email support.",
  },
  {
    id: 6,
    question: "What types of interviews can I practice?",
    answer: "You can practice various types of interviews including behavioral, technical, and case interviews. Each type focuses on different skills needed to succeed in real interviews.",
  },
  {
    id: 7,
    question: "Does your product provide feedback on mock interviews?",
    answer: "No, our product does not provide direct feedback on mock interviews. Instead, it offers resources and tools for self-assessment and improvement based on user performance.",
  },
  {
    id: 8,
    question: "Can I schedule interviews at any time?",
    answer: "Yes, you can schedule mock interviews at your convenience. Our platform allows you to choose time slots that work best for you, accommodating your busy schedule.",
  },
  {
    id: 9,
    question: "What if I have technical issues during my interview?",
    answer: "If you encounter any technical issues during your interview, please reach out to our support team immediately. We're here to help ensure your interview goes smoothly.",
  },
  {
    id: 10,
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time through your account settings. If you have any trouble, our support team is available to assist you.",
  },
];

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {questionsData.map((item, index) => (
          <Collapsible key={item.id} open={openIndex === index} onOpenChange={() => toggleAnswer(index)} className='mt-2'>
            <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between items-center w-full cursor-pointer transition-colors duration-300 hover:bg-gray-100'>
              <span className='text-lg font-semibold'>{item.question}</span>
              <ChevronsUpDown className='h-5 w-5 transition-transform duration-300' style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='p-4 border rounded-lg bg-blue-50 text-sm text-blue-900 mt-2 transition-opacity duration-300 ease-in-out'>
                {item.answer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
