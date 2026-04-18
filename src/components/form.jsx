function Form () {
    return <div className="flex flex-col gap-[20px] mt-[180px] ml-[160px]">
        <div className="flex flex-col gap-[10px]">
            <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">Vorname, Nachname</label>
            <input type="text" className="border-1 h-[26px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"></input>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">Email</label>
            <input type="text" className="border-1 h-[26px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"></input>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">Brief</label>
            <input type="text" className="border-1 h-[100px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"></input>
        </div>
    </div>
}

export default Form