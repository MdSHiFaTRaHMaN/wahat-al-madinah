import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Workflow from "@/components/Workflow";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import CalloutBanner from "@/components/CalloutBanner";
import Footer from "@/components/Footer";
import StickyFloatingBar from "@/components/StickyFloatingBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg relative overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Hero Section with Arched Green Card */}
      <Hero />

      {/* Category Grid Section with Circular Icon Badges */}
      <Categories />

      {/* 4-Step Process Workflow Section */}
      <Workflow />

      {/* Product & Service Alternating Showcase Cards */}
      <ProductShowcase />

      {/* Customer Reviews & Testimonials Section */}
      <Testimonials />

      {/* Bold Dark Emerald Green High-Impact Callout Section */}
      <CalloutBanner />

      {/* Footer Section */}
      <Footer />

      {/* Sticky WhatsApp Floating Action Bar */}
      <StickyFloatingBar />
    </main>
  );
}
