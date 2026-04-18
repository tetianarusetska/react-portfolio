import * as React from "react"

export default function TextOnPath() {
    const offsetRef = React.useRef(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            offsetRef.current += 0.2
            if (offsetRef.current > 100) offsetRef.current = 0

            const el = document.getElementById("textPath")
            if (el) {
                el.setAttribute("startOffset", offsetRef.current + "%")
            }
        }, 16)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            style={{
                width: "100%",
                height: "110px",
                transform: "translateY(-280px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "visible",
            }}
        >

            <svg
                width="100%"
                height="500"
                viewBox="0 0 2000 500"
            >

                <path
                    id="tetianaWave"
                    d="
                        M 0 250
                        C 300 60, 600 440, 1000 250
                        C 1300 60, 1600 440, 2000 250
                    "
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                />

                <text
                    fill="white"
                    fontSize="48"
                    fontWeight="400"
                    letterSpacing="3px"
                    fontFamily="Aktura Regular"
                >
                    <textPath id="textPath" href="#tetianaWave">
                        TETIANA RUSETSKA • 27 JÄHRIGE • WEB-ENTWICKLERIN • AUS
                        DER UKRAINE • KIEW • TETIANA RUSETSKA • 27 JÄHRIGE •
                        WEB-ENTWICKLERIN • AUS DER UKRAINE • KIEW • TETIANA
                        RUSETSKA • 27 JÄHRIGE • WEB-ENTWICKLERIN • AUS DER
                        UKRAINE • KIEW
                    </textPath>
                </text>

            </svg>

        </div>
    )
}