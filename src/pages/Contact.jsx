import TextOnPath from '../components/animations/TextOnPath2.jsx'
import Form from '../components/Form.jsx'
import Footer from '../components/Footer.jsx'

function Contact() {
    return <div id='contact' className='h-screen w-screen '>
        <div className="flex flex-row">
            <div className="flex-1">
                <Form />
            </div>
            <div className="flex-1 flex flex-col gap-[25px] mt-[180px] ml-[300px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="leading-[1.2em] font-[MelodramaLight] text-[42px]">Email</p>
                    <p className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[27px]">rusetskatata@gmail.com</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <p className="leading-[1.2em] font-[MelodramaLight] text-[42px]">Telefonnummer</p>
                    <p className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[27px]">+4915121268773</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <p className="leading-[1.2em] font-[MelodramaLight] text-[42px]">Ort</p>
                    <p className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[27px]">Frankfurt am Main, Deutschland</p>
                </div>
            </div>
        </div>
        <div className="textOnP2">
            <TextOnPath />
        </div>
        <div>
            <Footer />
        </div>
    </div>
}

export default Contact 