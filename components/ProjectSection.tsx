'use client';

import { useEffect, useRef, useState } from 'react';
import { Project } from "@/app/types/ibbi";
import { CalendarDays, UserCircle, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectSectionProps = {
  projects: Project[];
};

export default function ProjectSection({ projects }: ProjectSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedStates, setExpandedStates] = useState<boolean[]>(Array(projects.length).fill(false));

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

  const goNext = () => scrollToIndex((currentIndex + 1) % projects.length);
  const goPrev = () => scrollToIndex((currentIndex - 1 + projects.length) % projects.length);

  const toggleExpand = (index: number) => {
    setExpandedStates(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <div className="bg-[#f7f2ee] w-full max-w-4xl mx-auto rounded-lg shadow-md border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-100 text-black p-1 rounded-md">
            <UserCircle size={16} />
          </div>
          <span className="font-medium text-gray-700 text-sm sm:text-base">Projects</span>
        </div>
        <div className="text-xs sm:text-sm text-gray-500">
          <span className="font-medium text-black">{currentIndex + 1}</span>
          <span>&nbsp;/&nbsp;{projects.length}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-100">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
        />
      </div>

      {/* Carousel */}
      <div className="bg-white relative px-8 sm:px-10">
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 snap-start px-2 sm:px-6 pt-4 pb-3 text-left"
            >
              <div className="mb-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-800">{project.name}</h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                <div className="flex items-center">
                  <CalendarDays size={12} className="mr-1" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <UserCircle size={12} className="mr-1" />
                  {project.role}
                </div>
              </div>

              <div className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 overflow-hidden ${expandedStates[index] ? 'max-h-72' : 'max-h-14 sm:max-h-16'}`}>
                <p>{project.description}</p>
              </div>

              <button
                onClick={() => toggleExpand(index)}
                className="mt-1 text-xs font-medium text-black hover:text-black focus:outline-none transition"
              >
                {expandedStates[index] ? 'Read less' : 'Read more'}
              </button>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          aria-label="Previous project"
        >
          <ChevronLeft size={14} className="sm:hidden" />
          <ChevronLeft size={18} className="hidden sm:block" />
        </button>

        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          aria-label="Next project"
        >
          <ChevronRight size={14} className="sm:hidden" />
          <ChevronRight size={18} className="hidden sm:block" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center py-2 sm:py-3 gap-1 sm:gap-1.5">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-black w-4 sm:w-5' : 'bg-gray-200 w-1 sm:w-1.5'}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
