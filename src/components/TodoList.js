import { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
    // Edit state for updating and editing Todo(mostly for pass the ID)
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });
    // Again for editing Todo
    const [editName, setEditName] = useState("");
    // Name of Todo
    const [name, setName] = useState("");
    // All Todos
    const [todos, setTodos] = useState([]);

    // SubmitHandler for add Todos
    const submitHandler = (event) => {
        event.preventDefault();
        if (!name || /^\s*$/.test(name)) {
            return;
        }

        // Generating random Id to access Todos
        const randomId = Math.floor(Math.random() * 9000 + 1);
        const newTodos = [{ name: name, id: randomId }, ...todos];

        setTodos(newTodos);
        setName("");
    };

    // SubmitHandler for edit form
    const submitEditHandler = (eve) => {
        eve.preventDefault();
        if (!editName || /^\s*$/.test(editName)) {
            return;
        }
        setTodos(
            todos.filter((item) => (item.id === edit.id ? (item.name = editName) : item))
        );
        setEditName("");
        setEdit({
            id: null,
            newValue: "",
        });
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // An object to pass the id to submit form
    const editTodo = (id, newValue) => {
        if (edit.id === null) {
            setEdit({
                id: id,
                value: newValue,
            });       
        } else {
            setEdit({
                id: null,
                value:''
            })
        }
    };


    // toggling class to check for compelete
    const compeleteTodo = (e) => {
        e.target.classList.toggle("compelete");
    };

    // UseEffect to get stored Todos from LocalStorage and push it to Todos list
    useEffect(() => {
        let todosFromLS = JSON.parse(localStorage.getItem("todosList"));
        if (todosFromLS) {
            setTodos(() => todosFromLS.map((item) => item));
        }
    }, []);

    // UseEffect to set items in LocalStorage
    useEffect(() => {
        localStorage.setItem("todosList", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="container text-center mt-5">
            <h1>What's the Plan for Today?</h1>
            <TodoForm
                name={name}
                setName={setName}
                edit={edit}
                submitEditHandler={submitEditHandler}
                editName={editName}
                setEditName={setEditName}
                submitHandler={submitHandler}
            />

            <h2 className="mt-4">List:</h2>

            {todos.length > 0 && todos.map((item) => (
                <Todo
                    item={item}
                    key={item.id}
                    compeleteTodo={compeleteTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
