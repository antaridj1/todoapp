export default function BoxRounded({ children }){
    return (
        <div className="bg-white w-full px-3 md:px-7 rounded-xl shadow-[0px_3px_10px_1px_rgba(213,208,208,0.1)] border 
            dark:bg-[#5A577D] dark:border-[#686681] dark:shadow-[0px_3px_10px_1px_rgba(0,0,0,0.1)]">
            {children}
        </div>
    );
}