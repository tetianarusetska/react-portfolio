import * as React from "react"
import { motion, useAnimation } from "framer-motion"

export default function HoverTicker({
    text = "HTML, CSS, JavaScript, TypeScript, React, Angular, Node.js, Vue.js",
    speed = 20,
}) {
    const controls = useAnimation() // hier wird einen Obj erstellt -> um Animation manuell steuern
    const tickerRef = React.useRef(null) // Referenz für HTML-El. Man kann direkt auf das El zugreifen

    const loopAnimation = () => {
        controls.start({ // Animation startet 
            x: ["0%", "-100%"], // der Text bewegt sich von 0% bis 100%
            transition: {
                x: {
                    repeat: Infinity, //unendlich wiederholen
                    ease: "linear", // gleichmäßig Bewegung
                    duration: speed, 
                },
            },
        })
    }

    React.useEffect(() => { // beim Laden startet Animation automatisch
        loopAnimation()
    }, [])

    return (
        <div
            className="overflow-hidden w-full whitespace-nowrap cursor-pointer font-['Boxing'] text-[32px] text-white"
            onMouseEnter={() => controls.stop()}  
            onMouseLeave={() => loopAnimation()} 
        >
            <motion.div // ein normales div, aber mit Animation von Framer Motion
                ref={tickerRef} // um mit El später arbeiten
                animate={controls} // das El bekommt seine Animation
                className="inline-block whitespace-nowrap"
            >
                {text} {text} 
            </motion.div>
        </div>
    )
}
