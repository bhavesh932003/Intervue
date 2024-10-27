"use client"; // Ensure this file is client-rendered

import PlanData from "@/utils/planData"; // Import the planData component

export default function Upgrade() {
  return (
    <div className="container mx-auto p-8 text-center"> {/* Center align the content */}
  <h1 className="text-3xl font-bold text-black mb-0">Upgrade</h1> {/* Main heading */}
  <h2 className="text-md text-gray-500 mb-10">Upgrade to monthly plan to access unlimited mock interviews</h2> {/* Subheading */}
  <PlanData /> {/* Render the planData component */}
</div>

  );
}
