"use client";
import { useState } from "react";
import BoxRounded from "./BoxRounded";
import initialTodos from "../data/todolist";

export default function TodoList({todo, onCheck, onDelete, onEdit}){
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="mb-3">
            <BoxRounded>
                <div className="flex justify-between items-center">
                    <div className="flex items-center ps-3 py-1">
                        <div onClick={() => onCheck(todo.id)} className={`w-6 h-6 bg-none flex-shrink-0 rounded-full border-2 cursor-pointer
                             ${todo.isCompleted? 'bg-green-300 border-green-300' : 'border-gray-300 dark:border-white'}`}>
                                {todo.isCompleted && (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="green" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                )}
                        </div>
                        {isEditing ? (
                            <input 
                                type="text" 
                                defaultValue={todo.name}
                                onChange={(e) => onEdit(todo.id, e.target.value)}
                                onBlur={() => setIsEditing(false)}
                                className={`w-full mx-3 text-md bg-white font-medium text-gray-600 focus:bg-transparent focus:border-none focus:outline-none dark:text-white dark:bg-[#5A577D] `} />
                        ) : (
                            <label 
                                onClick={() => setIsEditing(true)} 
                                className={`w-full mx-3 text-md font-medium 
                                    ${todo.isCompleted? 'text-gray-400 line-through dark:text-[#D5D0D0]' : 'text-gray-600 dark:text-white'}`}>
                                {todo.name}
                            </label>
                        )}
                       
                    </div> 
                    <div onClick={() => onDelete(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={'#AEAEB2'} className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                
            </BoxRounded>
        </div>
    );
}