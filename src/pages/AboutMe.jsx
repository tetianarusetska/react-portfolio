import img1 from "../assets/images/1.png"
import TextDisperseLines from '../components/animations/TextDisperse.jsx'
import DownloadButton from '../components/Button.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareLinkedin, faWhatsapp, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons"

function SecondPage() {
    return <div id="aboutme" className="min-h-screen min-w-screen px-[80px]">
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
                    <DownloadButton />
                </div>
                <div className="links">
                    <ul className="flex flex-row gap-[6px] mt-[63px]">
                        <li>
                            <a href="https://www.facebook.com/p/Tata-Rusetskaya-100014756447608">
                                <FontAwesomeIcon icon={faSquareFacebook} className="text-white text-4xl" />
                            </a>
                        </li>                        
                        <li>
                            <a href="https://www.linkedin.com/in/tata-rusetskaya-5bb2b41b6/">
                                <FontAwesomeIcon icon={faSquareLinkedin} className="text-white text-4xl" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/qr/NVB7GQ5QYMQVJ1">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-white text-4xl" />
                            </a>
                        </li>
                        <li>
                            <a href="t.me/tata_rusetskaya">
                                <FontAwesomeIcon icon={faTelegram} className="text-white text-4xl" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tata_rusetskaya/">
                                <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-[123px] mt-[150px] ml-[300px]">
                <div className="textDispAnimation">
                    <TextDisperseLines />
                </div>
                <div className="additInfo flex flex-row gap-[81px]">
                    <div>
                        <p className="leading-[1.2em] font-[MelodramaLight] text-[38px]">SPRACHE:</p>
                        <p className="leading-[1.2em] font-[Montserrat, sans-serif] text-[25px] font-extralight mt-[10px]">Deutsch, Englisch,<br></br>Ukrainisch,<br></br>Russisch</p>
                    </div>
                    <div>
                        <p className="leading-[1.2em] font-[MelodramaLight] text-[38px]">HOBBY:</p>
                        <p className="leading-[1.2em] font-[Montserrat, sans-serif] text-[25px] font-extralight mt-[10px]">Analoge Fotografie</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SecondPage