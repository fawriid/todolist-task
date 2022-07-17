import React, { useEffect, useRef } from "react";

const TodoForm = ({
    name,
    setName,
    edit,
    editName,
    setEditName,
    submitEditHandler,
    submitHandler,
}) => {

    // Auto focus when page loades
    const todoInput = useRef(null);
    useEffect(() => {
        todoInput.current.focus();
    }, []);

    return (
        <div className="mt-3">
            {!edit.id ?
                <form className="input-todo" onSubmit={submitHandler}>
                <input
                    className="form-class"
                    ref={todoInput}
                    type="text"
                    value={name}
                    placeholder="Add your Todo..."
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <button type="submit">Add todo</button>
            </form>
            : (
                <form className="input-todo input-edit" onSubmit={submitEditHandler}>
                    <input
                        ref={todoInput}
                        type="text"
                        value={editName}
                        placeholder="Edit your Todo..."
                        onChange={(e) => {
                            setEditName(e.target.value);
                        }}
                    />
                    <button type="submit">Edit</button>
                </form>
            )}
        </div>
    );
};

export default TodoForm;
