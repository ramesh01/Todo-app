import { useState } from "react";
import classes from './Todo.module.css';
import classNames from 'classnames/bind';
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo";

const Todo = (props) => {

    const dispatch = useDispatch();
    const [todoInput, setTodoInput] = useState('');
    const clearTodoInput = () => {
        setTodoInput('');
    }

    const onchangeHandler = (event) => {
        setTodoInput(event.target.value);
    }

    const addTodoInput = (event) => {
        dispatch(addTodo(todoInput))
        clearTodoInput();
    }

    const checkTodoValue = () => {
        if (todoInput.trim().length > 0) {
            return false;
        }
        return true;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <form>
                    <div className="d-flex justify-content-center  mt-4">
                        <div className="col-6">
                            <input className="form-control" value={todoInput} type="text" maxLength={150} onChange={onchangeHandler}/>
                        </div>
                        <div className={`${classNames(classes.margin_left)}`}>
                            <button type="button" role="button" className={`btn btn-primary ${classNames(classes.margin_right)}`} onClick={addTodoInput} disabled={checkTodoValue()}>Add</button>
                            <button type="button" role="button" className="btn btn-outline-secondary" onClick={clearTodoInput}>Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Todo;