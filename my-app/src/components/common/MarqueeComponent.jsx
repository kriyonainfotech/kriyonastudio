import React from "react";
import "../../assets/Marquee.css"; // Import the external CSS file

const MarqueeComponent = () => {
  return (
    <div className="relative overflow-hidden py-8 isolate">
      {/* Gradient Overlays */}
      <div className="gradient-overlay-left"></div>
      <div className="gradient-overlay-right"></div>

      {/* Marquee Container */}
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item">
            <span className="text-4xl">✦</span>
            <span className="text-gradient-1">CUSTOMIZED BRANDING</span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-2">PROFESSIONAL VIDEO MAKING</span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-1">ENGAGING SOCIAL CONTENT</span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-2">
              HIGH-QUALITY POST PRODUCTION
            </span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-1">INNOVATIVE DESIGNS</span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-2">STRATEGIC DESIGN SOLUTIONS</span>
            <span className="text-4xl">✦</span>
          </div>
        </div>

        {/* Duplicate Content for Smooth Loop */}
        <div className="marquee-content">
          <div className="marquee-item">
            <span className="text-4xl">✦</span>
            <span className="text-gradient-1">CUSTOMIZED BRANDING</span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-2">PROFESSIONAL VIDEO MAKING</span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-1">ENGAGING SOCIAL CONTENT</span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-2">
              HIGH-QUALITY POST PRODUCTION
            </span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-1">INNOVATIVE DESIGNS</span>
            <span className="text-4xl">✦</span>
            <span className="text-gradient-2">STRATEGIC DESIGN SOLUTIONS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
