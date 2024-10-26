import { useState } from "react";

export default function AddItem({onAdd}){
    const [addItem, setAddItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(addItem.trim()){
            onAdd(addItem.trim());
            setAddItem('');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="my-5">   
            <div className="relative">
                <input 
                    type="text"
                    onChange={(e) => setAddItem(e.target.value)} 
                    value={addItem} 
                    placeholder="Add an activity" 
                    className="block w-full py-4 ps-8 text-lg text-gray-900 border rounded-full bg-[#eaeaea] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button type="submit" className="text-white absolute end-2 bottom-2 p-3 bg-[#6C5FE5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
        </form>
    );
}