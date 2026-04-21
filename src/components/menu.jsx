import { Link } from "react-router-dom"

export default function Menu () {
    return <div className="menu">
        <nav>
                <ul className="list-none flex flex-row gap-35 leading-[1.2em] mt-5 ml-[160px] font-[MelodramaLight] text-[38px]">
                    <li><Link to="/aboutme">über mich</Link></li>
                    <li><Link to="/projects">projekte</Link></li>
                    <li><Link to="/contact">kontakt</Link></li>
                </ul>
            </nav>
    </div>
}