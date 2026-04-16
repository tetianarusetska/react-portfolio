function FirstPageContainer() {
    return <div className="h-screen w-screen border-2">
        <div>
            <nav>
                <ul className="list-none flex flex-row gap-35 leading-[1.2em] mt-5 ml-[60px] font-[MelodramaLight] text-[32px]">
                    <li><a href="#">über mich</a></li>
                    <li><a href="#">projekte</a></li>
                    <li><a href="#">kontakt</a></li>
                </ul>
            </nav>
        </div>
        <div className="w-screen flex flex-row gap-120 px-[60px] items-center justify-between translate-y-75 leading-[1.2em] font-[MelodramaLight] text-[57px]">
            <p>WEB-ENTWICKLERIN</p>
            <p>AUS DER UKRAINE, KIEW</p>
        </div>
        <div className="h-screen w-screen flex items-center justify-center">
            <p className=" font-[MelodramaLight] text-[218px] leading-[1.2em]">TETIANA RUSETSKA</p>
        </div>
    </div>
}

export default FirstPageContainer