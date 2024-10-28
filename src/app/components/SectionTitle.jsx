export default function SectionTitle({title, isPrimary}){
    const textColor = isPrimary ? 'text-[#6C5FE5] dark:text-white' : 'text-gray-400'
    return (
        <div className="flex items-center ms-2 my-3">
            <p className={`text-md font-bold ${textColor}`}>{title}</p>
            <hr className="flex-grow ml-2 border-t border-gray-300 dark:border-[#433B8B]"/>
        </div>
    );
}