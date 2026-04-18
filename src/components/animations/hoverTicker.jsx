import * as React from "react"
import { motion, useAnimation } from "framer-motion"

export default function HoverTicker({
    text = "HTML, CSS, JavaScript, TypeScript, React, Angular, Node.js, Vue.js",
    speed = 20,
}) {
    const controls = useAnimation()
    const tickerRef = React.useRef(null)

    // Запускаем бесконечную анимацию
    const loopAnimation = () => {
        controls.start({
            x: ["0%", "-100%"],
            transition: {
                x: {
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed, // скорость прокрутки
                },
            },
        })
    }

    // Запускаем анимацию при монтировании
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
            onMouseEnter={() => controls.stop()} // остановка при наведении
            onMouseLeave={() => loopAnimation()} // возобновление при уходе мыши
        >
            <motion.div
                ref={tickerRef}
                animate={controls}
                style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                }}
            >
                {text} {text} {/* дублируем для бесконечного эффекта */}
            </motion.div>
        </div>
    )
}
