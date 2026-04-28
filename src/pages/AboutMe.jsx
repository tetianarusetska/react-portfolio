import img1 from "../assets/images/1.png"
import TextDisperseLines from '../components/animations/TextDisperse.jsx'
import DownloadButton from '../components/Button.jsx'
// import TextAbout from '../components/TextAbout.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareLinkedin, faWhatsapp, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons"
import socialLinks from '../data/SocialLinks.json' assert { type: "json" };

function AboutMe() {

    const iconsMap = {
        faSquareFacebook,
        faSquareLinkedin,
        faWhatsapp,
        faTelegram,
        faInstagram
    };

    return <div id="aboutme" className="min-h-screen min-w-screen px-[80px]">
        <div className="flex flex-row gap-[60px]">
            <div className="flex flex-col mt-[80px] flex-1">
                <div className="aboutMe flex flex-col gap-[43px]">
                    <div>
                        <p className="leading-[1.2em] font-[MelodramaLight] text-[72px]">ÜBER MICH</p>
                    </div>
                    <div>
                        <img src={img1} alt="image" className="w-[469px] h-[266px]" />
                        {/* <TextAbout /> */}
                    </div>
                </div>
                <div className="downlButton">
                    <DownloadButton />
                </div>
                <div className="links">
                    <ul className="flex flex-row gap-[6px] mt-[63px]">
                        {socialLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.link}>
                                    <FontAwesomeIcon icon={iconsMap[item.icon]} className="text-white text-4xl"></FontAwesomeIcon>
                                </a>
                            </li>
                        ))}
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

export default AboutMe