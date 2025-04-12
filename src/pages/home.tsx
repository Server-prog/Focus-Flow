import { useState, useEffect, useRef } from "react";
import { Pause, Play, Square, MoreHorizontal, Send, Trash } from "lucide-react";
import { useSound } from '../hooks/useSound'

const Home = () => {
  const [showOptions, setShowOptions] = useState<number | null>(null);

  const deleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };
  
  const { play } = useSound('/sounds/som1.mp3', 0.7)

  const handleEnd = () => {
    play()
    console.log("Pomodoro finalizado!")
  }
  const initialTime = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [, setIsPaused] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<{ name: string; status: "pendente" | "em andamento" | "concluída"; }[]>([]);
  const [currentTask, setCurrentTask] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const addTask = () => {
    if (taskName.trim() !== "") {
      setTasks((prev) => [...prev, { name: taskName, status: "pendente" }]);
      setTaskName("");
    }
  };

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(initialTime);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const toggleTaskStatus = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index
          ? {
              ...task,
              status:
                task.status === "concluída"
                  ? "pendente"
                  : task.status === "em andamento"
                  ? "concluída"
                  : "em andamento",
            }
          : task
      )
    );
  };

  const renderStatusBadge = (status: "pendente" | "em andamento" | "concluída") => {
    let color = "border-gray-500 text-gray-500";
    let dotColor = "bg-gray-500";
    let label = "pendente";

    if (status === "em andamento") {
      color = "text-orange-500 border-orange-500";
      dotColor = "bg-yellow-400";
      label = "em andamento";
    } else if (status === "concluída") {
      color = "text-green-500 border-green-500";
      dotColor = "bg-green-400";
      label = "concluída";
    }

    return (
      <span className={`flex items-center gap-1 px-3 py-1 text-xs border rounded-full ${color}`}>
        <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
        {label}
      </span>
    );
  };

  useEffect(() => {
    if (isReset) {
      setTimeLeft(initialTime);
      setIsReset(false);
    }
  }, [isReset]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      play();
      console.log("Pomodoro finalizado!");
      setIsRunning(false);
    }
  }, [timeLeft, isRunning]);
  

  return (
    <div className="flex flex-col items-center justify-center mt-6 ml-2 text-[18px] text-white bg-gradient-to-b">

        <div className="mt-4 p-4">
            {currentTask ? (
                <h2 className="text-lg text-black dark:text-white font-mono">Current task: {currentTask}</h2>
              ) : (
                <h2></h2>
            )}
        </div>

      <h1 className="text-black dark:text-white text-7xl font-mochiy">{formatTime(timeLeft)}</h1>

      <div className="mt-6">
        <button 
          className="bg-orange-500 rounded-full p-4 m-2"
          onClick={startTimer}
          disabled={isRunning}
        >
          <Play size={20} color="white" onClick={handleEnd} />
        </button>

        <button 
          className="bg-orange-500 rounded-full p-4 m-2"
          onClick={pauseTimer}
          disabled={!isRunning}
        >
          <Pause size={20} color="white" />
        </button>

        <button 
          className="bg-orange-500 rounded-full p-4 m-2"
          onClick={resetTimer}
        >
          <Square size={20} color="white" />
        </button>
      </div>

      <div className="mt-6 gap-4 flex justify-center">
        <input 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
          className="w-[300px] p-2 border border-gray-950 dark:border-gray-300 rounded-md bg-gray-500 dark:bg-white dark:text-black mb-2"
          placeholder="Add new focus"
        />
        <button
          className="bg-orange-500 hover:bg-orange-400 dark:text-white text-black py-2 px-4 rounded-lg mb-2"
          onClick={addTask}
        >
            <Send size={20} color="white" />
        </button>
      </div>

      <div className="mt-6 w-[370px] max-w-md">
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-2 rounded-lg bg-white border border-black dark:bg-black cursor-pointer"
              onClick={() => setCurrentTask(task.name)}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.status === "concluída"}
                  onChange={() => toggleTaskStatus(index)}
                  className="w-4 h-4 accent-orange-500"
                />
                <span
                  className={`font-semibold ${
                    task.status === "concluída"
                      ? "line-through text-gray-400"
                      : "text-black dark:text-white"
                  }`}
                >
                  {task.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {renderStatusBadge(task.status)}
                <div className="relative">
                  <button onClick={(e) => {
                    e.stopPropagation();
                    setShowOptions((prev) => (prev === index ? null : index));
                  }}>
                    <MoreHorizontal className="text-black dark:text-white mt-2" />
                  </button>

                  {showOptions === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-x border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteTask(index);
                          setShowOptions(null);
                        }}
                        className="w-full flex justify-center gap-2 text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Deletar <Trash size={18} className="text-red-500 hover:text-red-700 transition-colors" />
                      </button>
                    </div>
                  )}
                </div>

              </div>
              
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Home;