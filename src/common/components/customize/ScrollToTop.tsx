'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels

    const toggleVisibility = () => {
      const show = window.scrollY > 300;
      setIsVisible((prev) => (prev !== show ? show : prev));
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed right-3 bottom-[50px] z-40 md:bottom-[12px] lg:right-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="back-to-top hover:bg-dark flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-blue-700 text-white shadow-md transition duration-300 ease-in-out"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
        </button>
      )}
    </div>
  );
}
