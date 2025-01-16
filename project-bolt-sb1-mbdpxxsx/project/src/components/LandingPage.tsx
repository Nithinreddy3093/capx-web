import React from 'react';
import { ArrowRight, TrendingUp, Clock, Brain, ChevronDown, Youtube, Twitter, Instagram, Linkedin } from 'lucide-react';

export const LandingPage: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-yellow-500">Cap<span className="text-green-500">X</span></div>
        </div>
        <button
          onClick={onGetStarted}
          className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-full font-medium transition-colors"
        >
          Join Waitlist
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              An AI-powered investing platform that works as your personal assistant
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              All your investing needs, in one place
            </p>
            <button
              onClick={onGetStarted}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-medium text-lg flex items-center space-x-2 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4">Lack of Time</h2>
          <p className="text-xl text-gray-400">Not enough time to research and make informed trading decisions</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-500 mb-6">How CapX solves this</h3>
          <p className="text-3xl font-bold mb-8">Do all your research and investing in one place, quickly and efficiently</p>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">Best sectors to invest in right now</h4>
            <div className="flex gap-4 mb-6">
              <span className="px-4 py-2 bg-orange-500 rounded-full">Solar</span>
              <span className="px-4 py-2 bg-gray-700 rounded-full">Healthcare</span>
              <span className="px-4 py-2 bg-gray-700 rounded-full">Real Estate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-gray-500 mb-16">Why trust CapX?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Team Experience</h3>
            <p className="text-xl">Our team comprises graduates from top IITs and IIMs with a combined experience of over 15 years.</p>
          </div>
          <div className="bg-gray-800/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Hedge Fund Expertise</h3>
            <p className="text-xl">Our advisors have worked at top hedge funds like WorldQuant and Tower Research, managing assets exceeding $4 billion.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-orange-500">Got Questions?</h2>
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </div>
        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-xl font-semibold">What are the benefits of joining the CapX waitlist?</h3>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-xl font-semibold">When will the product be live?</h3>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-xl font-semibold">How to start trading on CapX</h3>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">Cap<span className="text-green-500">X</span></div>
              <p className="text-gray-400">Research to investing, all-in-one place</p>
              <p className="text-sm text-gray-500 mt-4">Copyright © 2024 nithinreddy3093. Made in India</p>
            </div>
            <div>
              <p className="text-lg mb-4">Join CapX on</p>
              <div className="flex gap-6">
                <Youtube className="w-6 h-6 text-orange-500 hover:text-orange-400 cursor-pointer" />
                <Twitter className="w-6 h-6 text-orange-500 hover:text-orange-400 cursor-pointer" />
                <Instagram className="w-6 h-6 text-orange-500 hover:text-orange-400 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-orange-500 hover:text-orange-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};