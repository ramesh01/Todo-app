import classNames from 'classnames/bind';
import classes from './Todoitem.module.css';

const Todoitem = (prop) => {
    return (
        <>
        <div className="col-3 mb-3">
            <div className={`card ${classNames(classes.card_height)}`}>
                <div className="card-body">
                    <p className="card-text">{prop.todo}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todoitem;