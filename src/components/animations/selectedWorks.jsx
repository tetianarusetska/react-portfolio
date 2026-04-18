import React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

function WorkRow({ index, title, category }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const smoothX = useSpring(x, { stiffness: 120, damping: 20 })
    const smoothY = useSpring(y, { stiffness: 120, damping: 20 })

    function onMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect()

        x.set((e.clientX - rect.left - rect.width / 2) * 0.15)
        y.set((e.clientY - rect.top - rect.height / 2) * 0.15)
    }

    function onMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                alignItems: "center",
                padding: "24px 0",
                cursor: "pointer",
                x: smoothX,
                y: smoothY,
            }}
        >
            <span style={{ opacity: 0.5 }}>{index}</span>
            <span>{title}</span>
            <span style={{ opacity: 0.5 }}>{category}</span>
        </motion.div>
    )
}

export default function SelectedWorks4({
    works = [
        { title: "Yehor Lemzyakoff", category: "Figma" },
        { title: "Portfolio", category: "Framer" },
        { title: "abc Buchhandlung", category: "HTML, CSS, JS" },
        { title: "Project 4", category: "React" },
    ],
    fontSize = 32,
}) {
    return (
        <div
            style={{
                fontSize,
                fontWeight: 500,
                width: "100%",
                color: "#fff",
                fontFamily: "Montserrat, sans-serif",
            }}
        >
            <div
                style={{
                    marginBottom: 32,
                    opacity: 0.6,
                    fontSize: fontSize * 0.7,
                }}
            />

            {works.map((work, i) => (
                <React.Fragment key={i}>
                    <WorkRow
                        index={(i + 1).toString().padStart(2, "0")}
                        title={work.title}
                        category={work.category}
                    />

                    {i < works.length - 1 && (
                        <div
                            style={{
                                height: 1,
                                backgroundColor: "rgba(255,255,255,0.2)",
                                margin: "0 0 0 60px",
                            }}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}