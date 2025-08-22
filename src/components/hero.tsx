"use client";

import Link from "next/link";
import { Play, Maximize2 } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 video-overlay" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Title with fade-in animation */}
          <div className="fade-in mb-8">
            <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4 tracking-tight">
              Terra
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Learn
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light">
              Immersive Educational Experiences
            </p>
          </div>

          {/* Intro Video Card */}
          <div className="slide-up mb-12">
            <div
              className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto cursor-pointer hover-glow border border-green-500/20"
              onClick={() => setIsVideoExpanded(true)}
            >
              <div className="aspect-video bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Watch Our Story</h3>
              <p className="text-gray-400 text-sm mb-3">
                Discover how TerraLearn transforms education
              </p>
              <div className="flex items-center justify-between text-green-400">
                <span className="text-sm">Click to expand</span>
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="slide-up flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="#mission"
              className="inline-flex items-center px-12 py-4 text-white bg-green-600 rounded-full hover:bg-green-700 transition-all text-lg font-medium hover-glow border border-green-500/30"
            >
              Mission
            </Link>

            <Link
              href="#activity"
              className="inline-flex items-center px-12 py-4 text-green-400 bg-transparent rounded-full hover:bg-green-600/20 transition-all text-lg font-medium border-2 border-green-500 hover-glow"
            >
              Activity
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isVideoExpanded && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => setIsVideoExpanded(false)}
            className="absolute top-4 right-4 text-white hover:text-green-400 z-10"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <video autoPlay controls className="w-full h-full object-contain">
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </div>
  );
}
