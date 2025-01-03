'use client';
import { ReactNode, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollableContentContext } from "@/features/core/context/scrollableContentContext";

// ScrollableContent component to create a horizontally scrollable container with navigation buttons
const ScrollableContent = ({ children }: { children: ReactNode }) => {
    // Reference to the scrollable container
    const Container = useRef<HTMLDivElement>(null);

    // Context function to set the number of visible items
    const { setItemsNumber } = useScrollableContentContext();

    // State variables to manage navigation button visibility and device type
    const [isAtStart, setIsAtStart] = useState(true); // If at the beginning of the scroll
    const [isAtEnd, setIsAtEnd] = useState(false); // If at the end of the scroll
    const [isMobile, setIsMobile] = useState(false); // If the device is a mobile device

    useEffect(() => {
        // Function to update container dimensions and check scroll status
        const updateDimensions = () => {
            if (Container.current) {
                const containerWidth = Container.current.getBoundingClientRect().width;

                // Determine the number of visible items based on child element width
                if (Container.current.children.length > 0) {
                    const firstChild = Container.current.children[0] as HTMLElement;
                    const childWidth = firstChild.getBoundingClientRect().width;
                    setItemsNumber(Math.floor(containerWidth / childWidth));
                }

                // Check if the user is at the start or end of the scrollable area
                const scrollLeft = Container.current.scrollLeft;
                const scrollWidth = Container.current.scrollWidth;
                const clientWidth = Container.current.clientWidth;

                setIsAtStart(scrollLeft === 0); // At the start if scrollLeft is 0
                setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // At the end if scrolled to the maximum
            }
        };

        // Function to check if the device is mobile based on window width
        const updateMobileStatus = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial setup: Update dimensions and device type
        updateDimensions();
        updateMobileStatus();

        // Add event listeners for window resize
        window.addEventListener("resize", () => {
            updateDimensions();
            updateMobileStatus();
        });

        // Handle scroll events on the container to update start/end status
        const handleScroll = () => {
            if (Container.current) {
                const scrollLeft = Container.current.scrollLeft;
                const scrollWidth = Container.current.scrollWidth;
                const clientWidth = Container.current.clientWidth;

                setIsAtStart(scrollLeft === 0);
                setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
            }
        };

        // Attach the scroll event listener to the container
        Container.current?.addEventListener("scroll", handleScroll);

        // Cleanup event listeners when the component is unmounted
        return () => {
            window.removeEventListener("resize", updateDimensions);
            window.removeEventListener("resize", updateMobileStatus);
            Container.current?.removeEventListener("scroll", handleScroll);
        };
    }, [setItemsNumber]);

    // Function to scroll the container by a given number of items
    const move = (n: number) => {
        if (Container.current) {
            const containerWidth = Container.current.offsetWidth;

            // Determine the scroll amount based on item size and container width
            const firstChild = Container.current.children[0] as HTMLElement;
            const childWidth = firstChild.getBoundingClientRect().width;

            // Scroll by the width of the visible items minus one child width
            const scrollAmount = (containerWidth - childWidth) * n;
            Container.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    // Handlers for next and previous button clicks
    const handleNext = () => {
        move(1); // Scroll forward
    };

    const handlePrev = () => {
        move(-1); // Scroll backward
    };

    // Render the component
    return (
        <div className="relative">
            {/* Scrollable container */}
            <div
                ref={Container}
                className="relative w-full px-6 flex flex-nowrap shrink-0 overflow-y-hidden overflow-x-scroll snap-x snap-proximity"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for Firefox and IE
            >
                {children}
            </div>

            {/* Previous button */}
            {!isAtStart && !isMobile && (
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-1 bg-white/20 text-700 w-[40px] h-[40px] border border-slate-400 rounded-full shadow-lg text-black flex items-center justify-center backdrop-blur-sm hover:bg-white/75 transition-all"
                >
                    <ChevronLeft strokeWidth={3} />
                </button>
            )}

            {/* Next button */}
            {!isAtEnd && !isMobile && (
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-1 bg-white/20 text-700 w-[40px] h-[40px] border border-slate-400 rounded-full shadow-lg text-black flex items-center justify-center backdrop-blur-sm hover:bg-white/75 transition-all"
                >
                    <ChevronRight strokeWidth={3} />
                </button>
            )}
        </div>
    );
};

export default ScrollableContent;
