import { Link } from "react-router-dom"

export default function Menu() {

    const links = [
        { target: "/#aboutme", displayName: "über mich" },
        { target: "/#projects", displayName: "projekte" },
        { target: "/#contact", displayName: "kontakt" },
    ]

    return <div className="menu">
        <nav className="list-none flex flex-row gap-35 leading-[1.2em] mt-5 ml-[160px] font-[MelodramaLight] text-[38px]">
            {links.map((link) => (
                <Link to={link.target}>
                    {link.displayName}
                </Link>
            ))}
        </nav>
    </div>
}