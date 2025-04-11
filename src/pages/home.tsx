import { Pause, Play, Square } from "lucide-react"

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-40 ml-2 text-[64px] font-mochiy text-white bg-gradient-to-b">
            <h1>00:00:00</h1>
            <div>
                <button className="bg-orange-500 rounded-full p-4 m-2">
                    <Play size={32} color="white" />
                </button>
                <button className="bg-orange-500 rounded-full p-4 m-2">
                    <Pause size={32} color="white" />
                </button>
                <button className="bg-orange-500 rounded-full p-4 m-2">
                    <Square size={32} color="white" />
                </button>
            </div>
        </div>
    )
    }

export default Home