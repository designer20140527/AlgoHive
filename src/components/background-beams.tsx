"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useRef } from "react";

export const BackgroundBeams = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: "5%",
      translateX: "5%",
      duration: 12,
      repeatDelay: 4,
      delay: 2,
    },
    {
      initialX: "15%",
      translateX: "15%",
      duration: 14,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: "25%",
      translateX: "25%",
      duration: 10,
      repeatDelay: 5,
      delay: 1,
    },
    {
      initialX: "35%",
      translateX: "35%",
      duration: 15,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: "45%",
      translateX: "45%",
      duration: 11,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: "55%",
      translateX: "55%",
      duration: 13,
      repeatDelay: 6,
      delay: 2,
      className: "h-8",
    },
    {
      initialX: "65%",
      translateX: "65%",
      duration: 16,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: "75%",
      translateX: "75%",
      duration: 9,
      repeatDelay: 4,
      className: "h-12",
    },
    {
      initialX: "85%",
      translateX: "85%",
      duration: 14,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
    {
      initialX: "95%",
      translateX: "95%",
      duration: 17,
      repeatDelay: 3,
      delay: 5,
      className: "h-10",
    },
    {
      initialX: "20%",
      translateX: "20%",
      duration: 13,
      repeatDelay: 5,
      delay: 3,
      className: "h-16",
    },
    {
      initialX: "80%",
      translateX: "80%",
      duration: 15,
      repeatDelay: 7,
      delay: 1,
      className: "h-14",
    },
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam, index) => (
        <BeamElement
          key={index}
          beamOptions={beam}
        />
      ))}

      {children}
    </div>
  );
};

const BeamElement = ({
  beamOptions = {},
}: {
  beamOptions?: {
    initialX?: string | number;
    translateX?: string | number;
    initialY?: string | number;
    translateY?: string | number;
    rotate?: number;
    className?: string;
    duration?: number;
    delay?: number;
    repeatDelay?: number;
  };
}) => {
  return (
    <motion.div
      animate="animate"
      initial={{
        y: beamOptions.initialY || "-200px",
        x: beamOptions.initialX || "0%",
        rotate: beamOptions.rotate || 0,
      }}
      variants={{
        animate: {
          y: beamOptions.translateY || "1800px",
          x: beamOptions.translateX || "0%",
          rotate: beamOptions.rotate || 0,
        },
      }}
      transition={{
        duration: beamOptions.duration || 15,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: beamOptions.delay || 0,
        repeatDelay: beamOptions.repeatDelay || 0,
      }}
      className={cn(
        "absolute top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-[#6f49e3] via-[#a663f2] to-transparent opacity-30",
        beamOptions.className
      )}
      style={{
        left: beamOptions.initialX || "0%"
      }}
    />
  );
}; 