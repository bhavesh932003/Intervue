"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { Intervue } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnsSection from './_components/RecordAnsSection';
import { useRouter } from 'next/navigation';

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const router = useRouter();

  useEffect(() => {
    const fetchInterviewDetails = async () => {
      const result = await db.select().from(Intervue).where(eq(Intervue.mockId, params.interviewId));
      const jsonMockResp = JSON.parse(result[0].jsonMockResp);
      setMockInterviewQuestion(jsonMockResp);
      setInterviewData(result[0]);
    };

    fetchInterviewDetails();
  }, [params.interviewId]);

  useEffect(() => {
    if (timeLeft <= 0) {
      alert('Interview time is up!');
      router.push(`/dashboard/interview/${params.interviewId}/feedback`);
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, params.interviewId, router]);

  const handleNextQuestion = () => {
    if (activeQuestionIndex < mockInterviewQuestion.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <QuestionsSection 
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          setActiveQuestionIndex={setActiveQuestionIndex}
          timeLeft={timeLeft} // Pass timeLeft here
        />
        <RecordAnsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className='flex justify-end gap-6'>
        {activeQuestionIndex > 0 && (
          <Button onClick={handlePreviousQuestion}>
            Previous Question
          </Button>
        )}
        {activeQuestionIndex < mockInterviewQuestion.length - 1 ? (
          <Button onClick={handleNextQuestion}>
            Next Question
          </Button>
        ) : (
          <Button onClick={() => router.push(`/dashboard/interview/${interviewData?.mockId}/feedback`)}>
            End Interview
          </Button>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
