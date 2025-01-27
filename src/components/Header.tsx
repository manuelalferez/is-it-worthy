"use client";
import ThemeToggle from "./ThemeToggle";
import { CheckIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="w-full max-w-xl mx-auto px-4 md:px-0 py-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <CheckIcon className="h-8 w-8 text-base-content mr-2" />{" "}
          <h1 className="text-xl font-bold text-base-content">Is it worthy?</h1>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
