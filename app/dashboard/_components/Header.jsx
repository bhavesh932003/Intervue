"use client"; // Enables client-side functionality
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const path = usePathname();
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route); // Use router to navigate between pages
  };

  const handleLogoClick = () => {
    router.push("/dashboard"); // Navigate to the dashboard when logo is clicked
  };

  return (
    <div className="flex p-2 items-center justify-between bg-secondary shadow-sm">
      {/* Wrap the Image in a div to make it clickable */}
      <div onClick={handleLogoClick} className="cursor-pointer">
        <Image src={"/logo.svg"} width={75} height={25} alt="logo" />
      </div>
      <ul className="hidden md:flex gap-6">
        <li
          onClick={() => handleNavigation("/dashboard")}
          className={`cursor-pointer ${
            path === "/dashboard" ? "text-primary font-bold" : ""
          } transition-colors duration-500 ease-in-out hover:text-primary hover:font-bold`}
        >
          Dashboard
        </li>
        <li
          onClick={() => handleNavigation("/dashboard/questions")}
          className={`cursor-pointer ${
            path === "/dashboard/questions" ? "text-primary font-bold" : ""
          } transition-colors duration-500 ease-in-out hover:text-primary hover:font-bold`}
        >
          Questions
        </li>
        <li
          onClick={() => handleNavigation("/dashboard/upgrade")}
          className={`cursor-pointer ${
            path === "/dashboard/upgrade" ? "text-primary font-bold" : ""
          } transition-colors duration-500 ease-in-out hover:text-primary hover:font-bold`}
        >
          Upgrade
        </li>
        <li
          onClick={() => handleNavigation("/dashboard/how")}
          className={`cursor-pointer ${
            path === "/dashboard/how" ? "text-primary font-bold" : ""
          } transition-colors duration-500 ease-in-out hover:text-primary hover:font-bold`}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

