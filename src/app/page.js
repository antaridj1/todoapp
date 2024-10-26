"use client";
import { useState } from "react";
import AddItem from "./components/AddItem";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import initialTodos from "./data/todolist";
import SectionTitle from "./components/SectionTitle";

export default function Home() {

	const [todos, setTodos] = useState(initialTodos);

	const handleCheck = (id) => {
		const updatedTodos = todos.map(todo => 
			todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
		);
		setTodos(updatedTodos);
	}

	const handleDelete = (id) => {
		const updatedTodos = todos.filter(todo => todo.id !== id);
		setTodos(updatedTodos);
	}

	const handleEdit = (id, value) => {
		const updatedTodos = todos.map(todo => 
			todo.id === id ? {...todo, name: value} : todo
		);
		setTodos(updatedTodos);
	}

	const handleAdd = (value) => {
		const newTodo = {
			id: todos.length ? todos[todos.length - 1].id + 1 : 1,
			name: value,
			isCompleted: false
		}
		setTodos([...todos, newTodo]);
	}

	const activeTodos = todos.filter(todo => !todo.isCompleted);
	const completedTodos = todos.filter(todo => todo.isCompleted);

  return (
	<div className="max-w-screen-sm md:max-w-screen-md mx-auto mt-20 p-5">
      	<AddItem onAdd={handleAdd} />
		<div className="mb-10 mt-10">
			<SectionTitle title="TODO" isPrimary={true}/>

			{activeTodos.length ? (
				activeTodos.map(todo => (
					<TodoList
						key={todo.id}
						todo={todo}
						onCheck={handleCheck}
						onDelete={handleDelete}
						onEdit={handleEdit}
					/>
				))
			) : (
				<p className="text-lg text-gray-400 text-center">No active todos!</p>
			)}
		</div>


		{completedTodos.length !== 0 && (
			<div className="mb-5">
				<SectionTitle title="COMPLETED"/>
				{completedTodos.map(todo => (
					<TodoList
						key={todo.id}
						todo={todo}
						onCheck={() => handleCheck(todo.id)}
						onDelete={() => handleDelete(todo.id)}
					/>
				))}
			</div>
		)}
	</div>
  );
}
