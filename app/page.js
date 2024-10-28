"use client";
import Link from 'next/link';
import { useState } from 'react';
import Header from './dashboard/_components/Header';

export default function LandingPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        window.location.href = '/sign-up';
    };

    return (
        <div className="min-h-screen relative bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: "url('/assets/back.jpg')"
        }}>
            <div 
                className="min-h-screen bg-transparent relative" // Changed to bg-transparent
            >
                <Header /> {/* Use the imported Header component */}
                {/* Hero Section */}
                <section className="py-8 bg-transparent z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                        Your Personal AI Interview Coach
                    </h1>
                    <p className="text-gray-400 mb-8 text-xl font-semibold">
                        Double your chances of landing that job offer with our AI-powered interview prep
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button 
                            onClick={handleButtonClick} 
                            className={`bg-blue-600 text-white px-6 py-2 rounded-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'Get Started'}
                        </button>
                    </div>
                </section>

                {/* How It Works Section */}
                <div className="mt-16 text-center">
                    <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <h2 className="text-3xl font-bold mb-1">How It Works?</h2>
                        <p className="text-gray-500 mb-8 font-semibold">Give mock interviews in just 3 simple steps</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="relative rounded-lg overflow-hidden bg-white border border-gray-300 shadow-[0_0_15px_5px_rgba(156,163,175,0.4)] transition-all duration-300 ease-in-out transform hover:shadow-[0_0_20px_7px_rgba(219,39,119,0.6)] hover:scale-105">
                                <div className="flex flex-col items-center p-4">
                                    <img src="/icon1.svg" alt="Icon 1" className="h-12 mb-4" />
                                    <h3 className="text-xl font-semibold">Write Prompt for Your Form</h3>
                                    <p className="text-gray-600 mt-2 text-center">Easily create tailored prompts that reflect the specific skills and experience required for your interview role. This ensures that you’re prepared to showcase your strengths effectively.</p>
                                </div>
                            </div>
                            
                            {/* Card 2 */}
                            <div className="relative rounded-lg overflow-hidden bg-white border border-gray-300 shadow-[0_0_15px_5px_rgba(156,163,175,0.4)] transition-all duration-300 ease-in-out transform hover:shadow-[0_0_20px_7px_rgba(219,39,119,0.6)] hover:scale-105">
                                <div className="flex flex-col items-center p-4">
                                    <img src="/icon2.svg" alt="Icon 2" className="h-12 mb-4" />
                                    <h3 className="text-xl font-semibold">Edit Your Form</h3>
                                    <p className="text-gray-600 mt-2 text-center">Modify your interview prompts as needed to adapt to various roles or preferences. Our intuitive editing tools make it simple to refine your questions for optimal results.</p>
                                </div>
                            </div>
                            
                            {/* Card 3 */}
                            <div className="relative rounded-lg overflow-hidden bg-white border border-gray-300 shadow-[0_0_15px_5px_rgba(156,163,175,0.4)] transition-all duration-300 ease-in-out transform hover:shadow-[0_0_20px_7px_rgba(219,39,119,0.6)] hover:scale-105">
                                <div className="flex flex-col items-center p-4">
                                    <img src="/icon3.svg" alt="Icon 3" className="h-12 mb-3" />
                                    <h3 className="text-xl font-semibold">Share & Start Accepting Responses</h3>
                                    <p className="text-gray-600 mt-2 text-center">Once you're ready, share your customized prompts and begin the interview. Receive immediate feedback on your responses, allowing you to refine your answers and boost your confidence.</p>
                                </div>
                            </div>
                        </div>
                        {/* Centered Button Section */}
                        <div className="flex justify-center mt-8">
                            <Link href="/sign-up">
                                <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300">
                                    Get Started Today
                                </button>
                            </Link>
                        </div>
                    </section>
                    
                    <section className="py-16 bg-gray-50 z-50 px-4 mx-auto max-w-screen-xl text-center">
                        <h2 className="text-5xl font-bold mb-2">Why Choose Us?</h2>
                        <p className="text-gray-500 mb-8 font-semibold">Our platform provides personalized feedback and tailored resources to help you succeed.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Personalized Coaching</h3>
                                <p className="text-gray-600">Receive tailored coaching based on your specific needs and job role.</p>
                            </div>
                            {/* Feature 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Comprehensive Resources</h3>
                                <p className="text-gray-600">Access a variety of resources including video tutorials and practice questions.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Expert Feedback</h3>
                                <p className="text-gray-600">Get constructive feedback from industry experts to improve your performance.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
