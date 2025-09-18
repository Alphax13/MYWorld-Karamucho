import React from "react";

const PaginationDots = ({ slides, currentSlide, onDotClick }) => {
  return (
    <div className="flex justify-center mt-8 space-x-4">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`pagination-dot ${
            index === currentSlide ? 'active' : ''
          }`}
          aria-label={`Go to slide ${index + 1}`}
        >
          <div className="dot-inner"></div>
        </button>
      ))}
    </div>
  );
};

export default PaginationDots;