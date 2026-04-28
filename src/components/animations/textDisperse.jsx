import * as React from "react"
import { motion } from "framer-motion"

const transforms = [
    { x: -0.8, y: -0.6, r: -29 }, // hier sind verschiedene Bewegungspositionen gespeichert
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

const container = { // hier wird gesteuert, wie die Buchstaben nacheinander animiert werden
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

const letter = { // wenn Hover aktiv ist, jede Buchstabe bekommt Pos aus transforms
    open: (i) => {
        const t = transforms[i % transforms.length]
        return {
            x: `${t.x}em`,
            y: `${t.y}em`,
            rotate: t.r,
        }
    },
    closed: { // alle Buchstaben kommen zurück an ihren normalen Platz
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
    const [activeLine, setActiveLine] = React.useState(null) // hier wird gespeichert welche Zeile mit der Maus aktiv ist 

    const lines = (text || "").split("\n") // Text wird in mehrere Zeilen getrennt

    return (
        <div
            className="whitespace-pre-line font-sans"
            style={{ fontSize, lineHeight, color }}
        >
            {lines.map((line, lineIndex) => ( // alle Zeile werden einzeln dargestellt
                <motion.div
                    key={lineIndex}
                    variants={container}
                    animate={activeLine === lineIndex ? "open" : "closed"}
                    onMouseEnter={() => setActiveLine(lineIndex)} // Zeile werden aktiv/inaktiv
                    onMouseLeave={() => setActiveLine(null)}
                    className="block cursor-pointer font-[ABC]"
                >
                    {line.split("").map((char, i) => ( // die Zeile wird in einzelne Buchstaben geteilt. Dann jede Buchstabe bekommt seine Animation
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
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>
            ))}
        </div>
    )
}