import { useState } from "react";
import Input from "./Input";

function AddTasks ({onAddTaskSubmit}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return(
        <div className="space-y-4 bg-slate-900 p-6 text-white rounded-md shadow flex flex-col" >
            <Input 
                type="text" 
                placeholder="Digite o título da tarefa" 
                value={title} 
                onChange={(event) => setTitle(event.target.value)} 
            />
            <Input 
                type="text" 
                placeholder="Digite a descrição da tarefa"  
                value={description} 
                onChange={(event) => setDescription(event.target.value)} 
            />

            <button onClick={() => {
                //validação
                if (!title.trim() || !description.trim()) {
                    return alert("Preencha o título e a descrição da tarefa.")
                }
                onAddTaskSubmit( title, description );
                setTitle("");
                setDescription("");
            }} 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"> 
                    Adicionar 
            </button>
        </div>
    );
}

export default AddTasks;