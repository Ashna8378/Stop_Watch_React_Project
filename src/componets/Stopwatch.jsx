import Button from "./Button"
import {useState, useRef} from "react"

function Stopwatch() {
    const [elapseTime, setElapsedTime] = useState(0)
    const startTime = useRef(0)
    const intervalId = useRef(null)

    const handleStart = () => {
        startTime.current = Date.now()
        intervalId.current = setInterval(() => {
            setElapsedTime(Date.now() - startTime.current)
        }, 10)
    }

    const handleStop = () => {
        clearInterval(intervalId.current)
    }

    const handleReset = () => {
        setElapsedTime(0)
    }

    const formatTime = () => {
        let mins = Math.floor(elapseTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapseTime / (1000) % 60)
        let milisecond = Math.floor(elapseTime % 1000 / 10)

        mins = String(mins).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milisecond = String(milisecond).padStart(2, "0")

        return `${mins}:${seconds}:${milisecond}`
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Stopwatch</h1>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg flex flex-col items-center space-y-4 md:space-y-6 w-full max-w-md">
                <div className="text-3xl md:text-4xl font-mono text-gray-800">
                    {formatTime()}
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                    <Button text="Start" handleClick={handleStart} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg border-none"/>
                    <Button text="Stop" handleClick={handleStop} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg border-none"/>
                    <Button text="Reset" handleClick={handleReset} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg border-none"/>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch
