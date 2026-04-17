import TextOnPath from './textOnPath.jsx'

function FirstPageContainer() {
    return <div className="h-screen w-screen">
        <div>
            <nav>
                <ul className="list-none flex flex-row gap-35 leading-[1.2em] mt-5 ml-[80px] font-[MelodramaLight] text-[38px]">
                    <li><a href="#">über mich</a></li>
                    <li><a href="#">projekte</a></li>
                    <li><a href="#">kontakt</a></li>
                </ul>
            </nav>
        </div>
        <div className="w-screen flex flex-row gap-80 items-center justify-center translate-y-80 leading-[1.2em] font-[MelodramaLight] text-[55px]">
            <p>WEB-ENTWICKLERIN</p>
            <p>AUS DER UKRAINE, KIEW</p>
        </div>
        <div className="h-screen w-screen flex items-center justify-center">
            <p className=" font-[MelodramaLight] text-[188px] leading-[1.2em]">TETIANA RUSETSKA</p>
        </div>
        <div>
            <TextOnPath />
        </div>
    </div>
}

export default FirstPageContainer