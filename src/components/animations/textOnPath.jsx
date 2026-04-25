import * as React from "react"

export default function TextOnPath() {
    const offsetRef = React.useRef(0)                            // ein Wert gespeichert, wo der Text auf der Linie starte

    React.useEffect(() => {                                      // dieser Code startet nur einmal beim Laden
        const interval = setInterval(() => {                     // alle 16 Sek wird etwas aktuallisiert. Dadurch wirkt Animation flüssig
            offsetRef.current += 0.2                             // der Startpunkt vom text wird ständig erhöht. Also bewegt sich Text weiter
            if (offsetRef.current > 100) offsetRef.current = 0   // wenn der Wert 100% erreciht -> startet die Animation weiter von vorne

            const el = document.getElementById("textPath")      
            if (el) {
                el.setAttribute("startOffset", offsetRef.current + "%") // verschiebt den Text auf dem Pfad. Dadurch läuft der Text entlang die Linie
            }
        }, 16)

        return () => clearInterval(interval)                      // wenn die Komponent verschwindet -> Timer wird gestoppt
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