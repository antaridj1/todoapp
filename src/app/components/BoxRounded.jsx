export default function BoxRounded({ children }){
    return (
        <div className="bg-white rounded-xl border-gray-200 dark:bg-gray-900 px-3">
            {children}
        </div>
    );
}