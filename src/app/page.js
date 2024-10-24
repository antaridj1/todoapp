import AddItem from "./components/AddItem";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import todos from "./data/todolist";

export default function Home() {

  return (
	<div className="max-w-screen-sm md:max-w-screen-md mx-auto mt-20 p-5">
      	<AddItem />
		<div className="mb-10">
			<div className="flex items-center ms-2 my-3">
				<p className="text-md text-[#6C5FE5] font-bold">TODO</p>
				<hr className="flex-grow ml-2 border-t border-gray-300"/>
			</div>
			{ todos.map(todo => (
				!todo.isCompleted && (
				<TodoList todo={todo}/>))
			)}
		</div>

		<div className="mb-5">
			<div className="flex items-center ms-2 my-3">
				<p className="text-md text-gray-400 font-bold">COMPLETED</p>
				<hr className="flex-grow ml-2 border-t border-gray-300"/>
			</div>

			{ todos.map(todo => (
				todo.isCompleted && (
					<TodoList todo={todo}/> ))
			)}
		</div>
	</div>
  );
}
