import React, { useEffect, useRef } from "react"

const items = [
    { text: "HTML", animated: true },
    { text: "CSS", animated: false },
    { text: "JavaScript", animated: true },
    { text: "TypeScript", animated: false },
    { text: "React", animated: true },
    { text: "Angular", animated: false },
    { text: "Node.js", animated: true },
]

export default function Typewriter({
    typingSpeed = 110,
    deletingSpeed = 65,
    pauseDuration = 900,
}) {
    const spanRefs = useRef({})

    useEffect(() => {
        const cursors = document.querySelectorAll(".tw-cursor")
        let show = true
        const blink = setInterval(() => {
            show = !show
            cursors.forEach((c) => (c.style.opacity = show ? "1" : "0"))
        }, 500)
        return () => clearInterval(blink)
    }, [])

    useEffect(() => {
        items
            .filter((i) => i.animated)
            .forEach((item, idx) => {
                const el = spanRefs.current[item.text]
                if (!el) return

                let i = 0
                let dir = 1

                const loop = () => {
                    el.textContent = item.text.slice(0, i)
                    if (dir === 1) {
                        i++
                        if (i > item.text.length) {
                            dir = -1
                            setTimeout(loop, pauseDuration)
                            return
                        }
                    } else {
                        i--
                        if (i < 0) {
                            i = 0
                            dir = 1
                            setTimeout(loop, pauseDuration)
                            return
                        }
                    }
                    setTimeout(loop, dir === 1 ? typingSpeed : deletingSpeed)
                }

                setTimeout(loop, idx * 400)
            })
    }, [])

    return (
        <div
            style={{
                width: 370,
                height: 413,
                boxSizing: "border-box",
                overflow: "hidden",
                background: "white",
                backgroundImage:
                    "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "30px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
            }}
        >
            {items.map((item) => (
                <div
                    key={item.text}
                    style={{
                        fontFamily: "Boxing",
                        fontSize: 42,
                        lineHeight: 1.08,
                        fontWeight: 500,
                        color: "#C70505",
                        lineHeight: 1.1,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        minHeight: "1.15em",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <span
                        ref={(el) => {
                            if (el) spanRefs.current[item.text] = el
                        }}
                    >
                        {item.animated ? "" : item.text}
                    </span>

                    {item.animated && (
                        <span
                            className="tw-cursor"
                            style={{
                                display: "inline-block",
                                width: 4,
                                height: "0.75em",
                                background: "#C70505",
                                marginLeft: 4,
                                verticalAlign: "middle",
                                flexShrink: 0,
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}