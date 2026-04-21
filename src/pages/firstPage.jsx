import TextOnPath from '../components/animations/textOnPath.jsx'
import Menu from '../components/menu.jsx'

function FirstPage() {
    return <div id="home" className="h-screen w-screen">
        <div className="menu">
            <Menu />
        </div>
        <div className="subtitles w-screen flex flex-row gap-80 items-center justify-center translate-y-80 leading-[1.2em] font-[MelodramaLight] text-[55px]">
            <p>WEB-ENTWICKLERIN</p>
            <p>AUS DER UKRAINE, KIEW</p>
        </div>
        <div className="title h-screen w-screen flex items-center justify-center">
            <p className=" font-[MelodramaLight] text-[188px] leading-[1.2em]">TETIANA RUSETSKA</p>
        </div>
        <div className="textOnPAnimation">
            <TextOnPath />
        </div>
    </div>
}

export default FirstPage