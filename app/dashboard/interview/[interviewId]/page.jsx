"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { Intervue } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

function Interview({ params }) {
    const [interviewData, setInterviewData] = useState(null);
    const [webCamEnabled, setWebCamEnabled] = useState(false);

    useEffect(() => {
        GetInterviewDetails();
    }, []);

    const GetInterviewDetails = async () => {
        const result = await db
            .select()
            .from(Intervue)
            .where(eq(Intervue.mockId, params.interviewId));
        setInterviewData(result[0]);
    };

    const handleEnableWebcam = async () => {
        try {
            // Request access to webcam
            await navigator.mediaDevices.getUserMedia({ video: true });
            setWebCamEnabled(true);
        } catch (error) {
            console.error("Webcam access denied:", error);
            alert("Please allow webcam access to proceed.");
        }
    };

    return (
        <div className="my-10">
            <h2 className="font-bold text-2xl">Let's Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {interviewData && (
                    <div className="flex flex-col my-5 gap-5">
                        <div className="flex flex-col p-5 rounded-lg border gap-5">
                            <h2 className="text-lg">
                                <strong>Job Role/Job Position:</strong> {interviewData.jobPosition}
                            </h2>
                            <h2 className="text-lg">
                                <strong>Job Description/Tech Stack:</strong> {interviewData.jobDesc}
                            </h2>
                            <h2 className="text-lg">
                                <strong>Years of Experience:</strong> {interviewData.jobExperience}
                            </h2>
                        </div>
                        <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
                            <h2 className="flex gap-2 items-center text-yellow-500">
                                <Lightbulb />
                                <strong>Information</strong>
                            </h2>
                            <h2 className="mt-3 text-yellow-500">
                                {process.env.NEXT_PUBLIC_INFORMATION}
                            </h2>
                        </div>
                    </div>
                )}
                <div>
                    {webCamEnabled ? (
                        <Webcam
                            audio={false} // Disable audio if not needed
                            mirrored={true}
                            style={{ height: 300, width: 300 }}
                        />
                    ) : (
                        <div className="flex flex-col items-center">
                            <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
                            <button
                                onClick={handleEnableWebcam}
                                className="mt-4 px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600 active:scale-95"
                            >
                                Enable Webcam
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {webCamEnabled && (
                <div className="flex justify-end items-end">
                    <Button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() =>
                            (window.location.href = `/dashboard/interview/${params.interviewId}/start`)
                        }
                    >
                        Start Interview
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Interview;
