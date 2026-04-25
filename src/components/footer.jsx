import {Link} from "react-router-dom"

export default function Footer() {
    return <div className="footer relative">
        <ul className="list-none leading-[1.2em] font-[Monserrat, sans-serif] font-extralight text-[20px] flex flex-row justify-center gap-[50px] mt-[250px] mb-[15px]">
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
            <li><Link to="/footer-contact">Kontakt</Link></li>
        </ul>
    </div>
}