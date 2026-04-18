import img2 from '../assets/images/rectangle.svg'
import Typewriter from '../components/animations/typeWriter.jsx'

function ThirdPage() {
    return <div className="h-screen w-screen">
        <div className="pageTitle">
            <p className="text-center leading-[1.2em] font-[Boxing] text-[72px] mt-[40px]">WEG IN DIE IT</p>
        </div>
        <div className="content flex flex-row">
            <div className="animation flex-1 ml-[160px] mt-[120px]">
                <Typewriter
                    words={["HTML", "JavaScript", "React", "Node.js"]}
                    gap={10}
                    fontSize={60}
                    textColor="#fff"
                />
            </div>
            <div className="itInfo flex-1 flex flex-col gap-[10px] mt-[170px]">
                <p className="leading-[1.2em] font-[Monserrat, sans-serif] font-extralight text-[24px]">Kurs "Frontend-Entwciklung", ucode, 2020-2021</p>
                <img className="w-[2px] h-[80px] ml-[80px]" src={img2} alt="decoration1" />
                <p className="leading-[1.2em] font-[Monserrat, sans-serif] font-extralight text-[24px]">React-Marathon, SoftServe, 2021</p>
                <img className="w-[2px] h-[80px] ml-[80px]" src={img2} alt="decoration2" />
                <p className="leading-[1.2em] font-[Monserrat, sans-serif] font-extralight text-[24px]">Weiterbildung "IHK IT-Fachkraft für<br></br>Web-Entwicklung", Syntax Institut,  2025-2026</p>
            </div>
        </div>
    </div>
}

export default ThirdPage