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
    const spanRefs = useRef({}) // hier werden Referenzen für jedes Wort gespeichert. Damit kann man später direkt den Text ändern

    useEffect(() => {            
        const cursors = document.querySelectorAll(".tw-cursor")
        let show = true
        const blink = setInterval(() => {
            show = !show
            cursors.forEach((c) => (c.style.opacity = show ? "1" : "0"))
        }, 500)
        return () => clearInterval(blink)
    }, [])

    useEffect(() => {          // hier startet die Animation
        items
            .filter((i) => i.animated) // nur Worte mit animated: true werden animiert
            .forEach((item, idx) => {
                const el = spanRefs.current[item.text]
                if (!el) return

                let i = 0
                let dir = 1

                const loop = () => {
                    el.textContent = item.text.slice(0, i) // zeigt nur einen Teil des Wortes
                    if (dir === 1) { //schreiben
                        i++
                        if (i > item.text.length) {
                            dir = -1 // löschen
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

                setTimeout(loop, idx * 400) // jedes Wort startet etwas später. Dadurch laufen nicht alle gleichzeitig
            })
    }, [])

    return (
        <div
            className="w-[370px] h-[413px] box-border overflow-hidden bg-white flex flex-col justify-center gap-[10px] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[length:30px_30px]"
        >
            {items.map((item) => ( // alle Worte werden untereinander angezeigt
                <div
                    key={item.text}
                    className="font-['Boxing'] text-[42px] leading-[1.1] font-medium text-[#C70505] tracking-[0.04em] uppercase min-h-[1.15em] flex items-center"
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
                            className="tw-cursor inline-block w-1 h-[0.75em] bg-[#C70505] ml-1 align-middle shrink-0"
                        />
                    )}
                </div>
            ))}
        </div>
    )
}