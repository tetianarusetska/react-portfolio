import React, { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Link, useLocation } from "react-router-dom"

function WorkRow({ index, title, category, link }) {
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
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
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
        </Link>
    )
}

export default function SelectedWorks4({
    works = [
        { title: "Yehor Lemzyakoff", category: "Figma", link: "/project1" },
        { title: "Portfolio", category: "Framer", link: "/project2" },
        { title: "abc Buchhandlung", category: "HTML, CSS, JS", link: "/project3" },
        { title: "Project 4", category: "React, Tailwind", link: "/project4" },
    ],
    fontSize = 32,
}) {
    const location = useLocation()

    useEffect(() => {
        const timeout = setTimeout(() => {
            const container = document.querySelector("#app-scroll")

            if (container) {
                container.scrollTop = 0
            }

            window.scrollTo(0, 0)
            document.documentElement.scrollTop = 0
        }, 0)

        return () => clearTimeout(timeout)
    }, [location.pathname])

    return (
        <div
            style={{
                fontSize,
                fontWeight: 400,
                width: "100%",
                color: "#fff",
                fontFamily: "Montserrat, sans-serif",
            }}
        >
            {works.map((work, i) => (
                <React.Fragment key={i}>
                    <WorkRow
                        index={(i + 1).toString().padStart(2, "0")}
                        title={work.title}
                        category={work.category}
                        link={work.link}
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