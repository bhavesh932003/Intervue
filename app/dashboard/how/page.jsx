"use client"; // Mark this file as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function HowItWorks() {
  const router = useRouter(); // Create a router instance

  const handleGetStarted = () => {
    router.push('/sign-up'); // Redirect to the sign-up page
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">How It Works</h1>
      <p className="mb-6 text-lg text-gray-700">
        Our platform is designed to help you prepare for interviews through mock interviews, feedback, and resources. Here’s how to get started:
      </p>
      
      <div className="space-y-6">
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Step 1: Sign Up</h2>
          <p className="text-gray-600">
            Create an account with us by filling out a simple registration form. Once registered, you can access all the features available on the platform.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Step 2: Choose Your Plan</h2>
          <p className="text-gray-600">
            Select the plan that best suits your needs. Whether you want to start with the Free plan or subscribe to the Monthly plan, we have options for everyone.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Step 3: Schedule Mock Interviews</h2>
          <p className="text-gray-600">
            Once you've chosen a plan, you can create and schedule your mock interviews. You can practice as many times as you want, with different interviewers if desired.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Step 4: Receive Feedback</h2>
          <p className="text-gray-600">
            After your mock interview, you will receive detailed feedback on your performance. This feedback is crucial for identifying areas for improvement and helping you succeed in real interviews.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Step 5: Improve and Repeat</h2>
          <p className="text-gray-600">
            Use the feedback to improve your skills. Schedule additional mock interviews as needed and continue to refine your interviewing techniques until you feel ready for the real thing.
          </p>
        </div>
      </div>

      {/* Centered Section */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold">Ready to get started?</h2>
        <p className="text-gray-600 mb-4">
          Join us today and take the first step towards acing your interviews!
        </p>
        <button
          onClick={handleGetStarted} // Call the redirect function
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
