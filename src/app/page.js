import AddItem from "./components/AddItem";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className="container mt-20 p-5">
      <AddItem />
      <TodoList />
      {/* <CompletedList /> */}
    </div>
  );
}
