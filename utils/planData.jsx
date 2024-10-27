"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const planData = [
  {
    id: 1,
    name: "Free",
    cost: 0,
    offerings: [
      "✓ Create 3 Free Mock Interview",
      "✓ Unlimited Retake Interview",
      "❌ Practice Question",
      "❌ Exclusive App Access",
      "❌ Email Support",
    ],
  },
  {
    id: 2,
    name: "Monthly",
    cost: 799,
    offerings: [
      "✓ Create 3 Free Mock Interview",
      "✓ Unlimited Retake Interview",
      "✓ Practice Question",
      "✓ Exclusive App Access",
      "✓ Email Support",
    ],
  },
];

export default function PlanData() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="flex justify-center gap-10">
      {planData.map((plan) => (
        <div
          key={plan.id}
          className={`border rounded-lg p-10 shadow-lg w-144 text-center transition-colors duration-300 
            ${plan.name === "Monthly" ? "border-primary" : "border-gray-200"} 
            hover:border-primary`} // Add hover effect for the border color
        >
          <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
          <p className="mb-6">
            <span className="text-4xl font-bold">₹{plan.cost}</span>
            <span className="text-sm">{plan.cost === 0 ? "/ month" : " / month"}</span>
          </p>
          <ul className="mb-8 text-left">
            {plan.offerings.map((offering, index) => (
              <li key={index} className="mb-2">
                {offering}
              </li>
            ))}
          </ul>
          {plan.name === "Monthly" ? (
            <a
              href="https://buy.stripe.com/test_8wMaF68jfc266je7ss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-bold w-full bg-white text-primary border border-primary transition-all duration-300 ease-in-out transform hover:bg-white hover:text-primary hover:border-primary hover:shadow-lg hover:scale-105">
                Get Started
              </Button>
            </a>
          ) : (
            <Button
              className="font-bold w-full bg-white text-primary border border-primary transition-all duration-300 ease-in-out transform hover:bg-white hover:text-primary hover:border-primary hover:shadow-lg hover:scale-105"
              onClick={() => router.push('/sign-up')} // Redirect to /sign-up on click
            >
              Get Started
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}
