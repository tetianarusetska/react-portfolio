import img1 from "../assets/images/1.png"
import TextDisperseLines from '../components/animations/textDisperse.jsx'

function SecondPage () {
    return <div className="h-screen w-screen px-[80px]">
        <div className="flex flex-row gap-[60px]">
            <div className="flex flex-col mt-[80px] flex-1">
                <div className="aboutMe flex flex-col gap-[43px]">
                    <div>
                        <p className="leading-[1.2em] font-[MelodramaLight] text-[72px]">ÜBER MICH</p>
                    </div>
                    <div>
                        <img src={img1} alt="image" className="w-[469px] h-[266px]" />
                    </div>
                </div>
                <div className="downlButton">
                    <button>Lebenslauf</button>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="https://www.facebook.com/p/Tata-Rusetskaya-100014756447608/"></a></li>
                        <li><a href="https://www.linkedin.com/in/tata-rusetskaya-5bb2b41b6/"></a></li>
                        <li><a href="https://wa.me/qr/NVB7GQ5QYMQVJ1"></a></li>
                        <li><a href="t.me/tata_rusetskaya"></a></li>
                        <li><a href="https://www.instagram.com/tata_rusetskaya/"></a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-[123px] mt-[150px] ml-[300px]">
                <div className="textDispAnimation">
                    <TextDisperseLines />
                </div>
                <div className="additInfo flex flex-row gap-[81px]">
                    <div>
                        <p className="leading-[1.2em] font-[MelodramaLight] text-[32px]">SPRACHE:</p>
                        <p className="leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight mt-[10px]">Deutsch, Englisch,<br></br>Ukrainisch,<br></br>Russisch</p>
                    </div>
                    <div>
                        <p className="leading-[1.2em] font-[MelodramaLight] text-[32px]">HOBBY:</p>
                        <p className="leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight mt-[10px]">Analoge Fotografie</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SecondPage