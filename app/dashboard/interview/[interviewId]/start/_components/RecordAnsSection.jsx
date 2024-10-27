"use client"
import Webcam from 'react-webcam'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text'
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModel'
import { useUser } from '@clerk/nextjs'
import moment, { duration } from 'moment'
import { UserAnswer } from '@/utils/schema'
import { db } from '@/utils/db'

function RecordAnsSection({mockInterviewQuestion,activeQuestionIndex,interviewData}) {
    const [userAnswer,setUserAnswer]=useState('');
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(()=>{
    results.map((result)=>(
        setUserAnswer(prevAns=>prevAns+result?.transcript)
    ))
},[results])

useEffect(()=>{
  if(!isRecording&&userAnswer.length>10){
    UpdateUserAnswer();
  }
},[userAnswer])

   const StartStopRecording=async()=>{
    if(isRecording){
      stopSpeechToText();
      }
    else {
      startSpeechToText();
    }
   }
   const UpdateUserAnswer=async()=>{
    setLoading(true)
    const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
      ", User Answer:"+userAnswer+",Dpending upon the question and user's answer for given interview question"+
      "please give us rating for answer and answer feedback as area of improvement if any"+
      "in just 3-5 lines to improve it in JSON format with rating field and feedback field";

      const result=await chatSession.sendMessage(feedbackPrompt);

      const mockJsonResp=(result.response.text()).replace('```json', '').replace('```', '')

      console.log(mockJsonResp);
      const JsonFeedbackResp=JSON.parse(mockJsonResp);

      const resp=await db.insert(UserAnswer)
      .values({
        mockIdRef:interviewData?.mockId,
        question:mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns:userAnswer,
        feedback:JsonFeedbackResp?.feedback,
        rating:JsonFeedbackResp?.rating,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        createdt:moment().format('DD-MM-YYYY')
      })
      if(resp){
        toast.success('User Answer Recorded Successfully', {duration:1000})
      setUserAnswer('');
      setResults([]);
      }
      setResults([]);
      setLoading(false);

   }
    
  return (
    <div className='flex items-center justify-center flex-col'>

    <div  className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
    <Image 
  src={'/webc.png'} 
  width={200} 
  height={200} 
  className='absolute' 
  alt="Descriptive text for the image" 
/>

  <Webcam 
  mirrored={true}
  style={{
    height:300,
    width:'100%',
    zIndex:10,
  }}
  />
      
    </div>
    <Button 
    disabled={loading}
    variant="outline" className="my-10"
    onClick={StartStopRecording}>
        {isRecording?
        <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
            <StopCircle/>Stop Recording
        </h2>
        :
        <h2 className='text-primary flex gap-2 items-center font-semibold'>
          <Mic/>Record Answer</h2>}</Button>
    </div>
  )
}

export default RecordAnsSection
