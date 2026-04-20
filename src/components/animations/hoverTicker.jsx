import * as React from "react"
import { motion, useAnimation } from "framer-motion"

export default function HoverTicker({
    text = "HTML, CSS, JavaScript, TypeScript, React, Angular, Node.js, Vue.js",
    speed = 20,
}) {
    const controls = useAnimation()
    const tickerRef = React.useRef(null)

    const loopAnimation = () => {
        controls.start({
            x: ["0%", "-100%"],
            transition: {
                x: {
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed, 
                },
            },
        })
    }

    React.useEffect(() => {
        loopAnimation()
    }, [])

    return (
        <div
            style={{
                overflow: "hidden",
                width: "100%",
                whiteSpace: "nowrap",
                cursor: "pointer",
                fontFamily: "Boxing",
                fontSize: "32px",
                color: "#fff",
            }}
            onMouseEnter={() => controls.stop()} 
            onMouseLeave={() => loopAnimation()} 
        >
            <motion.div
                ref={tickerRef}
                animate={controls}
                style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                }}
            >
                {text} {text} 
            </motion.div>
        </div>
    )
}
