import React from 'react'
import {useState} from 'react'
import {useTodo} from "../Contexts/TodoContext"
import { Pencil, Save, Trash2, CheckCircle, Circle } from "lucide-react";

function TodoItem({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const {updateTodo, deleteTodo, toggleTodo} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleTodo(todo.id)
  }

  return (
    <div
  className={`flex items-center border border-black/10 rounded-xl px-4 py-2 gap-x-3 shadow-sm transition-all duration-300 group ${
    todo.completed ? "bg-[#d6f0be] opacity-80" : "bg-[#dfd3e8]"
  }`}
>
  <button 
    onClick={toggleCompleted}
    className={`shrink-0 transition-colors ${todo.completed ? "text-green-600" : "text-gray-400 hover:text-purple-600"}`}
  >
    {todo.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
  </button>
  
  <input
    type="text"
    className={`border-none outline-none w-full bg-transparent text-sm font-medium transition-all ${
      isTodoEditable ? "bg-white/50 px-2 py-1 rounded-md ring-1 ring-black/5" : ""
    } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
  />

  <div className="flex gap-x-2 shrink-0">
    <button
      className={`inline-flex w-9 h-9 rounded-lg transition-all duration-200 justify-center items-center shadow-sm border ${
        isTodoEditable
          ? "bg-green-500 border-green-600 text-white hover:bg-green-600"
          : "bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600"
      } disabled:opacity-50`}
      onClick={() => {
        if (todo.completed) return;
        if (isTodoEditable) {
          editTodo();
        } else setIsTodoEditable((prev) => !prev);
      }}
      disabled={todo.completed}
    >
      {isTodoEditable ? <Save size={18} /> : <Pencil size={18} />}
    </button>

    <button
      className="inline-flex w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-400 transition-all duration-200 justify-center items-center hover:bg-red-50 hover:text-red-600 hover:border-red-200 shadow-sm"
      onClick={() => deleteTodo(todo.id)}
    >
      <Trash2 size={18} />
    </button>
  </div>
</div>
  )
}

export default TodoItem