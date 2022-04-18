import classNames from 'classnames/bind';
import classes from './Todoitem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { db } from "../../../firebase_config";
import { deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../../features/todo";

const Todoitem = (prop) => {
    
    const dispatch = useDispatch();
    const deleteTodoItem = async (data) => {
        const docRef = doc(db, 'todolist', data.id);
        await deleteDoc(docRef).then(()=>{
            dispatch(addTodo({todo: '', id: '', time: ''}));
        });
    }

    const EditTodoItem = async (data) => {
        const {todo, id} = data.item;
        dispatch(editTodo({todo: todo, id: id, time: ''}));
    }
    return (
        <>
        <div className="col-3 mb-3">
            <div className={`card ${classNames(classes.card_height)}`}>
                <div className="card-body">
                    <FontAwesomeIcon className={classNames(classes.icon_text_right, classes.icon_edit_margin_right, classes.icon_edit_color)}  icon={faPencil} onClick={()=>{EditTodoItem(prop)}} />
                    <FontAwesomeIcon className={classNames(classes.icon_text_right, classes.icon_delete_color)}  icon={faTrash} onClick={()=>{deleteTodoItem(prop)}} />
                    <p className="card-text mt-2">{prop.todo}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todoitem;