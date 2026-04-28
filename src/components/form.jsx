function Form() {
    return <div className="flex flex-col gap-[20px] mt-[180px] ml-[160px]">
        <div className="flex flex-col gap-[10px]">
            <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">Vorname, Nachname</label>
            <input type="text" required={true} name='name'
                className="border-1 h-[26px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]">
            </input>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">Email</label>
            <input type="text" required={true}
                className="border-1 h-[26px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]">
            </input>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">Brief</label>
            <textarea maxLength={300} name='message' required={true} 
            className="border-1 h-[100px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]">
            </textarea>
        </div>
        <button className="w-[96px] h-[31px] text-center text-black bg-white leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]">
            Submit
        </button>
    </div>
}

export default Form