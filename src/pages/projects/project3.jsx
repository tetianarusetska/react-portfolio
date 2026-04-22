import img12 from '../../assets/images/image12.png'
import img13 from '../../assets/images/image13.png'
import img14 from '../../assets/images/image14.png'
import img15 from '../../assets/images/image15.png'
import img16 from '../../assets/images/image16.png'


export default function Project3() {
    return <div className="project1 flex flex-col justify-center items-center gap-[50px] mb-[20px]">
        <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-[32px] font-extralight mt-[80px]">"Portfolio" (Framer) UI, UX</p>
        <p className="my-[10px] px-[260px] flex flex-col gap-[20px] w-[655] h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight mt-[80px]">
            Das Projekt wurde mit Hilfe von HTML, CSS und JavaScript umgesetzt. Das Hauptziel ist es, die Aufmerksamkeit der Kund:innen durch ein ungewöhnliches Design zu gewinnen und das Interesse am Kauf von Büchern, insbesondere bei ABC, zu wecken. Der Code kann hier eingesehen werden: Link        </p>
        <img src={img12} alt="img12" className="w-[793px] h-[489px]" />
        <img src={img15} alt="img15" className="w-[793px] h-[489px]" />
        <img src={img13} alt="img13" className="w-[793px] h-[489px]" />
        <img src={img14} alt="img14" className="w-[793px] h-[489px]" />
        <img src={img16} alt="img16" className="w-[793px] h-[489px]" />
    </div>
}