'use client';
import { useEffect, useRef, useState } from 'react';
import { Resume } from "@/app/types/ibbi";
import { ChevronLeft, ChevronRight, Briefcase, MapPin, Calendar } from "lucide-react";

export default function ResumeCarousel({ resume }: { resume: Resume[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedStates, setExpandedStates] = useState<boolean[]>(Array(resume.length).fill(false));

  // Scroll handler
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      if (isAnimating) return;
      
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, isAnimating]);

  // Navigation functions
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    
    setIsAnimating(true);
    const width = scrollRef.current.clientWidth;
    
    scrollRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goNext = () => scrollToIndex((currentIndex + 1) % resume.length);
  const goPrev = () => scrollToIndex((currentIndex - 1 + resume.length) % resume.length);

  const toggleExpand = (index: number) => {
    setExpandedStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="bg-[#f7f2ee] w-full max-w-4xl mx-auto  rounded-lg shadow-md border border-gray-100">
      {/* Top bar with progress */}
      <div className=" flex items-center justify-between px-3 sm:px-6 py-3 border-b border-gray-100">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="bg-blue-100 text-black  p-1 rounded-md">
            <Briefcase size={16} />
          </div>
          <span className="font-medium text-gray-700 text-sm sm:text-base">Experience</span>
        </div>
        <div className="flex items-center text-xs sm:text-sm text-gray-500">
          <span className="font-medium text-black ">{currentIndex + 1}</span>
          <span>&nbsp;/&nbsp;{resume.length}</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-100">
        <div 
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / resume.length) * 100}%` }}
        />
      </div>
      
      {/* Carousel container with responsive padding */}
      <div className="bg-white relative px-8 sm:px-10">
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {resume.map((entry, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 snap-start px-2 sm:px-6 pt-4 pb-3 text-left"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="pr-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 break-words">{entry.position}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm">{entry.companyName}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-xs text-gray-500">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  <span className="text-xs">{entry.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={12} className="mr-1" />
                  <span className="text-xs">{entry.companyLocation}</span>
                </div>
              </div>
              
              <div className={`mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${expandedStates[index] ? 'max-h-72' : 'max-h-14 sm:max-h-16'}`}>
                <p>{entry.description}</p>
              </div>
              
              {/* Read more / less button */}
              <button 
                onClick={() => toggleExpand(index)}
                className="mt-1 text-xs font-medium text-black  hover:text-black  focus:outline-none transition-colors"
              >
                {expandedStates[index] ? 'Read less' : 'Read more'}
              </button>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows - responsive sizing */}
        <button 
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 focus:outline-none   transition-all"
          aria-label="Previous resume"
        >
          <ChevronLeft size={14} className="sm:hidden" />
          <ChevronLeft size={18} className="hidden sm:block" />
        </button>
        
        <button 
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 focus:outline-none  transition-all"
          aria-label="Next resume"
        >
          <ChevronRight size={14} className="sm:hidden" />
          <ChevronRight size={18} className="hidden sm:block" />
        </button>
      </div>
      
      {/* Dot indicators */}
      <div className="flex justify-center items-center py-2 sm:py-3 gap-1 sm:gap-1.5">
        {resume.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-black w-4 sm:w-5" : "bg-gray-400 w-1 sm:w-1.5"
            }`}
            aria-label={`Go to resume ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}