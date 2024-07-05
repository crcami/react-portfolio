import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { DiPhp } from "react-icons/di"
import { SiJavascript } from "react-icons/si"

const Technologies = () => {
    return <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl" style={{ color: '#339933' }}/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhp className="text-7xl" style={{ color: '#777BB4' }}/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl" style={{ color: '#F7DF1E' }}/>
            </div>
        </div>
    </div>


}

export default Technologies
