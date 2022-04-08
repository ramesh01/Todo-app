import { useEffect, useState } from "react";
import Todoitem from "../Todoitem/Todoitem";
import { useSelector } from 'react-redux';

const Todolist = (props) => {
    const todo = useSelector((state) => state.todo.todoList);
    const [todoArr, setTodoArr] = useState([]);
    useEffect(() => {
        (todo && todo.length > 0) && setTodoArr([...todo]);
      }, [todo]);
    return(
        <div className="row">
            {todoArr.length > 0 && todoArr.map((item, index)=>{ return <Todoitem key={index} todo={item} />})}
        </div>
    )
}

export default Todolist;