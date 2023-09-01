import { useState } from "react"

import { useDispatch } from "react-redux";

import {addNewTodo} from "../redux/actions/index.js"

function TodoForm () {

    const [text , settext] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        settext('');
    }

    const onInputChange = (e) => {
        // console.log(e.target.value);
        settext(e.target.value)
    }

    return (
        <form className = 'form' onSubmit={onFormSubmit}>
            <input
            placeholder = "Enter new Todo"
            className = "input"
            onChange={onInputChange}
            />
        </form>
    )
}

export default TodoForm