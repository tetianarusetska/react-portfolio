import HoverTicker from '../components/animations/HoverTicker.jsx'
import SelectedWorks4 from '../components/animations/SelectedWorks.jsx'

function Projects () {
    return <div id='projects'>
        <div>
            <p className="text-center leading-[1.2em] font-[MelodramaLight] text-[72px]">MEINE PROJEKTE</p>
        </div>
        <div className="ml-[60px] mr-[60px]">
            <SelectedWorks4 />
        </div>
        <div className="mt-[30px]">
            <HoverTicker />
        </div>
    </div>
}

export default Projects