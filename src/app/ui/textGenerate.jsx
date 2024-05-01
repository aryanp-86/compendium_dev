"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }, 750);
    return () => clearTimeout(timeout);
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-white opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 md:max-h-[22rem] lg:h-full">
        <div className=" text-white poppins-font md:text-xl lg:text-2xl leading-normal tracking-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
