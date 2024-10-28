import React, { useEffect, useState } from 'react';
import { Lightbulb, Volume2 } from 'lucide-react';
import clsx from 'clsx';

function QuestionsSection({ 
    mockInterviewQuestion, 
    activeQuestionIndex, 
    setActiveQuestionIndex,
    timeLeft // Accept timeLeft prop
}) {
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        if (timeLeft <= 60) { // Trigger blinking effect when time is below 1 minute
            setIsBlinking(true);
        } else {
            setIsBlinking(false);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const textToSpeech = (text) => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        } else {
            alert('Sorry, Your browser does not support text-to-speech.');
        }
    };

    return (
        mockInterviewQuestion && (
            <div className="p-5 border rounded-lg my-10">
                {/* Timer Display */}
                <div
                    className={clsx(
                        "flex justify-end items-center text-lg font-bold",
                        isBlinking && "animate-blink text-red-600"
                    )}
                >
                    <span>Time Left: {formatTime(timeLeft)}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                    {mockInterviewQuestion.map((question, index) => (
                        <h2
                            key={index}
                            className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
                                activeQuestionIndex === index ? 'bg-primary text-white' : 'bg-secondary'
                            }`}
                            onClick={() => setActiveQuestionIndex(index)}
                        >
                            Question #{index + 1}
                        </h2>
                    ))}
                </div>

                <h2 className="my-5 text-md md:text-lg">
                    {mockInterviewQuestion[activeQuestionIndex]?.question}
                </h2>

                <Volume2
                    className="cursor-pointer"
                    onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}
                />

                <div className="border rounded-lg p-5 bg-blue-100 mt-20">
                    <h2 className="flex gap-2 items-center text-primary">
                        <Lightbulb />
                        <strong>Note:</strong>
                    </h2>
                    <h2 className="text-sm text-primary my-2">
                        {process.env.NEXT_PUBLIC_QUESTION_NOTE}
                    </h2>
                </div>
            </div>
        )
    );
}

export default QuestionsSection;
