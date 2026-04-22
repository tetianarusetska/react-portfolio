import { Download } from "lucide-react";

export default function DownloadButton() {
    return (
        <a
            href="https://drive.google.com/file/d/1eS2INhiSxJC76ZPgY18wK6EHIumeWK3B/view?usp=sharing"
            target="_blank"
            className="
                w-[170px] h-[40px]
                mt-[63px] py-[16px] px-[35px]
                flex items-center justify-center gap-2
                text-white font-extralight text-[20px] font-[Montserrat, sans-serif]
                rounded-3xl
                backdrop-blur-md
                bg-white/10
                border border-white/20
                shadow-lg
                transition-all duration-300
                hover:bg-white/20 hover:scale-[1.03]
                active:scale-[0.98]
            "
        >
            Lebenslauf
            <Download className="w-5 h-5 text-white shrink-0" />
        </a>
    );
}