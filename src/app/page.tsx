"use client";
import { useEffect } from "react";
import CostCalculator from "@/components/CostCalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("bg-base-100");
    return () => {
      document.body.classList.remove("bg-base-100");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Header />
      <main className="flex-1 flex items-center justify-center w-full px-4">
        <div className="w-full max-w-xl">
          <CostCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
}
