import * as React from "react"
import { motion } from "framer-motion"

const transforms = [
    { x: -0.8, y: -0.6, r: -29 },
    { x: -0.2, y: -0.4, r: -6 },
    { x: -0.05, y: 0.1, r: 12 },
    { x: -0.05, y: -0.1, r: -9 },
    { x: -0.1, y: 0.55, r: 3 },
    { x: 0, y: -0.1, r: 9 },
    { x: 0, y: 0.15, r: -12 },
    { x: 0, y: -0.65, r: 9 },
    { x: 0.1, y: 0.4, r: 12 },
    { x: 0.2, y: 0.15, r: 12 },
    { x: 0.8, y: 0.6, r: 20 },
]

const container = {
    open: {
        transition: {
            staggerChildren: 0.03,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1,
        },
    },
}

const letter = {
    open: (i) => {
        const t = transforms[i % transforms.length]
        return {
            x: `${t.x}em`,
            y: `${t.y}em`,
            rotate: t.r,
        }
    },
    closed: {
        x: "0em",
        y: "0em",
        rotate: 0,
    },
}

export default function TextDisperseLines({
    text = `TETIANA RUSETSKA
FRANKFURT AM MAIN
+49 151 21268773
rusetskatata@gmail.com`,
    fontSize = 38,
    color = "#ffffff",
    lineHeight = 1.2,
}) {
    const [activeLine, setActiveLine] = React.useState(null)

    const lines = (text || "").split("\n")

    return (
        <div
            style={{
                fontSize,
                lineHeight,
                color,
                whiteSpace: "pre-line",
                fontFamily: "sans-serif",
            }}
        >
            {lines.map((line, lineIndex) => (
                <motion.div
                    key={lineIndex}
                    variants={container}
                    animate={activeLine === lineIndex ? "open" : "closed"}
                    onMouseEnter={() => setActiveLine(lineIndex)}
                    onMouseLeave={() => setActiveLine(null)}
                    style={{
                        display: "block",
                        fontFamily: "ABC",
                        cursor: "pointer",
                    }}
                >
                    {line.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letter}
                            initial="closed"
                            animate={activeLine === lineIndex ? "open" : "closed"}
                            transition={{
                                duration: 0.6,
                                ease: [0.33, 1, 0.68, 1],
                            }}
                            style={{ display: "inline-block" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>
            ))}
        </div>
    )
}