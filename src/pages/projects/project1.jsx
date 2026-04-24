import img1 from '../../assets/images/image1.png'
import img2 from '../../assets/images/image2.png'
import img3 from '../../assets/images/image3.png'
import img4 from '../../assets/images/image4.png'
import img5 from '../../assets/images/image5.png'
import img6 from '../../assets/images/image6.png'
import img7 from '../../assets/images/image7.png'

export default function Project1() {
    return <div>
        <a href="/" className="inline-block mt-[30px] mx-[260px] text-[25px] font-extralight">Home</a>
        <div className="project1 flex flex-col justify-center items-center gap-[40px]">
            <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-[32px] font-extralight mt-[50px]">"Yehor Lemzyakoff" (Figma) UI, UX</p>
            <p className="mt-[40px] px-[260px] flex flex-col gap-[20px] w-[655] h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight">
                Die Idee des Projekts besteht darin, eine einzigartige Plattform für einen einzelnen Fotografen zu schaffen. Die Einzigartigkeit liegt darin, dass die Website alle Prozesse der analogen Fotografie zeigt. Außerdem kann man sich auf der Website das Portfolio des Autors, seine Biografie und seine Ausstellungshistorie ansehen sowie ein Fotoshooting buchen. Erstellt in Figma.
            </p>
            <img src={img1} alt="img1" className="w-[793px] h-[489px]" />
            <img src={img2} alt="img2" className="w-[793px] h-[489px]" />
            <img src={img3} alt="img3" className="w-[793px] h-[489px]" />
            <img src={img4} alt="img4" className="w-[793px] h-[489px]" />
            <div className="flex flex-row gap-[14px] mb-[20px]">
                <img src={img5} alt="img5" className="w-[392px] h-[1009px]" />
                <img src={img6} alt="img6" className="w-[276px] h-[1006px]" />
                <img src={img7} alt="img7" className="w-[260px] h-[1009px]" />
            </div>
        </div>
    </div>
}