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
    <div className="min-h-screen flex flex-col gap-4 bg-base-100">
      <Header />
      <section className="hero bg-primary text-white py-10 max-w-xl mx-auto rounded-md shadow-md">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Is it Worthy?</h2>
          <p className="mt-4 text-lg">
            Calculate if your decision is worthy or not.
          </p>
        </div>
      </section>
      <main className="flex-1 flex items-center justify-center w-full px-4">
        <div className="w-full max-w-xl">
          <CostCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
}
