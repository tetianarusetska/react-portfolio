import { Link } from "react-router-dom"

export default function Footer() {

    const links = [
        { target: "/impressum", displayName: "Impressum" },
        { target: "/datenschutz", displayName: "Datenschutz" },
        { target: "/footer-contact", displayName: "Kontakt" }
    ]

    return <div className="relative leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px] flex flex-row justify-center gap-[50px] mt-[250px] mb-[15px]">
        {links.map((link, index) => (
            <Link key={index} to={link.target}>
                {link.displayName}
            </Link>
        ))}
    </div>
}