import { useEffect, useState } from "react";
import classes from './Todo.module.css';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../features/todo";
import { db } from "../../firebase_config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const Todo = (props) => {
    const intialValue = {todo: '', id: '', time: ''};
    const dispatch = useDispatch();
    const [todoInput, setTodoInput] = useState(intialValue);
    const todosCollectionRef = collection(db, "todolist");
    const todo = useSelector((state) => state.todo.todoList);

    const clearTodoInput = () => {
        setTodoInput((previousState) => { return intialValue});
    }

    const onchangeHandler = (event) => {
        let {todo, id} = todoInput;
        todo = event.target.value;
        setTodoInput({todo: event.target.value, id: id, time: ''});
    }

    const addTodoInput = async (event) => {
        
        if (todoInput?.id === '') { // Add
            await addDoc(todosCollectionRef, {
                    todo: todoInput.todo, 
                    time: new Date()
                }).then(()=>{
                dispatch(editTodo(intialValue));
            })
        } else { // Update
            const docRef = doc(db, "todolist", todoInput?.id);
            await updateDoc(docRef, {
                todo: todoInput.todo, 
                time: new Date()
            }).then(()=>{
                dispatch(editTodo(intialValue));
            });
        }
        clearTodoInput();
    }

    const checkTodoValue = () => {
        if (Object.keys(todoInput).length !== 0 && todoInput?.todo.trim().length > 0) {
            return false;
        }
        return true;
    }

    useEffect(()=> {
        todo.length > 0 && setTodoInput({todo: todo[0].todo, id: todo[0].id, time: ''});
    }, [todo]);

    return (
        <div className="container mt-4">
            <div className="row">
                <form>
                    <div className="d-flex justify-content-center  mt-4">
                        <div className="col-6">
                            <input className="form-control" value={todoInput?.todo} type="text" maxLength={150} onChange={onchangeHandler}/>
                        </div>
                        <div className={`${classNames(classes.margin_left)}`}>
                            <button type="button" className={`btn btn-primary ${classNames(classes.margin_right)}`}  onClick={addTodoInput} disabled={checkTodoValue()}>
                                {todoInput?.id && <span>Update</span>}
                                {!todoInput?.id && <span>Add</span>}
                            </button>
                            <button type="button" className="btn btn-outline-secondary" onClick={clearTodoInput}>Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Todo;