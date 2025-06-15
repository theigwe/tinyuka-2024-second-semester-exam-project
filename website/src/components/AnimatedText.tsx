import React from "react";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", delay = 0 }) => {
    return (
        <span
            className={`inline-block opacity-0 animate-fade-in-up ${className}`}
            style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
        >
      {text}
    </span>
    );
};

export default AnimatedText;