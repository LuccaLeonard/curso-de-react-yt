import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tasks({tasks, onDeleteTaskClick, onTaskClick}) {

  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/details?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-900 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">

          <button
            onClick={() => onTaskClick(task.id)}
            className= {`bg-slate-400 w-full text-left text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
            
            {task.title}

            {/* // Teste de verificação do botão */}
            {/* {task.isCompleted ? "COMPLETE" : "INCOMPLETE"} */}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
