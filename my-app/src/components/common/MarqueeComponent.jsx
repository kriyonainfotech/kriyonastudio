import React from "react";
import "../../assets/Marquee.css"; // Import the external CSS file

const MarqueeComponent = () => {
  return (
    <div className="relative overflow-hidden py-8 isolate">
      {/* Gradient Overlays */}
      <div className="gradient-overlay-left" />
      <div className="gradient-overlay-right" />

      {/* Marquee Container */}
      <div className="marquee-container">
        {/* Marquee Content - Duplicated */}
        <div className="marquee-content">
          {/* Content Set 1 */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="marquee-item">
              <span className="text-gradient-1">INNOVATIVE DESIGNS</span>
              <span className="text-4xl">✦</span>
              <span className="text-gradient-2">CREATIVE SOLUTIONS</span>
              <span className="text-4xl">✦</span>
            </div>
          ))}
        </div>

        {/* Mirror Content for Seamless Loop */}
        <div className="marquee-content">
          {/* Content Set 2 (Duplicate) */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="marquee-item">
              <span className="text-gradient-1">INNOVATIVE DESIGNS</span>
              <span className="text-4xl">✦</span>
              <span className="text-gradient-2">CREATIVE SOLUTIONS</span>
              <span className="text-4xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
