import BoxRounded from "./BoxRounded";

export default function TodoList({todo}){
    return (
        <div className="mb-3">
            <BoxRounded>
                <div className="flex justify-between items-center">
                <div className="flex items-center ps-3 py-1">
                        <div className={`w-6 h-6 flex-shrink-0 rounded-full border-2 dark:border-gray-600 dark:bg-gray-700
                             ${todo.isCompleted? 'bg-green-300 border-green-300' : 'border-gray-300'}`}>
                                {todo.isCompleted && (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="green" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                )}
                        </div>
                        <label className={`w-full py-4 mx-3 text-lg font-medium 
                            ${todo.isCompleted? 'text-gray-400 line-through' : 'text-gray-600'}`}>
                                {todo.name}
                        </label>
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="grey" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                
            </BoxRounded>
        </div>
    );
}