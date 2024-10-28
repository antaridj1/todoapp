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
                    className="block w-full py-4 ps-8 text-md text-gray-900 rounded-full bg-[#eaeaea] dark:bg-[#0C0926] dark:text-white dark:placeholder-grey-700"
                />
                <button type="submit" className="text-white absolute end-1 bottom-1 p-3 bg-[#6C5FE5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
        </form>
    );
}