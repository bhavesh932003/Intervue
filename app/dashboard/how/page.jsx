"use client"; // Mark this file as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function HowItWorks() {
  const router = useRouter(); // Create a router instance

  const handleGetStarted = () => {
    router.push('/sign-up'); // Redirect to the sign-up page
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-pink-50 to-white">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">How It Works</h1>
      <p className="mb-8 text-lg text-gray-700 text-center">
        Our platform is designed to help you prepare for interviews through mock interviews, feedback, and resources. Here’s how to get started:
      </p>
      
      <div className="space-y-6">
        {[
          {
            title: "Step 1: Sign Up",
            description: "Create an account with us by filling out a simple registration form. Once registered, you can access all the features available on the platform.",
          },
          {
            title: "Step 2: Choose Your Plan",
            description: "Select the plan that best suits your needs. Whether you want to start with the Free plan or subscribe to the Monthly plan, we have options for everyone.",
          },
          {
            title: "Step 3: Schedule Mock Interviews",
            description: "Once you've chosen a plan, you can create and schedule your mock interviews. You can practice as many times as you want, with different interviewers if desired.",
          },
          {
            title: "Step 4: Receive Feedback",
            description: "After your mock interview, you will receive detailed feedback on your performance. This feedback is crucial for identifying areas for improvement and helping you succeed in real interviews.",
          },
          {
            title: "Step 5: Improve and Repeat",
            description: "Use the feedback to improve your skills. Schedule additional mock interviews as needed and continue to refine your interviewing techniques until you feel ready for the real thing.",
          },
        ].map((step, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 bg-white">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Centered Section */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold text-gray-800">Ready to get started?</h2>
        <p className="text-gray-600 mb-4">
          Join us today and take the first step towards acing your interviews!
        </p>
        <button
          onClick={handleGetStarted} // Call the redirect function
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-lg hover:bg-opacity-80 transition duration-300 shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
