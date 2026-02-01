import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

const MagneticButton = ({ children, className = "", onClick, href }: MagneticButtonProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.1, y: middleY * 0.1 }); // 0.1 is the magnetic strength
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const content = (
        <motion.div
            style={{ position: "relative" }}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );

    const commonProps = {
        ref: ref,
        onMouseMove: handleMouse,
        onMouseLeave: reset,
        onClick: onClick,
        className: `inline-block cursor-pointer ${className}`,
    };

    if (href) {
        return (
            <a href={href} {...commonProps}>
                {content}
            </a>
        );
    }

    return (
        <div {...commonProps}>
            {content}
        </div>
    );
};

export default MagneticButton;
