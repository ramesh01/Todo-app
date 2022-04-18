import { useEffect, useState } from "react";
import Todoitem from "../Todoitem/Todoitem";
import { useSelector } from 'react-redux';
import { db } from "../../../firebase_config";
import { collection, getDocs } from "firebase/firestore";
import classes from './Todolist.module.css';
import classNames from 'classnames/bind';
import Loader from "../../Loader/Loader";

const Todolist = () => {
    const todo = useSelector((state) => state.todo.todoList);
    const [todoArr, setTodoArr] = useState([]);
    const todosCollectionRef = collection(db, "todolist");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getTodos = async ()=> {
            const data = await getDocs(todosCollectionRef);
            const dataArr = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            const todoListArr = dataArr.map((el) => ({todo: el.todo, time: new Date(el.time.seconds * 1000), id: el.id}));
            (todoListArr && todoListArr.length >= 0) && setTodoArr(todoListArr);
            setLoading(false);
        };
        getTodos();
      }, [todo]);
    return(
        <div className={`row ${classNames(classes.todo_container)}`}>
            { loading &&  <Loader/> }
            { todoArr.length > 0 && todoArr.map((item, index)=>{ return <Todoitem key={index} id={item.id} todo={item.todo} item={item} />}) }
            { todoArr.length == 0 && <div className={classNames(classes.no_data)}><p>No Todo is found.</p></div> }
        </div>
    )
}

export default Todolist;