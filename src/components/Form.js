import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    // Javascript code
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            // spreading the created todos with spread operator,
            // creating a new todo obj having text, completed and id. 
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);

        setInputText("");
    }

    const statusHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;