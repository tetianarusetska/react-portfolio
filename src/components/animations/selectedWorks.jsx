import React, { useEffect } from "react" // Funk beim Laden/Wechsel ausführen
import { motion, useMotionValue, useSpring } from "framer-motion" // Bewegungswerte speichern, weiche Bewegung mit Feder-Effekt
import { Link, useLocation } from "react-router-dom" // aktuelle URL erkennen

function WorkRow({ index, title, category, link }) { // erstellt eine einzelne Zeile in der Projektliste
    const x = useMotionValue(0) //hier werden x,y Werte gespeichert. Diese Werte verändern die Pos der Zeile
    const y = useMotionValue(0)

    const smoothX = useSpring(x, { stiffness: 120, damping: 20 }) // statt harter Bewegung wird eine sanfte Federbewegung benutzt
    const smoothY = useSpring(y, { stiffness: 120, damping: 20 })

    function onMouseMove(e) { // Pos der Maus wird gemessen, Abstand zur mItte berechnet, El bewegt sich leicht mit Maus
        const rect = e.currentTarget.getBoundingClientRect()

        x.set((e.clientX - rect.left - rect.width / 2) * 0.15)
        y.set((e.clientY - rect.top - rect.height / 2) * 0.15)
    }

    function onMouseLeave() { // wenn Maus weggeht -> dann geht das El zurück in die Mitte
        x.set(0)
        y.set(0)
    }

    return (
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
            <motion.div // das ist die sichtbare Zeile mit Animationen
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="grid grid-cols-[60px_1fr_auto] items-center py-6 cursor-pointer"
                style={{ x: smoothX, y: smoothY }}
            >
                <span className="opacity-50">{index}</span>
                <span>{title}</span>
                <span className="opacity-50">{category}</span>
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

    useEffect(() => { // wenn man auf ein Proj klickt: die neue Seite startet automatisch oben
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
            className="w-full text-white font-normal font-[Montserrat]"
            style={{ fontSize }}
        >
            {works.map((work, i) => ( // alle Proj werden automatisch angezeigt
                <React.Fragment key={i}>
                    <WorkRow
                        index={(i + 1).toString().padStart(2, "0")}
                        title={work.title}
                        category={work.category}
                        link={work.link}
                    />

                    {i < works.length - 1 && (
                        <div
                            className="h-px bg-white/20 ml-[60px]"
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}