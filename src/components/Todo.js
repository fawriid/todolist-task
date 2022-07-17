import React from "react";

const Todo = ({ item, compeleteTodo, removeTodo, editTodo, editName }) => {
    return (
        <div
            className="todo d-flex justify-content-between align-items-center mt-3 mx-auto"
            key={item.id}
            onClick={compeleteTodo}
        >
            <p className="d-flex align-items-center mt-2">{item.name}</p>
            <div onClick={(e) => e.stopPropagation()}>
                <button className="mx-1 btn btn-primary " onClick={() => editTodo(item.id, editName)}>
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button
                    className="mx-1 btn btn-outline-danger"
                    onClick={() => removeTodo(item.id)}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default Todo;
