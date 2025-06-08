import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
    minLength?: number; // Add this new prop for padding zeros
}

export default function CountUp({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 2,
    className = "",
    startWhen = true,
    separator = "",
    onStart,
    onEnd,
    minLength = 1,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);

    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);

    const springValue = useSpring(motionValue, {
        damping,
        stiffness,
    });

    const isInView = useInView(ref, { once: true, margin: "0px" });

    // Set initial text content with padding
    useEffect(() => {
        if (ref.current) {
            const initialValue = direction === "down" ? to : from;
            ref.current.textContent = String(initialValue).padStart(minLength, '0');
        }
    }, [from, to, direction, minLength]);
    
    useEffect(() => {
        if (isInView && startWhen) {
            if (typeof onStart === "function") {
                onStart();
            }

            const timeoutId = setTimeout(() => {
                motionValue.set(direction === "down" ? from : to);
            }, delay * 1000);

            const durationTimeoutId = setTimeout(() => {
                if (typeof onEnd === "function") {
                    onEnd();
                }
            }, delay * 1000 + duration * 1000);

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(durationTimeoutId);
            };
        }
    }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

    // Update the formatting logic to include padding
    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                // Convert to integer and format with leading zeros
                const value = Math.round(latest);
                let formattedNumber = String(value);
                
                if (separator) {
                    // Apply separator if needed
                    const options = {
                        useGrouping: true,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    };
                    
                    formattedNumber = Intl.NumberFormat("en-US", options)
                        .format(value)
                        .replace(/,/g, separator);
                }
                
                // Apply padding with zeros
                formattedNumber = formattedNumber.padStart(minLength, '0');
                
                ref.current.textContent = formattedNumber;
            }
        });

        return () => unsubscribe();
    }, [springValue, separator, minLength]);

    return <span className={`${className}`} ref={ref} />;
}