import img8 from '../../assets/images/image8.png'
import img9 from '../../assets/images/image9.png'
import img10 from '../../assets/images/image10.png'
import img11 from '../../assets/images/image11.png'


export default function Project2() {
    return <div className="project1 flex flex-col justify-center items-center gap-[50px]">
        <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-[32px] font-extralight mt-[80px]">"Portfolio" (Framer) UI, UX</p>
        <p className="my-[10px] px-[260px] flex flex-col gap-[20px] w-[655] h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight mt-[80px]">
            Ich wollte meine kreative Seite bei der Erstellung meines Portfolios zeigen. So ist diese einseitige Visitenkarte entstanden. Sie enthält eine beträchtliche Menge an Code – die gesamte Animation wurde selbst geschrieben. Außerdem plane ich, sie später mit verschiedenen Projekten zu erweitern.
        </p>
        <img src={img8} alt="img8" className="w-[793px] h-[489px]" />
        <img src={img9} alt="img9" className="w-[793px] h-[489px]" />
        <img src={img10} alt="img10" className="w-[793px] h-[489px]" />
        <img src={img11} alt="img11" className="w-[793px] h-[489px]" />
    </div>
}